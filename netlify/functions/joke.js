const fetch = require("node-fetch");
exports.handler = async function(event, context) {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke })
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
};
