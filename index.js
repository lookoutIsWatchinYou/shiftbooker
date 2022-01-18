const puppeteer = require('puppeteer');
var fs = require('fs');
const  config = require('dotenv')
config.config(".env")

envs = {
  user: process.env.USER,
  pass: process.env.PASSWORD
};

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  await page.setViewport({
    width: 800,
    height: 800,
    deviceScaleFactor: 1,
  });
  //page.waitForTimeout(600000);
while (true){
  await page.goto('https://elhnteol.allocate-cloud.com/EmployeeOnlineHealth/ELHNTLIVE/Login');
 
await page.type('#Username', envs.user, {delay:50}); // make both of tthese into env variables
 await page.type('#Password', envs.pass , {delay:50}); 


 await page.waitForTimeout(1000) ;
 await Promise.all([
  page.waitForNavigation(), // The promise resolves after navigation has finished
  page.click("#btnLogin"), // Clicking the link will indirectly cause a navigation
  ]);
  await page.waitForSelector("body > div.main > nav > ul > li:nth-child(3) > a > span") ;
  await Promise.all([

    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click("body > div.main > nav > ul > li:nth-child(3) > a > span"), // Clicking the link will indirectly cause a navigation
    ]);

 await page.waitForTimeout(1000) ;
 //page.click("#")
 var e = 0
while (e<5){
 
const ans = await page.evaluate(()=> {
  var funcans = function lookfortable(e){
  
    console.log(e)

  let length = document.querySelectorAll("#grid > tbody > tr > td").length;
  let elist = document.querySelectorAll("#grid > tbody > tr > td")
  
  if (length>1){
    
    for (i=0;i< length;i++){
      if(elist[i].innerText== "Sun" &&  elist[i+3].innerText == "Day" &&  elist[i+4].innerText == "Patient Services RBTH |4842|"){

    let bookbtn =  "#grid > tbody > tr:nth-child("+ Math.round(i/13) +") > td:nth-child  (" +  (i+11)   + ") > div"
    return bookbtn
   
      }
      else{
      let btn = "#btnNext";
      return btn 
      }
     
         /* if(elist[i].innerText== "Tue" &&  elist[i+3].innerText == "Evening" &&  elist[i+4].innerText == "Patient Services RBTH |4842|"){

            let bookbtn =  "#grid > tbody > tr:nth-child("+ Math.round((i+11)/13) +") > td:nth-child(" +  13   + ") > div"
            //document.querySelector("#grid > tbody > tr:nth-child(1) > td:nth-child(13) > div")
            console.log(i+11);
            return bookbtn}
           */
              //could do with being their own functions for better reusablility
    }
   
}
else{
  let btn = "#btnNext";
  return btn
}
  

    



}
return funcans(0)//can pass function outside this way!

});



if(ans == "#btnNext"){//if we have no shifts on this page go to next!
  console.log(ans)
  await page.waitForSelector(ans)
  await page.waitForTimeout((Math.floor(Math.random()*1000)))


     // The promise resolves after navigation has finished
    await page.click(ans) // Clicking the link will indirectly cause a navigation
  

     // The promise resolves after navigation has finished
    // Clicking the link will indirectly cause a navigation
   
  
  
  await page.waitForTimeout((Math.floor(Math.random()*3000)))
  e+=1
  

}
else{
  
  console.log(ans)
  await page.waitForSelector(ans)
 await page.click(ans)
  //will book the shift be careful!
  await page.waitForSelector("body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-dialog-padding.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.ui-state-hover")


     // The promise resolves after navigation has finished
    await page.click("body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-dialog-padding.ui-draggable.ui-resizable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.ui-state-hover")
     // Clicking the link will indirectly cause a navigation
 
 
   await page.waitForTimeout(2000)
e+=1
}

}
await page.waitForTimeout((Math.floor(Math.random()*5000))) }})()
