const puppeteer = require('puppeteer');

(async function main()  {

try {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/67.0.3372.0 Safari/537.36');

    await page.goto('https://edition.cnn.com/business/live-news/economy-china-jerome-powell/index.html');
    await page.waitForSelector('.section');
    const sections = await page.$$('.section'); 

    console.log(sections.length);

    // for(const selection in sections){

    //     const button = await page.$('a.marketing-button');
    //     button.click();

    // }

} catch (error) {

    console.log('our err',error)
    
}

//   await browser.close();
})();