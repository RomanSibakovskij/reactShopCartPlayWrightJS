"use strict"

class BasePage{
    constructor(page){this.page = page;}

    //wait method (for elements to load)
    async waitForElementLoad(locator, timeout = 5000) {
        await locator.waitFor({ state: 'visible', timeout });
    }

}

export {BasePage};