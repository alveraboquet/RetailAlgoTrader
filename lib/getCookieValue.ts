/**
 *
 * @param cookieName - Name of cookie to be retrieved
 * @returns - Value of the cookie
 */
const getCookieValue = (cookieName: string) => {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split('=')[1];
  return cookieValue;
};

export default getCookieValue;
