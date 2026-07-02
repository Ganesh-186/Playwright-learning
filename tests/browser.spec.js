import {chromium, firefox, test, webkit} from '@playwright/test';

test('browser handling',async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext({
        recordVideo:{
            dir:'./Videos/'
        }
    });
    const page = await context.newPage();
    await page.goto('http://www.amazon.in')
    await page.waitForTimeout(4000)
    const page2 = await context.newPage();
    await page2.goto('https://www.flipkart.com');
    await page2.waitForTimeout(4000)

})