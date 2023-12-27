//Cavaleiro ou Mago
//LittleMonster ou BigMonster

//Criação de personagem padrão
class Character{
    _life = 1
    maxlife = 1
    attack = 0
    defense = 0

    constructor(name){
        this.name = name
    }

    get life(){
        return this._life
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife
    }
}
//Criação de cada personagem (Cavaleiro, Mago)
class Cavaleiro extends Character{
    constructor(name){
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxlife = this.life
    }
}

class Mago extends Character{
    constructor(name){
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxlife = this.life
    }
}

//Criando os montros
class LittleMonster extends Character{
    constructor(){
        super('LittleMonster')
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxlife = this.life    
    }
}

class BigMonster extends Character{
    constructor(){
        super('BigMonster')
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxlife - this.life
    }
}

//Criando Cenario
class Stage{
    constructor(fighter1, fighter2, fighter1EL, fighter2EL, logObject){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1EL = fighter1EL
        this.fighter2EL = fighter2EL
        this.log = logObject
    }

    start(){
        this.update()

        //Selecionando o botão de atacar e adicionando um evento
        //A partir da função doAttack
        this.fighter1EL.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2EL.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update(){
        //Lutador1 Adicionando o nome
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        //Enchendo a barra de vida
        let f1Pct = (this.fighter1.life / this.fighter1.maxlife * 100)
        this.fighter1EL.querySelector('.bar').style.width = `${f1Pct}%`
        
        //Lutador2 Adicionando o nome
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        //Enchendo a barra de vida
        let f2Pct = (this.fighter2.life / this.fighter2.maxlife * 100)
        this.fighter2EL.querySelector('.bar').style.width = `${f2Pct}%`
        
    }   

        //Criando os ataques
    doAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage('Oponente derrotado')
            return
        }
        //Criando fatores de ataque e defesa (como se fosse "ataque e defesa critico dos RPG")
        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`)
        } else{
            this.log.addMessage(`${attacked.name} consegui defender.`)
        }


        //Para atualizar as informações
        this.update()
    }
}
//Criando Log
class Log{
    lista = []
    constructor(listaEL){
        this.listaEL = listaEL
    }
    addMessage(msg){
        this.lista.push(msg)
        this.render()
    }

    render(){
        this.listaEL.innerHTML = ''

        for (let i in this.lista){
            this.listaEL.innerHTML += `<li>${this.lista[i]}</li>`
        }
    }
}