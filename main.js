const knappen = document.querySelector(".knappen");
const rense_knappen = document.querySelector(".rense_knappen");
//av en eller annen grunn måtte jeg bruke queryselector input
const feltet = document.querySelector("input");

let listen = [];
//feilet test, men jeg tror det kan brukes til noe
const test_hent = () => {
  feltet_verdi = feltet.value;
};
//tar input "tekst" og legger det som et listeelemet i HTML.'
const legg_til_html = (tekst) => {
  li = document.createElement("li");
  li_tekst = document.createTextNode(tekst);
  li.appendChild(li_tekst);
  parent = document.getElementById("parent");
  parent.appendChild(li);
};

const rensk_opp = () => {
  feltet.value = "";
};
const slett_html = () => {
  parent = document.getElementById("parent");
  parent.innerHTML = "";
};
// legger til i listen
const legg_til_listen = () => {
  feltet_verdi = feltet.value;
  info_til_listen = {
    ting: feltet_verdi,
    er_slettet: false,
  };
  listen.push(info_til_listen);
  for (let n in listen) {
    legg_til_html(listen[n].ting);
  }
};

const alt_det_knappen_gjør = () => {
  slett_html();
  legg_til_listen();
  rensk_opp();
};
const tomme_listen = () => {
  listen = [];
  rensk_opp();
  slett_html();
};

const alle_li = document.querySelectorAll("li");

const nar_det_klikkes = () => {
  const klikket = document.activeElement;
  console.log(klikket);
};
alle_li.addEventListener("click", nar_det_klikkes);
knappen.addEventListener("click", alt_det_knappen_gjør);
rense_knappen.addEventListener("click", tomme_listen);
