// Dulakshi & Harsha – RSVP to Google Sheets
// Spreadsheet: https://docs.google.com/spreadsheets/d/1ke3olv02pXQyNpl4yTIKrj8KELMHBsDu6-0a0ZvH9wk/edit
const SPREADSHEET_ID = '1ke3olv02pXQyNpl4yTIKrj8KELMHBsDu6-0a0ZvH9wk';

const SHEETS = {
  rsvp: {
    name: 'RSVP',
    headers: ['Timestamp', 'Name', 'Phone Number', 'Attending', 'Number of Guests', 'Invitation Link'],
    row: (p) => [new Date(), p.name, p.phone, p.status, p.guests, p.link],
  },
  wishes: {
    name: 'Wishes',
    headers: ['Timestamp', 'Name', 'Wish'],
    row: (p) => [new Date(), p.name, p.message || p.wish],
  },
};

// Run this once from the Apps Script editor to create the sheets with headers.
function setup() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  Object.keys(SHEETS).forEach((key) => getSheet(spreadsheet, key));
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheetKey = String((e && e.parameter && e.parameter.sheet) || '').toLowerCase();
    if (!SHEETS[sheetKey]) {
      return jsonResponse({ ok: false, error: 'Invalid sheet name. Use rsvp or wishes.' });
    }

    const payload = JSON.parse((e && e.parameter && e.parameter.payload) || '{}');
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getSheet(spreadsheet, sheetKey);

    sheet.appendRow(SHEETS[sheetKey].row(payload).map(sanitize));

    return jsonResponse({ ok: true, sheet: SHEETS[sheetKey].name });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error && error.message ? error.message : error) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: 'dulakshi-harsha-rsvp', timestamp: new Date().toISOString() });
}

// Returns the sheet for `key`, creating it and its header row if needed.
function getSheet(spreadsheet, key) {
  const config = SHEETS[key];
  const sheet = spreadsheet.getSheetByName(config.name) || spreadsheet.insertSheet(config.name);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(config.headers);
    const headerRange = sheet.getRange(1, 1, 1, config.headers.length);
    headerRange.setFontWeight('bold').setBackground('#1F3D2B').setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, config.headers.length);
  }

  return sheet;
}

function sanitize(value) {
  if (value === null || value === undefined) return '';
  if (value instanceof Date) return value;
  const text = String(value).trim();
  // Stop phone numbers like +94... being read as formulas, and keep leading zeros
  return /^[=+\-@0]/.test(text) ? "'" + text : text;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
