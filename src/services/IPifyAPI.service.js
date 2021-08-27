/* 
  This service will receive an IP Address inputted by the user (@SearchBar.js)
    and will fetch IPify's API, returning an object that refers to the IP.

  Also, the object returned from the Promise will be destructured into ip, location and isp.
    IP Address: object.ip
    Location: object.location
    ISP: object.isp
*/

// export const ipify = async (ip) => {
//   return fetch(
//     `https://geo.ipify.org/api/v1?apiKey=at_8Sqj2O6n0XtwXwgvEV4zwHl191z8G&ipAddress=${ip}`
//   )
//     .then((response) => response.json())
//     .then((info) => {
//       const ipInfo = { ip: info.ip, location: info.location, isp: info.isp };
//       console.log("ipInfo", ipInfo);
//       return ipInfo;
//     });
// };

export const ipify = async (ip) => {
  const response = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_8Sqj2O6n0XtwXwgvEV4zwHl191z8G&ipAddress=${ip}`
  );
  const json = await response.json();
  const ipInfo = { ip: json.ip, location: json.location, isp: json.isp };

  return ipInfo;
};
