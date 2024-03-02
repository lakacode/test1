"use strict";
/**
 * - data get from data file
 * - [Get Card] => display random card(display) from displayArr
 * - [Pass] => change(remove) card(display) from displayArr to (add) StudiedArr
 * - Data include:
 *  + initArr: Full Data
 *  + displayArr: cards (display)
 *  + studiedArr: cards (display -> studied)
 * - [Reset] => displayArr = initArr
 * - [Add new card] => add new card to displayArr & initArr
 * - Print displayArr
 * - Print studiedArr
 * - Print initArr
 * * Work on localstorage before file
 */

let initArr = JSON.parse(getFromStorage("INIT__ARR", []));
let displayArr = JSON.parse(getFromStorage("DISPLAY__ARR", []));

saveToStorage("DISPLAY__ARR", JSON.stringify(displayArr));

console.log(initArr);
console.log(displayArr);

//DOM
const cardContentDOM = document.querySelector("#card-content");
const btnGetCardDOM = document.querySelector("#get-card");
const btnResetDOM = document.querySelector("#reset-card");
const btnPassedDOM = document.querySelector("#pass-card");
const btnSubmitDOM = document.querySelector("#submit-card");
const inputCardDOM = document.querySelector("#input-card");
const saveCardDOM = document.querySelector("#save-card");

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

btnPassedDOM.disabled = true;
//Click get random card
btnGetCardDOM.addEventListener("click", function () {
  if (displayArr.length > 0 && btnPassedDOM.disabled === true) {
    const displayCard = getRandomElement(displayArr);
    cardContentDOM.textContent = displayCard;
    const indexDisplayCard = displayArr.indexOf(displayCard);
    displayArr.splice(indexDisplayCard, 1);
    saveToStorage("DISPLAY__ARR", JSON.stringify(displayArr));

    console.log(displayArr);
    btnGetCardDOM.disabled = true;
    btnPassedDOM.disabled = false;
  } else {
    cardContentDOM.textContent = "No Display Card!";
    btnGetCardDOM.disabled = true;
  }
});
//click reset
btnResetDOM.addEventListener("click", function () {
  displayArr = [];
  displayArr = initArr.slice();
  saveToStorage("DISPLAY__ARR", JSON.stringify(displayArr));

  btnGetCardDOM.disabled = false;
  btnPassedDOM.disabled = true;
  cardContentDOM.textContent = "Welcome!";
  console.log(displayArr);
  console.log(initArr);
});
//click btn passed
btnPassedDOM.addEventListener("click", function () {
  btnPassedDOM.disabled = true;
  btnGetCardDOM.disabled = false;
});
//click submit new card
btnSubmitDOM.addEventListener("click", function (e) {
  e.preventDefault();
  initArr.push(+inputCardDOM.value);
  saveToStorage("INIT__ARR", JSON.stringify(initArr));
  displayArr.push(+inputCardDOM.value);
  saveToStorage("DISPLAY__ARR", JSON.stringify(displayArr));

  btnPassedDOM.disabled = true;
  btnGetCardDOM.disabled = false;
  inputCardDOM.value = "";
  console.log(displayArr);
  console.log(initArr);
});
