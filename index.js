export default async endpoint => {
  const response = await fetch(endpoint || 'http://api.wipmania.com/');
  const ip = response.text();
  return ip;
};
