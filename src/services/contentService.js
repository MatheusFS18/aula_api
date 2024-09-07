const contentRepository = require('../repositories/contentRepository');
const containsSpecialCharacters = require('../utils/validation');

class ContentService{
    async getContent(){
        return contentRepository.findAll();
    }

    async createContent(text){
        if(!text){
            throw new Error('Texto em branco')
        }

        if(text.lenght > 300){
            throw new Error('Texto maior que o máximo permitido')
        }

        if(containsSpecialCharacters(text)){
            throw new Error('O texto contém caracter especial')
        }

        return contentRepository.createContent({text});
    }
}

module.exports = new ContentService();