const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://exercise-library-backend.onrender.com"

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
  // console.log(`Making request to ${url} with options:`, options);
  try {
    const response = await fetch(url, options);
    // console.log("Response", response);
    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();
    // console.log(`Response payload:`, payload);
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

// Create an exercise and send data to the API
export default async function createExercise(exercise, signal) {
// console.log("API_BASE_URL:", API_BASE_URL);

// Extracts exercise_category from the exercise object argument
const exerciseCategory = exercise.exercise_category;
// console.log("exercise_category:", exerciseCategory);

// Maps where the url suffix will land depending on the category
const categoryToUrlSuffix = {
  Knee: "/knee-exercises",
  Hip: "/hip-exercises",
  Push: "/push-exercises",
  Pull: "/pull-exercises",
  Trunk: "/trunk-exercises",
};

// Sets the url suffix to the corresponding category the user entered
const urlSuffix = categoryToUrlSuffix[exerciseCategory];

if(!urlSuffix) {
  throw new Error(`Invalid category: ${exerciseCategory}`);
}

const url = `${API_BASE_URL}${urlSuffix}`;
// console.log("Constructed URL:", url);

  // Send a POST method to the API with reservation info
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: exercise }),
    signal,
  }
  return await fetchJson(url, options, {});
}

export async function listKneeExercise(signal) {
  const url = `${API_BASE_URL}/knee-exercises`; 
  console.log(url);
  return await fetchJson(url, { headers, signal }, []);
};

// Deletes a push exercise
export async function deletePushExercise(exerciseId) {
  const url = `${API_BASE_URL}/push-exercises/${exerciseId}`;
  try {
    const deletedExercise = await fetchJson(url, { method: "DELETE", headers }, {});
    console.log("Exercise deleted successfully", deletedExercise);
    return deletedExercise;
  } catch (error) {
    console.error("Error deleting exercise", error);
    throw error;
  }
}
