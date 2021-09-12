const fs=require('fs');

class News{
    constructor(filename){
        this.filename=filename;

        try{
            fs.readdirSync('data');
        }catch(error){
            fs.mkdirSync('data');
        }

        try{
            fs.accessSync(this.filename);
        }catch(error){
            fs.writeFileSync(this.filename,' This is from News class');
        }
    }

    async create(data){
        const tota
    }
}

module.exports = News;