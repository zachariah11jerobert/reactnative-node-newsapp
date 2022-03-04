const News = require("./news/news");

const news = new News();
// news.create({ title: "some title 1", content: "some content 1", category: "political" });

const testAll = async ()=>{
    const data=await news.getAll();
    console.log('Get All',data);
};

testAll();

const testById = async ()=>{
    const data=await news.getSingle('1631807943382');
    console.log('Get Single',data);
};

testById();

const testByCategory = async ()=>{
    const data=await news.getByCategory('tech');
    console.log('Get By Category',data);
};

testByCategory();