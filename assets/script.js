let log = new Log(document.querySelector('.log'))
//Criando o cavaleiro e o monster
let char = new Cavaleiro('Cavaleiro')
let monstro = new LittleMonster()

const stage = new Stage(
    char,
    monstro,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()