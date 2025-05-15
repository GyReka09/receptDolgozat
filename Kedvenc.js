import { kedvencLista } from "./kedvencLista.js";

export default class Kedvenc {
  #adatObj;
  #index;
  #szuloElem;
  #kedvenc = false;

  constructor(adatObj, index, szuloElem) {
    this.#adatObj = adatObj;
    this.#index = index;
    this.#szuloElem = szuloElem;

    this.torlesElem = document.querySelectorAll(".torles");

    const receptElem = this.megjelenit();
    this.torlo(receptElem);
  }
  megjelenit() {
    let html = `<div class = "receptDarab">
    <p>${this.#adatObj.nev}</p>
     <img src="${this.#adatObj.kep}" alt="">
     <button class="torles"> Törlés</button>
     </div>`;
    this.#szuloElem.insertAdjacentHTML("beforeend", html);
    const utolsoRecept =
      this.#szuloElem.querySelectorAll(".receptDarab")[this.#index];
    const torlesGomb = utolsoRecept.querySelector(".torles");
    return utolsoRecept;
  }
  torlo(receptElem) {
    const torlesGomb = receptElem.querySelector(".torles");
    console.log(torlesGomb);
    torlesGomb.addEventListener("click", () => {
      console.log("axdazs");
      kedvencLista.pop(this.#adatObj);
    });
    console.log(kedvencLista);
  }
}
