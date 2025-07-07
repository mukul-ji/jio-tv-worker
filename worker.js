// worker.js
export default {
  async fetch(request, env, ctx) {
    const backendHostname = "https://comply-mysimon-researchers-wonder.trycloudflare.com/"; // Change here when tunnel updates
    const url = new URL(request.url);
    url.hostname = backendHostname;
    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow"
    });
  }
}
