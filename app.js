const express = require('express');
const path = require('path');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/', function(req,res){
  let articles = [
    {
      id:1,
      title:'Artical One',
      author:'Hurmagur McGilicudy',
      body:'I am an article!'
    },
    {
      id:2,
      title:'Artical Two',
      author:'Hurmagur McGilicudy',
      body:'I am also an article!'
    },
    {
      id:3,
      title:'Artical Three',
      author:'Hurmagur McGilicudy',
      body:'Am I an article?'
    }
  ];
  res.render('index', {
    title:'hello world!',
    articles: articles
  });
});

app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title: 'Add Article'
  });
});

app.listen(3000, function(){
  console.log('Server started on port 3000');
});
