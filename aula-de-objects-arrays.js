
// array do cachorro

const cachorro = {
    nome: "lailla",
    especie: "cachorro",
    raca: "vira lata",
    idade: 6,
    datas: [],
    dono: { nome: "Duda", celular: "85 99999-9999" },


    imprimirDadosDono() {
        console.log(`sua dona é a ${this.dono.nome} e o seu número de celular é ${this.dono.celular}`)
    },

    verifConsul() {
        if (this.datas.length > 0) {
            console.log(`ela tem ${this.datas.length} consultas pendentes. que são ${this.datas}`);
        }
        else {
            console.log(`Nenhuma consulta encontrada`)
        }
    },
};

console.log(`O nome desse ${cachorro.especie} é ${cachorro.nome}, sua raça é ${cachorro.raca} e ele tem ${cachorro.idade} anos de idade.`);

console.log(cachorro);
cachorro.imprimirDadosDono();
cachorro.verifConsul();





// array do hamster

const hamster = {
    nome: "Floquinho",
    especie: "roedor",
    raca: "porquinho da india",
    idade: 2,
    datas: ["21/03", "01/06"],
    dono: { nome: "Breno", celular: "21 99999-9999" },

    imprimirDadosDono() {
        console.log(`seu dono é ${this.dono.nome} e o seu número de contato é ${this.dono.celular}`)
    },

    verifConsul() {
        if (this.datas.length > 0) {
            console.log(`ela tem ${this.datas.length} consultas pendentes. que são ${this.datas}`);
        }
        else {
            console.log(`Nenhuma consulta encontrada`)
        }
    },

};

console.log(`O nome desse ${hamster.especie} é ${hamster.nome}, sua raça é ${hamster.raca} e ela tem ${hamster.idade} anos de idade.`);

console.log(hamster);
hamster.imprimirDadosDono();
hamster.verifConsul();


