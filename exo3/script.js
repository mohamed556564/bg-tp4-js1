"use strict";

//declaration de la donnees Students
const Students = [
    { id: 1000, nom: "Jhon", prenom: "Doe", note1: 14, note2: 5 },
    { id: 2000, nom: "Bob", prenom: "Carlton", note1: 7, note2: 1 },
    { id: 3000, nom: "Rayane", prenom: "Smith", note1: 13, note2: 3 },
];
//fonction B: un seul parametre float, returne un boolean
function B(moyenne) {
    return moyenne >= 5;
}
//fonction A: parcourt les etudiants et appelle B
function A() {
    for (let s of Students) {
        let moyenne = (s.note1 + s.note2) / 2;
        console.log(s.id + ": " + (B(moyenne) ? "Admis" : "Ajourne"));
    }
}