/**url() - allows you to launch a web page on a browser window 
 * input: url-address as a string 
  */

describe(`Basic Functions Of WebDriverIO`), () => {
    
    it(`To Launch a Web Page`, async () => {
        
        await browser.url(`https://www.weather.com/`);
       
        await browser.pause(5000);
    })
}

    