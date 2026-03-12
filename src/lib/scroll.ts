/** Shared scroll utility — 80 px offset matches the sticky header height. */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
