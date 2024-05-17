export function convertCamelCaseToTitleCase(text: string) {
  const res = text.replace(/([A-Z])/g, ' $1').trim();
  return res.charAt(0).toUpperCase() + res.slice(1);
}
