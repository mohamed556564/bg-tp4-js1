"use strict";

//fonction F1: affiche les elements du tableau
function F1() {
    //declaration du tableau d'etudiants (vu slide 39)
    let TableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    //on utilise la boucle for vu slide 45
    for (let i = 0; i < TableauEtudiants.length; i++) {
        console.log(TableauEtudiants[i]);
    }
}
//fonction F2: affiche un objet etudiant
function F2() {
    //declaration d'un objet etudiant (vu slide 40)
    let Etudiant = {
        nom: "Jhon",
        prenom: "Doe",
        age: 30,
    };
    console.log(Etudiant);
}
//fonction F3: affiche un tableau d'objet etudiants
function F3() {
    //declaration d'un tableau d'objets etudiants (vu slide 41)
    let etudiants = [
        {
            id: 1,
            nom: "nom1",
            prenom: "prenom1",
            age: 21,
        },
        {
            id: 2,
            nom: "nom2",
            prenom: "prenom2",
            age: 22,
        },
        {
            id:
             3,
            nom: "nom3",
            prenom: "prenom3",
            age: 23,
        }
    ];
    //affichage sous forme nom-prenom-age
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i].nom + "-" + etudiants[i].prenom + "-" + etudiants[i].age);
    }
}
