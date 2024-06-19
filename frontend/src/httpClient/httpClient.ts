export class httpClient {
  //   constructor() {}

  async get(endpoint: string) {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      return data;
    } catch (error) {
      // TODO: notification
      return error;
    }
  }

  //   TODO: payload type
  async post(endpoint: string, payload: any) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      });

      const data = await response.json();

      return data;
    } catch (error) {
      // TODO: notification
      return error;
    }
  }
}
