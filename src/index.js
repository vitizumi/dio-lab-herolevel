// var init
// Lista de nomes e exp tiers para ter uma amostragem maior 
let heroList = [
    ["A. Kimac", 50], //Ferro
    ["B. Vorcit", 1500], //Bronze
    ["Cirro Ebi", 2001], //Prata
    ["Darve A.", 5000], //Prata
    ["Eathor K.", 5500], //Ouro
    ["Farkas Rurwir", 6999], //Ouro
    ["Golag Dagmul", 7777], //Platina
    ["Hughas Dreklan", 8900], //Ascendente
    ["Indra Qinsir", 10000], //Imortal
    ["John", 9999999] //Radiante
]
let heroExp
let heroPicker
let heroName
let heroTier

// Random heropicker da lista
    // Math.random * 10 pra gerar um valor entre 0~9
    // Math.floor pra dar round down pra int
    // Usa o valor pra pegar um row do vetor
// heroPicker = Math.floor(Math.random() * 10)
// heroName = heroList[heroPicker][0]
// heroExp = heroList[heroPicker][1]

// Loop para passar por toda entrada no vetor
for (heroPicker = 0; heroPicker < (heroList.length); heroPicker++){
    heroName = heroList[heroPicker][0]
    heroExp = heroList[heroPicker][1]

    // Classificacao de tiers
        // De valor maior pra menor para evitar que o código de return ao passar por um tier menor 
    switch (true) {
        case (heroExp > 10000):
            heroTier = "Radiante"
            break
        case (heroExp > 9000):
            heroTier = "Imortal"
            break
        case (heroExp > 8000):
            heroTier = "Ascendente"
            break
        case (heroExp > 7000):
            heroTier = "Platina"
            break
        case (heroExp > 5000):
            heroTier = "Ouro"
            break
        case (heroExp > 2000):
            heroTier = "Prata"
            break
        case (heroExp > 1000):
            heroTier = "Bronze"
            break
        default:
            heroTier = "Ferro"
    }

    // console output
    console.log("O Herói de nome " + heroName + " está no nível de " + heroTier + "."

)}