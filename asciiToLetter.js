function asciiToLetter(arr) {
  var myAscii = {
    "31": "", "32": " ", "33": "!", "34": "\"", "35": "#",
    "36": "$", "37": "%", "38": "&", "39": "'", "40": "(",
    "41": ")", "42": "*", "43": "+", "44": ",", "45": "-",
    "46": ".", "47": "/", "48": "0", "49": "1", "50": "2",
    "51": "3", "52": "4", "53": "5", "54": "6", "55": "7",
    "56": "8", "57": "9", "58": ":", "59": ";", "60": "<",
    "61": "=", "62": ">", "63": "?", "64": "@", "65": "A",
    "66": "B", "67": "C", "68": "D", "69": "E", "70": "F",
    "71": "G", "72": "H", "73": "I", "74": "J", "75": "K",
    "76": "L", "77": "M", "78": "N", "79": "O", "80": "P",
    "81": "Q", "82": "R", "83": "S", "84": "T", "85": "U",
    "86": "V", "87": "W", "88": "X", "89": "Y", "90": "Z",
    "91": "[", "92": "\\", "93": "]", "94": "^", "95": "_",
    "96": "`", "97": "a", "98": "b", "99": "c", "100": "d",
    "101": "e", "102": "f", "103": "g", "104": "h", "105": "i",
    "106": "j", "107": "k", "108": "l", "109": "m", "110": "n",
    "111": "o", "112": "p", "113": "q", "114": "r", "115": "s",
    "116": "t", "117": "u", "118": "v", "119": "w", "120": "x",
    "121": "y", "122": "z", "123": "{", "124": "|", "125": "}",
    "126": "~", "127": ""
  };
  var str = "";
  for (var idx = 0; idx < arr.length; idx++) {
    var letter = parseInt(arr[idx]);
    str = str.concat(myAscii[letter]);
  }
  return str;
}

var arr = [104, 116, 116, 112, 115, 58, 47, 47, 101, 110, 103, 105, 110, 101, 101, 114, 105, 110, 103, 45, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 46, 98, 114, 105, 116, 101, 99, 111, 114, 101, 46, 99, 111, 109, 47, 113, 117, 105, 122, 47, 119, 101, 102, 102, 107, 102, 112, 102, 108, 101, 109, 115, 105, 115, 111, 100, 100];
console.log(asciiToLetter(arr));