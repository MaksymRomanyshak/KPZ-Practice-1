const palindrom = function (text) {
  const words = text.toLowerCase().split(' ');
  for (const word of words) {
    const reversedStr = word.split('').reverse().join('');

    reversedStr === word
      ? console.log(
          `${reversedStr
            .replace(reversedStr[0], reversedStr[0].toUpperCase())
            .padEnd(15)}✅`
        )
      : console.log(
          `${word.replace(word[0], word[0].toUpperCase()).padEnd(15)}❌`
        );
  }
};
palindrom('level bicycle radar elephant tenet mountain rainbow noon refer');

const validateIP = function (ipAdress) {
  const ip = ipAdress.split('.');
  if (ip.length === 4) {
    const ipRange = [];
    for (const el of ip) {
      if (el.startsWith('0') && el.length >= 2) break;
      Number(el) >= 0 && Number(el) <= 255 ? ipRange.push(el) : null;
    }
    return ipRange.length === 4;
  } else {
    return false;
  }
};
console.log(validateIP('172.31.255.255')); // Output: true
console.log(validateIP('192.168.1.100')); // Output: true
console.log(validateIP('172.31.375.255')); // Octet value greater than 255
console.log(validateIP('192.168.0')); // Missing octet
console.log(validateIP('192.168.0.1.1')); // Extra octet
console.log(validateIP('192.168.0.100/24')); // CIDR notation used
console.log(validateIP('192.168.0.01')); // Leading zero in octet

const getOS = function () {
  let OSName = 'Unknown';

  if (window.navigator.userAgent.includes('Windows')) OSName = 'Windows';
  if (window.navigator.userAgent.includes('Mac')) OSName = 'Mac';
  if (window.navigator.userAgent.includes('Linux')) OSName = 'Linux';

  return OSName;
};

console.log(getOS());
