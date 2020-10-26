const models = require('../model/womanModel.js')
const helper = require('../helper/helper.js')

//Nomes dos métodos para implementação:

//getMaravilhosas
const selectMaravilhosas = models.selectMaravilhosas()

const getMaravilhosas = (request, response) => response.status(200).send(selectMaravilhosas)


//getMaravilhosaById
const getMaravilhosaById = (request, response) => {
    const {id} = request.params

    const findId = models.selectById(id)

    if(findId) {
        response.status(200).send(findId)
    }else{
        response.status(400).send("ID não encontrado!")
    }
}

//addMaravilhosa 
const addMaravilhosa = (request, response) => {
    
    const newMaravilhosa = request.body
    const novaMaravilhosa = {
        id: helper.newId(selectMaravilhosas),
        name: newMaravilhosa.name,
        photo: newMaravilhosa.photo,
        subtitle: newMaravilhosa.subtitle,
        about: newMaravilhosa.about,
        phrase: newMaravilhosa.phrase,
        history: newMaravilhosa.history,
        addedBy: newMaravilhosa.addedBy
    }

    const semNomeRepetido = helper.semNomeRepetido(selectMaravilhosas, newMaravilhosa.name)
    if (semNomeRepetido){
        response.status(400).send("Essa maravilhosa já foi cadastrada.")
    } else {
        if(novaMaravilhosa.id && novaMaravilhosa.name && novaMaravilhosa.photo && novaMaravilhosa.subtitle && novaMaravilhosa.about && novaMaravilhosa.phrase && novaMaravilhosa.history && novaMaravilhosa.addedBy) { 
            const insertData = models.insertData(novaMaravilhosa)
            response.status(201).json(insertData) 
        }else{
            response.status(400).json("Por favor preencha todos os campos.") 
        }        
    }
}

//updateMaravilhosa 
const updateMaravilhosa = (request, response) => {
    const atualizada = request.body
    console.log('body', atualizada)
    const id = parseInt(request.params.id)
    const atualizacaoFeita = models.updateData(id, atualizada)
    response.status(200).send(atualizacaoFeita)
   
}

//deleteMaravilhosa
const deleteMaravilhosa = (request, response) => {
    const id = request.params.id
    const encontrarId = models.selectById(id)
    if(models.deleteData(encontrarId)) {
        response.status(200).send(selectMaravilhosas)
    }else{
        response.status(404).send("ID não encontrado para efetuar a exclusão!")
    }
}

module.exports = {
    getMaravilhosas, 
    getMaravilhosaById,
    addMaravilhosa,
    updateMaravilhosa, 
    deleteMaravilhosa
}