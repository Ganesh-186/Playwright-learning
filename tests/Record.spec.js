
import {test, chromium} from '@playwright/test'
 
test('Screeen Record',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo:{
            dir:'./record'
        }
    });
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto('https://www.flipkart.com')
    await page2.goto('https://www.amazon.in')

    name="Sai"
})
