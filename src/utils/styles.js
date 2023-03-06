/**
 * Concatenate classNames together
 */
export function classes(...classes) {
  return classes.filter(Boolean).join(' ');
}
