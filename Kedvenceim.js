import Kedvenc from "./Kedvenc.js";
export default class Kedvenceim {
  #lista;
  constructor(lista, szuloElem, urites) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.urites = urites;
    this.megjelenit();
  }
  megjelenit() {
    const eztIsUrit = document.querySelector(".kiv");
    eztIsUrit.innerHTML = "";
    this.urites.innerHTML = "";
    this.szuloElem.innerHTML = "";
    for (let index = 0; index < this.#lista.length; index++) {
      new Kedvenc(this.#lista[index], index, this.szuloElem);
    }
  }
}
