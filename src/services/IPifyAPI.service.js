export const ipify = async (ip) => {
  const response = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_8Sqj2O6n0XtwXwgvEV4zwHl191z8G&ipAddress=${ip}`
  );
  return response.json();
};
