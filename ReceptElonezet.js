import { kedvencLista } from "./kedvencLista.js";
import Etel from "./Etel.js";

export default class ReceptElonezet {
  #adatObj;
  #index;
  #szuloElem;
  #kedvenc = false;

  constructor(adatObj, index, szuloElem) {
    this.#adatObj = adatObj;
    this.#index = index;
    this.#szuloElem = szuloElem;

    this.buttonElem = document.querySelectorAll(".kedvencekhez");
    this.kepElem = document.querySelectorAll(".kep");

    const receptElem = this.megjelenit();

    this.kedvencecske(receptElem);
    this.kepreKattintas(receptElem);
  }
  megjelenit() {
    let html = `<div class = "receptDarab">
    <p>${this.#adatObj.nev}</p>
     <img class= "kep" src="${this.#adatObj.kep}" alt="">
     <button class="kedvencekhez"> Kedvencekhez</button>
     </div>`;
    this.#szuloElem.insertAdjacentHTML("beforeend", html);
    const utolsoRecept =
      this.#szuloElem.querySelectorAll(".receptDarab")[this.#index];
    const kedvencGomb = utolsoRecept.querySelector(".kedvencekhez");
    const keprKatt = utolsoRecept.querySelector(".kep");
    return utolsoRecept;
  }
  kepreKattintas(receptElem) {
    const kepElem = receptElem.querySelector(".kep");
    kepElem.addEventListener("click", () => {
      const ideRakja = document.querySelector(".kiv");
      new Etel(this.#adatObj, ideRakja);
    });
  }
  kedvencecske(receptElem) {
    const kedvencGomb = receptElem.querySelector(".kedvencekhez");
    console.log(kedvencGomb);
    kedvencGomb.addEventListener("click", () => {
      console.log("axdazs");
      kedvencLista.push(this.#adatObj);
    });
    console.log(kedvencLista);
  }
}
