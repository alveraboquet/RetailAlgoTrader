/* eslint-disable security/detect-object-injection */
// Object injection is not an issue here as there is no user input
/**
 * @param obj - Object with keys of form string and values of form integer
 * @returns - Key (string) of the object item with the greatest numerical value
 */
const getMaxValueKey = (obj: { [key: string]: number }): string => {
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
};

export default getMaxValueKey;
