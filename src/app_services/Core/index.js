import config from "./core.config";

class Core {
  constructor() {
    this.baseUrl = config.baseUrl;
    this.port = config.port;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  logError = (error) => {
    console.log("Une erreur est survenue : ", error);
  };

  requestBackend = async (path = "/", method = "GET", body = null) => {
    try {
      const response = await this.http(
        `${this.baseUrl}:${this.port}${path}`,
        method,
        body,
        {
          "Content-Type": "application/json",
        }
      );

      return response;
    } catch (error) {
      this.logError(error);
    }
  };

  http = async (
    url,
    method = "GET",
    body = null,
    headers = {
      "Content-Type": "application/json",
    }
  ) => {
    const response = fetch(url, {
      method: method,
      body: body,
      headers: headers,
    });

    const data = await response.json();

    console.log("data", data);

    return data;
  };
}

export default Core;
