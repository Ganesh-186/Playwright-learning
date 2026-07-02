import {test} from '@playwright/test'

test('Table',async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    // const table = await page.locator('[class="-striped -highlight table table-striped table-bordered table-hover"]')
    const rows = await page.locator('table tbody tr'); //table -> tbody -> tr
    console.log(await rows.count());
    // for(let i=0; i<await rows.count();i++){
    //     const colms = await rows.nth(i).locator('td');
    //     console.log(await colms.count());

    //     // const text = await colms.allTextContents();
    //     // console.log(text);
    //     for(let j=0;j<await colms.count();j++){
    //         const text = await colms.nth(j).innerText();
    //         console.log(text);
    //     }

    // } 
    for(let i=0; i<await rows.count();i++){
        const text = await rows.nth(i).textContent();
        // console.log(text);
        if(text.includes('Vega')){
            await rows.nth(i).locator('[title="Delete"]').click();
            // const age = await rows.nth(i).locator('td').nth(2).textContent();
            // console.log(age);
        }
    } 
    await page.waitForTimeout(4000)
    



})

/*
1st loop -> rows
2nd loop -> colm data
*/