/**
 * Navigation configuration — Centralized navigation structure
 */

export interface NavItem {
  /** Navigation link URL */
  href: string;
  /** Translation key for localized label */
  labelKey: string;
  /** Optional icon name */
  icon?: string;
  /** Whether this is an external link */
  external?: boolean;
  /** Sub-navigation items */
  children?: NavItem[];
}

/** Main navigation items for header */
export const mainNav: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/docs", labelKey: "nav.docs" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/contact", labelKey: "nav.contact" },
] as const;

/** Footer navigation grouped by section */
export const footerNav = {
  /** Product links */
  product: [
    { href: "/docs", labelKey: "nav.docs" },
    { href: "/docs/how-to/install", labelKey: "nav.install" },
  ] as const,
  /** Legal pages */
  legal: [
    { href: "/privacy", labelKey: "footer.privacy" },
    { href: "/terms", labelKey: "footer.terms" },
  ] as const,
  /** Social links */
  social: [
    {
      href: "https://github.com/hostisan/hostisan",
      labelKey: "footer.github",
    },
  ] as const,
} as const;

/** Helper function to get navigation items by section */
export function getFooterNav(section: keyof typeof footerNav): NavItem[] {
  return footerNav[section] as unknown as NavItem[];
}
