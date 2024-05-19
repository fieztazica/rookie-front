export function convertCamelCaseToTitleCase(text: string) {
  const res = text.replace(/([A-Z])/g, ' $1').trim();
  return res.charAt(0).toUpperCase() + res.slice(1);
}

export function convertPluralToSingular(text: string) {
  let result = text.toString();
  if (result.endsWith('ies')) {
    result = result.slice(0, -3) + 'y';
  }
  if (result.endsWith('s')) {
    result = result.slice(0, -1);
  }
  return result;
}
