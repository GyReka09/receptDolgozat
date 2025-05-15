import ReceptElonezet from "./ReceptElonezet.js";
export default class Receptek {
  #lista;
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }
  megjelenit() {
    this.szuloElem.innerHTML = "";
    for (let index = 0; index < this.#lista.length; index++) {
      new ReceptElonezet(this.#lista[index], index, this.szuloElem);
    }
  }
}
