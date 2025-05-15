import { receptLista } from "./recept.js";
import { kedvencLista } from "./kedvencLista.js";
import Etel from "./Etel.js";
import Receptek from "./Receptek.js";
import Kedvenceim from "./Kedvenceim.js";
let szam = 0;
const eloreGomb = document.querySelector(".elore");
const hatraGomb = document.querySelector(".hatra");
const receptekHelye = document.querySelector(".teljes");
const elso = new Receptek(receptLista, receptekHelye);
const kedvencMegjelenitGomb = document.querySelector(".kedvencek");
const receptGomb = document.querySelector(".osszes");
const teljesHely = document.querySelector(".egesz");
const teljesRecept = document.querySelector(".receptek");
let elsoTeljes = new Etel(receptLista[szam], teljesRecept);
receptGomb.addEventListener("click", () => {
  const etel = new Etel(receptLista[0], teljesRecept);
  const elso = new Receptek(receptLista, receptekHelye);
});
kedvencMegjelenitGomb.addEventListener("click", () => {
  const kedvi = new Kedvenceim(kedvencLista, receptekHelye, teljesHely);
});

eloreGomb.addEventListener("click", () => {
  szam += 1;
  if (szam > 2) {
    szam = 0;
  }
  const ujEtel = new Etel(receptLista[szam], teljesRecept);
});
hatraGomb.addEventListener("click", () => {
  szam -= 1;
  if (szam < 0) {
    szam = 2;
  }
  const ujEtel = new Etel(receptLista[szam], teljesRecept);
});
