export const getGuestInfoFromUrl = () => {
  let prefix = '';
  let guestName = '';
  let invitationNumber = '';

  if (typeof window === 'undefined') return { prefix, guestName, invitationNumber };

  const params = new URLSearchParams(window.location.search);
  const invite = params.get('invite');
  
  if (invite) {
    try {
      const decoded = decodeURIComponent(atob(invite));
      if (decoded.startsWith('{')) {
        const parsed = JSON.parse(decoded);
        if (parsed.p) prefix = parsed.p;
        if (parsed.n) guestName = parsed.n;
        if (parsed.num) invitationNumber = parsed.num;
      } else {
        const parts = decoded.split('|');
        if (parts[0]) prefix = parts[0];
        if (parts[1]) guestName = parts[1];
        if (parts[2]) invitationNumber = parts[2];
      }
    } catch (e) {
      console.error("Invalid invite link");
    }
  } else {
    const p = params.get('prefix');
    const n = params.get('name');
    const num = params.get('num');
    if (p) prefix = p;
    if (n) guestName = n;
    if (num) invitationNumber = num;
  }

  return { prefix, guestName, invitationNumber };
};

export const getFullGuestName = () => {
  const { prefix, guestName } = getGuestInfoFromUrl();
  if (prefix && prefix !== 'Dear' && guestName) {
    return `${prefix} ${guestName}`;
  }
  return guestName || '';
};
