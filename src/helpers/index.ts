export function capitalize(str: string) {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

export const formatTextBody = (text: string) => {
  text = text
    .replaceAll('&#039;', "'")
    .replaceAll('<br>', '\n')
    .replaceAll('&quot;', '"')
    .replaceAll('&gt;', '>');

  return text;
};
