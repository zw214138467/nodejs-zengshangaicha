/**
 *  express里面提供了一个 专门的router对象学习怎么使用
 * 
 */

// 引入controller
const controller = require('./controller4')

// 引入express
const express = require('express');
// 调用方法 创建一个路由对象
const router = express.Router();//express的路由是一个方法，而且首字母是大写
// 使用router对象，代替app来实现所有的请求监听
// 约定好请求主页的地址是/index
router.get('/index',(req,res)=>{
    controller.getIndex(req,res);
});

// 请求添加页面
router.get('/add',(req,res)=>{
    // 找controller返回一个add的页面
    controller.getAdd(req,res);
});

// 约定以/edit 返回编辑页面
router.get('/edit',(req,res)=>{
controller.getEdit(req,res);
})

router.get('/edit2',(req,res)=>{
    controller.getEdit2(req,res)
})

// 给前端一个根据 id获取原来的数据的接口
router.get('/getHeroById',(req,res)=>{
    controller.getHeroById(req,res)
})

// 此时需要一个可以让前端修改英雄的接口
router.post('/editHeroById',(req,res)=>{
    controller.editHeroById(req,res)
})

// 监听删除的请求
router.get('/deleteHeroById',(req,res)=>{
    controller.deleteHeroById(req,res);
})


// 监听新增数据的请求
// router.post(监听的地址,处理程序);
router.post('/addNewHero',(req,res)=>{
    // console.log(req.body);
    controller.addNewHero(req,res)

})


// 把router对象暴露出去
module.exports = router;