type SheetName = 'rsvp' | 'wishes';

type SheetPayload = Record<string, string | number>;

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAs4N4Y8JMHRnlo9T3UqKsy4pQHA-aEDP1bZFtzMDX9Tf0ngEk6m9DRcuaPHrfW6U4/exec";

export async function submitToGoogleSheet(sheet: SheetName, payload: SheetPayload): Promise<void> {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error('Missing GOOGLE_SCRIPT_URL');
  }

  const body = new URLSearchParams();
  body.append('sheet', sheet);
  body.append('payload', JSON.stringify(payload));

  // Google Apps Script web apps often run cross-origin without CORS headers.
  // no-cors still sends the request, but the response is opaque to the browser.
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
}
