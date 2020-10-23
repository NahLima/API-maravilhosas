const data = require('../data/womanData.json')


// selectAllData //getAll
const selectMaravilhosas = () =>{
    return data
  }

//selectById //getId
const selectById =  (id) => {
    const foundId = data.find(item => item.id == id)
    return foundId
}


//insertData // addMaravilhosa
const insertData = (newMaravilhosa) => { 
    data.push(newMaravilhosa)
    return data
}




//updateData
const updateData = (id, atualizada) => { 
    const maravilhosaId = data.map(maravilhosa => maravilhosa.id)
    //console.log(maravilhosaId)

    const atualizaId = maravilhosaId.indexOf(id)
    if (atualizaId < 0) {
        return "ID não encontrado!"
    }
    const maravilhosaUpdateId  = {id, ...atualizada}
    //console.log('maravilhosa atualizado com Id', maravilhosaAtualizadacomId)
    data.splice(atualizaId, 1, maravilhosaUpdateId )

    const found = data.find(maravilhosa => maravilhosa.id === id)

    return found
}

//deleteData
const deleteData = (encontrarId) => {
    const index = data.indexOf(encontrarId)
    data.splice(index, 1)
    return data
}

module.exports = {
    selectMaravilhosas,
    selectById,
    insertData, 
    updateData, 
    deleteData
}