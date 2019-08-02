// 还是引入模块
const express = require('express');
// 创建服务器
const app = express();
// 端口和IP地址的绑定
// app.listen(端口，ip，回调函数)
app.listen(8080,()=>{
    console.log('服务器开启成功，可以通过 http://127.0.0.1:8080 访问')
});

// 处理静态济源
// 如果使用这个方法写静态资源，在访问的时候，是不需要带上指定的文件夹的
// app.use(express.static('views'));
// app.use(express.static('assets'));
// 如果使用上面两个的话，浏览器的url里面需要删除对应的文件夹名，比如/views/indexedDB.html,的话是需要删除/views的，如果没删除 会报错，html中也要删除对应的文件引入路径也需要删除

// 如果使用下面的方法实现静态济源处理，就需要带上指定的目录的
// app.use(url前面所需的文件夹名称，指定的静态资源目录)

app.use('/views',express.static('views'));
app.use('/assets',express.static('assets'));

// 使用app监听浏览器的请求
// app.get(访问的url,处理请求的对应函数)
app.get('/',(req,res)=>{
    res.send('你好')
})
// 相当于
// if(req.url === '/'){

// }