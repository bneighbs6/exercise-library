const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://exercise-library-backend.onrender.com";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

// TODO: SET UP API_BASE_URL from deployed databases url :)

// Create an exercise and send data to the API
export default async function createExercise(exercise, signal) {
  // Send a POST method to the API with reservation info
  const url = `${API_BASE_URL}/knee-exercises`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: exercise }),
    signal,
  }
  return await fetchJson(url, options, {});
}
