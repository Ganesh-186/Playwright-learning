import {test} from '@playwright/test'

test('Keyboard Action',async({page})=>{
    // await page.goto('http://www.amazon.in')
    // await page.getByPlaceholder('Search Amazon').fill('iphone');
    // await page.getByPlaceholder('Search Amazon').fill('12');

    // // await page.getByPlaceholder('Search Amazon').type('iphone',{delay:1000});
    // // await page.getByPlaceholder('Search Amazon').type('12',{delay:1000});
    // await page.getByPlaceholder('Search Amazon').press('Control+A');
    // await page.waitForTimeout(4000)
    // await page.getByPlaceholder('Search Amazon').press('Control+X');
    // await page.waitForTimeout(4000)
    // await page.getByPlaceholder('Search Amazon').press('Control+V');
    // await page.waitForTimeout(4000)
    // await page.keyboard.press('Enter');
    // await page.waitForTimeout(4000);
    // await page.keyboard.press('ArrowDown');

    //Mouse action
    // await page.mouse.wheel(0,1000)
    // await page.waitForTimeout(4000);

    // await page.goto('https://demoqa.com/buttons');
    // // await page.getByText('Double Click Me').dblclick();
    // await page.locator('//button[text()="Click Me"]').click();
    // await page.waitForTimeout(4000);




    await page.goto('https://www.amazon.in')
    await page.getByText('Hello, sign in').hover()
    await page.mouse.move(100,500)
    await page.waitForTimeout(4000)



    // await page.goto('https://jqueryui.com/droppable/');
    // const frame = await page.frameLocator('iframe');
    // // await frame.locator('#draggable').dragTo(await frame.locator('#droppable'));
    // await frame.locator('#draggable').hover();
    // await page.mouse.down();
    // await frame.locator('#droppable')
    // // await page.mouse.move(2,0)
    // await page.mouse.up();

    // await page.waitForTimeout(4000)
})