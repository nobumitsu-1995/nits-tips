export const replaceSpacesWithComma = (str: string) =>
  // eslint-disable-next-line no-irregular-whitespace
  str.replace(/[\s　]+/g, ',')
