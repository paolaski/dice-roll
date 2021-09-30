import '../css/style.scss';

const getRandom = () => Math.floor(Math.random() * 6) + 1;
const getResult = () => document.getElementById("rollresult").innerHTML = getRandom();

document.getElementById("rolldice").addEventListener("click", () => { getResult()});