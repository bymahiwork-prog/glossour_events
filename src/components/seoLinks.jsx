// ─────────────────────────────────────────────────────────────────────────────
// SHARED LINK MAP  –  import this in any component that needs keyword links
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = "https://www.effortlessevents.in";

export const LINKS = {
  home: SITE,
  venues: `${SITE}/search`,
  contact: `${SITE}/contact`,
  about: `${SITE}/about`,
  services: `${SITE}/services`,
  rulesPage: `${SITE}/rules-regulations`,
  termsPage: `${SITE}/t&c`,
  wedding: `${SITE}/search`,
  photoShoot: `${SITE}/search`,
  birthday: `${SITE}/search`,
  corporate: `${SITE}/search`,
  workshop: `${SITE}/search`,
  farmHouses: `${SITE}/search?search=Farmhouse`,
  villas: `${SITE}/search`,
  noida: `${SITE}/search?search=Noida`,
  gurugram: `${SITE}/search?search=Gurugram`,
  delhi: `${SITE}/search?search=Delhi`,
};

// Helper: inline keyword link  — use inside JSX
// <KLink href={LINKS.venues}>venues</KLink>
export function KLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`underline underline-offset-2 decoration-dotted hover:decoration-solid transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
}
