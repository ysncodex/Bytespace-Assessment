export function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m14 18-6-6 6-6" />
      <path d="M8 12h11" />
    </svg>
  );
}

export function EyeIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.6" />
        </>
      ) : (
        <>
          <path d="M3 3l18 18" />
          <path d="M10.6 6.1A10 10 0 0 1 12 6c6 0 9.5 6 9.5 6a16 16 0 0 1-2.2 2.8M6.1 6.1C3.8 7.8 2.5 12 2.5 12s3.5 6 9.5 6c1.2 0 2.3-.2 3.3-.6" />
          <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </>
      )}
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="currentColor" />
      <path
        d="M18.1 10.2h2V7.1c-.35-.05-1.56-.16-3-.16-2.95 0-4.98 1.8-4.98 5.1v2.85H8.8v3.5h3.32V27h4.07v-8.61h3.39l.54-3.5h-3.93v-2.5c0-1.01.27-1.7 1.91-1.7v-.49Z"
        fill="white"
      />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[29px] w-[29px]" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.72-.06-1.25-.2-1.8H12v3.4h5.52a4.72 4.72 0 0 1-2.05 3.1l-.02.11 2.97 2.3.21.02c1.93-1.78 2.97-4.4 2.97-7.33Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.76 0 5.08-.91 6.77-2.48l-3.22-2.5c-.86.58-1.98.98-3.55.98-2.65 0-4.9-1.79-5.7-4.26l-.1.01-3.09 2.39-.04.1A10.23 10.23 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.3 13.74A6.17 6.17 0 0 1 5.96 12c0-.6.12-1.19.32-1.74v-.12L3.15 7.71l-.1.05A10 10 0 0 0 2 12c0 1.52.36 2.96 1.05 4.24l3.25-2.5Z"
      />
      <path
        fill="#EA4335"
        d="M12 6c1.92 0 3.21.83 3.95 1.52l2.89-2.82C17.06 3.04 14.76 2 12 2a10.23 10.23 0 0 0-8.93 5.76l3.23 2.5C7.1 7.79 9.35 6 12 6Z"
      />
    </svg>
  );
}
