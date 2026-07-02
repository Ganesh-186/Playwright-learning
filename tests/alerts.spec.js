import {test} from '@playwright/test';

test('alerts',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',(Dialog)=>{
        console.log(Dialog.message());
        console.log(Dialog.type());
        if(Dialog.type()==='alert'){
            Dialog.accept();
        }
        else if(Dialog.type()==='confirm'){
            Dialog.dismiss();
        }else{
            Dialog.accept('Ganesh')
        }
    })

    // await page.getByText('Click for JS Alert').click();
    // await page.getByRole('button',{name:'Click for JS Confirm'}).click();
    await page.locator('[onclick="jsPrompt()"]').click();
    await page.waitForTimeout(4000)



    await page.goto('https://www.flipkart.com');
    try{
        await page.waitForSelector('.b3wTlE',{timeout:5000});
        await page.locator('.b3wTlE').click()
    }
    catch{
        console.log('Popup not appeared');
    }
})
