//Criando o cavaleiro e o monster
let char = new Cavaleiro('Guilherme')
let monstro = new LittleMonster()

const stage = new Stage(
    char,
    monstro,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

stage.start()