export default class Etel {
  #adatObj;
  #index;
  #szuloElem;

  constructor(adatObj, szuloElem) {
    this.#adatObj = adatObj;

    this.#szuloElem = szuloElem;
    this.megjelenit();
  }
  megjelenit() {
    this.#szuloElem.innerHTML = "";
    let html =
      `<div class="arecept">
        <h3>${this.#adatObj.nev}</h3>
        <ul><li>${this.#adatObj.hozzavalok[0]}</li>
        <li>${this.#adatObj.hozzavalok[1]}</li>
        <li>${this.#adatObj.hozzavalok[2]}</li>
        <li>${this.#adatObj.hozzavalok[3]}</li>
        <li>${this.#adatObj.hozzavalok[4]}</li>
        <li>${this.#adatObj.hozzavalok[5]}</li>` +
      (this.#adatObj.hozzavalok[6] !== undefined
        ? ` <li>${this.#adatObj.hozzavalok[6]}</li>`
        : "") +
      (this.#adatObj.hozzavalok[7] !== undefined
        ? ` <li>${this.#adatObj.hozzavalok[7]}</li>`
        : "") +
      `       </ul>
         <p>${this.#adatObj.leiras}</p>
             <img src="${this.#adatObj.kep}" alt="">
         </div>`;

    this.#szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
