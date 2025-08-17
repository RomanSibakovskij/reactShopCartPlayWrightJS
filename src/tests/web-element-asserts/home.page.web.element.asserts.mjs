"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {expect} from "@playwright/test";

class HomePageWebElementAsserts{

    //home page web element assert test method
    async isHomePageWebElementDisplayed(page){
        const homePage = new HomePage(page);
        //web element assert (singular elements)
        //assert home page title is displayed
        const homePageTitle = await homePage.getHomePageTitle();
        await expect(homePageTitle).toBeVisible();
        //assert home page product table title is displayed
        const homePageProductTableTitle = await homePage.getHomePageProductTableTitle();
        await expect(homePageProductTableTitle).toBeVisible();
    }

    //home page empty shopping cart web element assert test method
    async isHomePageEmptyShoppingCartSectionWebElementDisplayed(page){
        const homePage = new HomePage(page);
        //web element assert (singular elements)
        //assert home page shopping cart section title is displayed
        const homePageShopCartSectionTitle = await homePage.getHomePageShopCartSectionTitle();
        await expect(homePageShopCartSectionTitle).toBeVisible();
        //assert home page shopping cart empty cart warning block is displayed
        const homePageEmptyShopCartWarning = await homePage.getHomePageEmptyShopCartWarning();
        await expect(homePageEmptyShopCartWarning).toBeVisible();
    }

    //home page product table web element assert test method
    async isHomePageProductTableWebElementDisplayed(page){
        const homePage = new HomePage(page);
        //list elements
        //assert home page product table product images are displayed (as a list)
        const homePageProductImgs = await homePage.getHomePageProductImage();
        const homePageProductImgCount = await homePageProductImgs.count();
        for (let i = 0; i < homePageProductImgCount; i++) {
            await expect(homePageProductImgs.nth(i)).toBeVisible();
        }
        //assert home page product table product names are displayed (as a list)
        const homePageProductNames = await homePage.getHomePageProductName();
        const homePageProductNameCount = await homePageProductNames.count();
        for (let i = 0; i < homePageProductNameCount; i++) {
            await expect(homePageProductNames.nth(i)).toBeVisible();
        }
        //assert home page product table product unit prices are displayed (as a list)
        const homePageProductUnitPrices = await homePage.getHomePageProductUnitPrice();
        const homePageProductUnitPriceCount = await homePageProductUnitPrices.count();
        for (let i = 0; i < homePageProductUnitPriceCount; i++) {
            await expect(homePageProductUnitPrices.nth(i)).toBeVisible();
        }
        //assert home page product table product "Add to cart" buttons are displayed (as a list)
        const homePageProductAddToCartBtns = await homePage.getHomePageProductAddToCartBtn();
        const homePageProductAddToCartBtnCount = await homePageProductAddToCartBtns.count();
        for (let i = 0; i < homePageProductAddToCartBtnCount; i++) {
            await expect(homePageProductAddToCartBtns.nth(i)).toBeVisible();
        }
    }

    //home page shopping cart web element assert test method
    async isHomePageShopCartWebElementDisplayed(page){
        const homePage = new HomePage(page);
        //assert home page shopping cart section title is displayed
        const homePageShopCartSectionTitle = await homePage.getHomePageShopCartSectionTitle();
        await expect(homePageShopCartSectionTitle).toBeVisible();
        //list elements
        //assert home page shopping cart section product remove buttons are displayed (as a list)
        const homePageShopCartProductRemoveBtns = await homePage.getHomePageShopCartProductRemoveButton();
        const homePageShopCartProductRemoveBtnCount = await homePageShopCartProductRemoveBtns.count();
        for (let i = 0; i < homePageShopCartProductRemoveBtnCount; i++) {
            await expect(homePageShopCartProductRemoveBtns.nth(i)).toBeVisible();
        }
        //assert home page shopping cart section product names are displayed (as a list)
        const homePageShopCartProductNames = await homePage.getHomePageShopCartProductName();
        const homePageShopCartProductNameCount = await homePageShopCartProductNames.count();
        for (let i = 0; i < homePageShopCartProductNameCount; i++) {
            await expect(homePageShopCartProductNames.nth(i)).toBeVisible();
        }
        //assert home page shopping cart section product unit prices are displayed (as a list)
        const homePageShopCartProductUnitPrices = await homePage.getHomePageShopCartProductUnitPrice();
        const homePageShopCartProductUnitPriceCount = await homePageShopCartProductUnitPrices.count();
        for (let i = 0; i < homePageShopCartProductUnitPriceCount; i++) {
            await expect(homePageShopCartProductUnitPrices.nth(i)).toBeVisible();
        }
        //assert home page shopping cart section total price is displayed
        const homePageShopCartTotalPrice = await homePage.getHomePageShopCartTotalPrice();
        await expect(homePageShopCartTotalPrice).toBeVisible();
    }


}
export {HomePageWebElementAsserts};