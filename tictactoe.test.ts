import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    // await driver.sleep(2000)
});

test('Clicking upper left square adds an X', async () => {
    let square = await driver.findElement(By.id('cell-0'))
    await square.click()
    // await driver.sleep(2000)
});

test('Clicking upper right square adds an X', async () => {
    let square = await driver.findElement(By.id('cell-2'))
    await square.click()
    // await driver.sleep(2000)
});

test('Clicking lower right square adds an X', async () => {
    let square = await driver.findElement(By.id('cell-8'))
    await square.click()
    await driver.sleep(2000)
});
