const News = require("../news/news")

const createNews = async (req,res)=>{
    const news =new News();
    const id=news.createId();

    try{
        const imageName=await imageProcess(req,id);
        news.create(req.body,id,imageName);
        res.send('')
    }catch(error){
        console.log('Error while creating news',error.messae);
    }
}

const getSingleNews=async (req,res)=>{
    try{
        const data =await news.getSingle(req.params.id)
        if(!data){
            return res.json({
                success:false,
                message:'Post not found!',
            });
        }

        res.json({
            success:true,
            message:'Post not found!',
        })

    }catch(error){
        res.json({
            success:false,
            message:'Something went wrong, server error!',
        });
        console.log('Error while getting single news',error.message);
    }
}

module.exports={
    createNews
}