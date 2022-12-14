/**
 * Handles GET requests for Stripe
 * @param url
 * @returns data from API or error
 */
export async function fetchGetJSON(url: string) {
  try {
    const data = await fetch(url, {
      headers: { 'X-Custom-Header': 'lollipop' },
    }).then((res) => res.json());
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
}

/**
 * Handles POST requests for Stripe
 * @param url
 * @param data Optional data. Transaction amount when used with Stripe
 * @returns JSON response from API or error
 */
export async function fetchPostJSON(
  url: string,
  data?: Record<string, unknown>
) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'lollipop',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
}
