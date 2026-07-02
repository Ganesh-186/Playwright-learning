import {test} from '@playwright/test'
import { asyncWrapProviders } from 'node:async_hooks';

test('Opening Amazon',async({page})=>{
    await page.goto('https://www.amazon.in');
    console.log(await page.title());
    console.log(await page.url());
    await page.screenshot({path:'./amazon.png'});
    await page.waitForTimeout(4000);
})