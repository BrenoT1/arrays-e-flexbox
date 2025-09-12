const pets = [{
    nome: "lailla",
    especie: "cachorro",
    raca: "vira lata",
    idade: 6,},
    {
    nome: "amora",
    especie: "gato",
    raca: "puro",
    idade: 2,
    } ,{
    nome: "lailla",
    especie: "cachorro",
    raca: "vira lata",
    idade: 6,}
]

const container = document.getElementById("containerPet")

pets.forEach(pet => {
    const novoEle = document.createElement("div");
    const novoNome = document.createElement("h2");
    const novoIda = document.createElement("h3");
    const novoEspc = document.createElement("h3");
    const novoraca = document.createElement("h3");
    container.appendChild(novoEle);
    novoEle.appendChild(novoNome);
    novoEle.appendChild(novoIda);
    novoEle.appendChild(novoEspc);
    novoEle.appendChild(novoraca);
    novoNome.innerText = pet.nome;

});
