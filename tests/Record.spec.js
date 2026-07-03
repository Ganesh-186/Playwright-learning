
import {test, chromium} from '@playwright/test'
 
test('Screeen Record',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo:{
            dir:'./record'
        }
    });
    name = 'Ganesh';
})
