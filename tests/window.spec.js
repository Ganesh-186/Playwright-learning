import {expect, test} from '@playwright/test'

test.fail('Window handling',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com');
    await expect.soft(page).toHaveURL('https://www.flipkart.com')
    await page.getByRole('textbox',{name:'Search for Products, Brands and More'}).fill('mobiles');
    await page.keyboard.press('Enter');
    
    const [newtab] = await Promise.all([
        context.waitForEvent('page'),
        page.click('//div[contains(text(),"F70e 5G")]')
    ])
    await newtab.waitForLoadState();
    // await newtab.getByRole('button',{name:'Buy now'}).click();
    await newtab.getByText('Buy now').click();
    console.log(await newtab.title());

    // await expect.soft(newtab).toHaveTitle('Samsung Galaxy F70e 5G') 
    // await expect.soft(newtab).toHaveURL('') 
    await page.bringToFront();
    await newtab.waitForTimeout(4000)

})

test.skip('Assertions',async({page})=>{
    
    await page.goto('https://demoqa.com/text-box')
    // await expect(page.getByRole('button',{name:'Submit'})).toBeEnabled();
    // await expect(page.getByRole('button',{name:'Submit'})).toBeVisible();
    await expect(page.getByRole('button',{name:'Submit'})).not.toBeDisabled();
    await expect(page.getByRole('button',{name:'Submit'})).not.toBeHidden()
    await expect(page.locator('#userName-label')).toHaveText('Full Name');
    await page.pause();
    await expect(page.locator('#userName-label')).toContainText('Full')

})