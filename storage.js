"use strict";

// localStorage.clear();
console.log(localStorage);

function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

function getFromStorage(key, defaultVal) {
  return localStorage.getItem(key) ?? JSON.stringify(defaultVal);
}
