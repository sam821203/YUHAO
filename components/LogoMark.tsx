export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={className}>
      <circle cx="21.5" cy="21.5" r="17.6" fill="var(--foreground)" />
      <circle cx="19" cy="19" r="16.5" fill="var(--accent)" stroke="var(--foreground)" strokeWidth="2.2" />
      <path d="M13 11.5 L19 19.5 L25 11.5 M19 19.5 L19 27" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
