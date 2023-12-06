// xhrModule.js
export function xhr(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const contState = JSON.parse(xhr.responseText);
      callback(contState);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}