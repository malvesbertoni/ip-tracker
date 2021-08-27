/* 
  This service will receive an IP Address inputted by the user (@SearchBar.js)
    and will fetch IpWhoIs's API, returning an object that refers to the IP.
*/

export const whois = async (ip) => {
  const response = await fetch(`http://ipwhois.app/json/${ip}`);

  const json = await response.json();

  const ipInfo = {
    ip: json.ip,
    region: json.region,
    city: json.city,
    timezone: json.timezone_gmt,
    latitude: json.latitude,
    longitude: json.longitude,
    isp: json.isp,
  };

  return ipInfo;
};
