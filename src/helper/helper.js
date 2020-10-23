const newId = (array) => {
    if(array.length > 0) {
      return array[array.length - 1].id+1
    } else {
      return 1
    }
  }

const semNomeRepetido = (dados, nome) => {
    const encontrarRepetido = dados.find(Maravilhosa => Maravilhosa.name.toLowerCase() == nome.toLowerCase())
    return encontrarRepetido
}

module.exports = {
    newId,
    semNomeRepetido
} 