import React, { useState } from 'react';
import { Check, Link as LinkIcon, FileText } from 'lucide-react';

export const Admin: React.FC = () => {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [invitationNumber, setInvitationNumber] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);

  const baseUrl = window.location.origin + '/';

  const getGeneratedLink = () => {
    if (!guestName.trim() && !invitationNumber.trim()) return baseUrl;
    const data = `${prefix}|${guestName.trim()}|${invitationNumber.trim()}`;
    const encoded = btoa(encodeURIComponent(data));
    return `${baseUrl}?invite=${encoded}`;
  };
  const generatedLink = getGeneratedLink();

  const generatedMessage = `Dear ${prefix} ${guestName.trim()} ❤️\n\nWith joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.\n\nPlease view our wedding invitation and all the event details through the link below 🌐:\n\n${generatedLink}\n\nYour presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.\n\nWith love,\n❤️ Dulakshi & Harsha`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setMessageCopied(true);
      setTimeout(() => setMessageCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-brand-ivory text-stone-800 p-6 md:p-12 font-sans flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 border border-[#D4AF37]/30">
        <h1 className="text-3xl font-serif text-center mb-8 text-stone-800">Wedding Invitation Link Generator</h1>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-600 uppercase tracking-widest">Prefix</label>
              <select
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
                <option value="Mr. & Mrs.">Mr. & Mrs.</option>
                <option value="Family">Family</option>
                <option value="Dear">Dear</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-stone-600 uppercase tracking-widest">Guest Name</label>
              <input
                type="text"
                placeholder="e.g. Sanjaya"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-600 uppercase tracking-widest">Number</label>
              <input
                type="text"
                placeholder="e.g. 01"
                value={invitationNumber}
                onChange={(e) => setInvitationNumber(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-stone-100 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-600 uppercase tracking-widest">Generated Link</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  readOnly
                  value={generatedLink}
                  className="w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 text-stone-500 text-sm outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className="h-12 px-6 flex items-center justify-center gap-2 bg-stone-800 hover:bg-black text-[#D4AF37] rounded-xl font-medium transition-all sm:min-w-[140px]"
                >
                  {linkCopied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
                  {linkCopied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-600 uppercase tracking-widest">Full Message Template</label>
              <textarea
                readOnly
                value={generatedMessage}
                rows={12}
                className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50 text-stone-600 text-sm outline-none resize-none"
              />
              <button
                onClick={handleCopyMessage}
                className="w-full h-12 mt-2 flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C5A030] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
              >
                {messageCopied ? <Check className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                {messageCopied ? 'Message Copied!' : 'Copy Full Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
