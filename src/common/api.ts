export const request = async (endpoint: string, method: string, body: any = undefined) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  const response = await fetch(endpoint, {
    headers,
    method,
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    return response.json().then((error) => {
      let validation = {};
      let message = error.message || 'Something went wrong';

      if (response.status === 400 && error.errors) {
        validation = error.errors;
        message = error.message || '';
      }

      console.warn(message, validation);
    });
  }

  const data = await response.text();

  return JSON.parse(data);
};

export default request;

export const requestAssignedContentApi = async () => request(
  'https://6347d56a0484786c6e89e5bb.mockapi.io/api/assignments', 'GET', undefined
);
