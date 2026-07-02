import {test} from '@playwright/test';

test('Dropdown',async({page})=>{
    // await page.goto('https://www.amazon.in')
    
    // // await page.selectOption('[title="Search in"]',{value:"search-alias=beauty"})
    // await page.selectOption('[title="Search in"]',"search-alias=beauty")
    // // await page.selectOption('[title="Search in"]',{label:'Baby'});
    // await page.selectOption('[title="Search in"]','Baby');
    // // await page.selectOption('[title="Search in"]',{index:1});
    // await page.waitForTimeout(4000);


    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
    await page.getByRole('button',{name:'Multi-Select'}).click();
    await page.selectOption('[class="form-multiselect block w-full mt-1"]',[{index:0},{index:1},{index:2}])
    await page.waitForTimeout(4000)
    
})