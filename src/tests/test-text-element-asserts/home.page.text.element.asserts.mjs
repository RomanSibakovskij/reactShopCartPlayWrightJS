"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {expect} from "@playwright/test";

class HomePageTextElementAsserts {

    //home page text element assert test method
    async isHomePageTextElementAsExpected(page){
        const homePage = new HomePage(page);
        //text element assert (singular elements)
        //assert home page title is as expected
        const homePageTitle = await homePage.getHomePageTitleText();
        await expect(homePageTitle).toBe("React+Redux Shopping Cart Example");
        //assert home page product table title is as expected
        const homePageProductTableTitle = await homePage.getHomePageProductTableTitleText();
        await expect(homePageProductTableTitle).toBe("Products");
        //shopping cart section
        //assert home page shopping cart section title is as expected
        const homePageShopCartSectionTitle = await homePage.getHomePageShopCartSectionTitleText();
        await expect(homePageShopCartSectionTitle).toBe("Shopping Cart");
    }

    //home page empty shopping cart text element assert test method
    async isHomePageEmptyShopCartTextElementAsExpected(page){
        const homePage = new HomePage(page);
        //text element assert (singular element)
        //shopping cart section
        //assert home page shopping cart section title is as expected
        const homePageEmptyShopCartWarning = await homePage.getHomePageEmptyShopCartWarningText();
        await expect(homePageEmptyShopCartWarning).toBe("Cart is empty");
    }


}
export {HomePageTextElementAsserts};