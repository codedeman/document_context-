const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://edition.cnn.com/2019/08/24/politics/trump-china-trade-war-emergency-economic-powers-act';
const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/news',(req,res) =>{
    rp(url)
    .then(function(html) {

      // title: $('.pg-headline', html).text()
      // res.send(title);
        res.send($('.pg-rail-tall__body', html).text())

        // res.send($('.l-container', html).text())
    //   console.log($('.pg-headline', html).text());
    //   console.log($('.l-container', html).text());
    })
    .catch(function(err) {
  
      console.log('can not read data',err)
      //handle error
    });
    
})




  app.listen(port,() => {

    console.log('Server is up on port'+port)
})

  //zn zn-body-text zn-body zn--idx-0 zn--ordinary zn-has-multiple-containers zn-has-21-containers