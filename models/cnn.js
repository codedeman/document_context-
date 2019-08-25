
const rp = require('request-promise');
const $ = require('cheerio');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000


const url = 'https://edition.cnn.com/style/article/protest-design-future-intl-hnk';

app.get('/text',(req,res)=>{


rp(url)
  .then(function(html) {
      res.send($('.BasicArticle__body', html).text());
    // console.log($('.BasicArticle__body', html).text());
    // console.log($('.BasicArticle__bodyTop', html).text());
  })
  .catch(function(err) {
    //handle error
  });



})


app.listen(port,() => {

    console.log('Server is up on port'+port)
})


  

