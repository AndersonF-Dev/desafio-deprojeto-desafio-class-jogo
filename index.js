class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); 
    }

    atacar() {
      
        const ataques = {
            mago: "usou magia",
            guerreiro: "usou espada",
            monge: "usou artes marciais",
            ninja: "usou shuriken"
        };

        
        const ataque = ataques[this.tipo] || "realizou um ataque comum";

      
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}


const heroi1 = new Hero("Arthur", 25, "guerreiro");
const heroi2 = new Hero("Merlin", 120, "mago");
const heroi3 = new Hero("Kenshin", 30, "ninja");
const heroi4 = new Hero("Shaolin", 40, "monge");


heroi1.atacar(); 
heroi2.atacar();
heroi3.atacar(); 
heroi4.atacar(); 