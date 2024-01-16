const BASE_URL = 'https://657e0c563e3f5b1894637a84.mockapi.io/api/v1/';

// PIZZAS
// "https://657e0c563e3f5b1894637a84.mockapi.io/api/v1/items"

export const getData = async <T>(url: string): Promise<T> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(BASE_URL + url);
    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};
// export const postData = (url: string, body: unknown) => {
//   fetch(BASE_URL + url,headers: {});
// };
