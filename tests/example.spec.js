import {test} from '@playwright/test';

test('Iframe',async({page})=>{
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
  const  frame = await page.frameLocator('[name="globalSqa"]');
  await frame.locator('//h3[text()="JMeter Training"]').click();
  await page.waitForTimeout(4000);
});