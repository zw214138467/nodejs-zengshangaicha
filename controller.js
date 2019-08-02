// 引入model模块，直接使用里面的方法
const model = require('./model');

let controller = {
// 这是对象的定义方法的新语法
getIndex(req,res) {
    model.getAllHero((arr)=>{
        // 把数组放到模板引擎里面渲染
        res.render('index',{arr})
    })
}

}


module.exports = controller;