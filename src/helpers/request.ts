async function request<T>(
  url: string,
  method: string = 'GET',
  body?: object
): Promise<T> {
  const config: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(url, config)
    .then((response) => response.json())
    .then((result) => {
      if (result.error) {
        throw result.error;
      }

      return result as T;
    })
    .catch((error) => {
      throw error;
    });
}

export default request;
