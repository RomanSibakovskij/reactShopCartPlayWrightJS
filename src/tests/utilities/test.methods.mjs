// @ts-check
"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {expect} from "@playwright/test";

import {HomePageWebElementAsserts} from "../web-element-asserts/home.page.web.element.asserts.mjs";

import {HomePageTextElementAsserts} from "../test-text-element-asserts/home.page.text.element.asserts.mjs";

import {HomePageDataLoggers} from "../data-loggers/home.page.data.loggers.mjs";

class TestMethods{

    //add single homepage product ("Sessel Sofie") to cart test method
    async addSingleHomePageProductToCartTest(page) {
        const homePage = new HomePage(page);
        const homePageWebElementAsserts = new HomePageWebElementAsserts();
        const homePageTextElementAsserts = new HomePageTextElementAsserts()
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageWebElementDisplayed(page);
        //home page empty shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageEmptyShoppingCartSectionWebElementDisplayed(page);
        //home page product table element assert
        await homePageWebElementAsserts.isHomePageProductTableWebElementDisplayed(page);
        //home page text element assert
        await homePageTextElementAsserts.isHomePageTextElementAsExpected(page);
        //home page empty shopping cart text element assert
        await homePageTextElementAsserts.isHomePageEmptyShopCartTextElementAsExpected(page);
        //log home page product table displayed data
        await homePageDataLoggers.logHomePageProductTableData(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click set product "Sessel Sofie" "Add to cart" button
        await homePage.clickSetProductAddToCartBtn(1);
        //log home page shopping cart section product data
        await homePageDataLoggers.logHomePageShopCartSectionData(page);
        //assert the accurate product has been added (for single item "[0]" is being used)
        const expectedSingleProductName = await homePage.getHomePageShopCartSectionProductNameText();
        await expect(expectedSingleProductName[0]).toBe("Sessel Sofie");
        const expectedSingleProductPrice = await homePage.getHomePageShopCartSectionProductUnitPriceText();
        await expect(expectedSingleProductPrice[0]).toBe("249.99 EUR");
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Single Home Page Product (Sessel Sofie) To Cart Test Result.png", fullPage: true });
    }

    //add multiple homepage products ("Sessel Little", "Schlafsessel Rovigo", "Sessel Anna", "Ohrensessel Josslyn") to cart test method
    async addMultipleHomePageProductsToCartTest(page) {
        const homePage = new HomePage(page);
        const homePageWebElementAsserts = new HomePageWebElementAsserts();
        const homePageTextElementAsserts = new HomePageTextElementAsserts();
        const homePageDataLoggers = new HomePageDataLoggers();
        //home page web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageWebElementDisplayed(page);
        //home page empty shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageEmptyShoppingCartSectionWebElementDisplayed(page);
        //home page product table element assert
        await homePageWebElementAsserts.isHomePageProductTableWebElementDisplayed(page);
        //home page text element assert
        await homePageTextElementAsserts.isHomePageTextElementAsExpected(page);
        //home page empty shopping cart text element assert
        await homePageTextElementAsserts.isHomePageEmptyShopCartTextElementAsExpected(page);
        //log home page product table displayed data
        await homePageDataLoggers.logHomePageProductTableData(page);
        //capture screenshot of the home page display
        await page.screenshot({ path: "src/tests/screenshots/Home Page Display.png", fullPage: true });
        //click set product "Sessel Little" "Add to cart" button
        await homePage.clickSetProductAddToCartBtn(3);
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //capture screenshot of the product addition to cart
        await page.screenshot({ path: "src/tests/screenshots/Single Home Page Product (Sessel Little) Addition To Cart.png", fullPage: true });
        //click set product "Schlafsessel Rovigo" "Add to cart" button
        await homePage.clickSetProductAddToCartBtn(2);
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //capture screenshot of the product addition to cart
        await page.screenshot({ path: "src/tests/screenshots/Single Home Page Product (Schlafsessel Rovigo) Addition To Cart.png", fullPage: true });
        //click set product "Sessel Anna" "Add to cart" button
        await homePage.clickSetProductAddToCartBtn(5);
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //capture screenshot of the product addition to cart
        await page.screenshot({ path: "src/tests/screenshots/Single Home Page Product (Sessel Anna) Addition To Cart.png", fullPage: true });
        //click set product "Ohrensessel Josslyn" "Add to cart" button
        await homePage.clickSetProductAddToCartBtn(0);
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //assert the expected list is displayed (both product names and prices -> their position as well)
        const expectedShopCartNameList = ["Sessel Little", "Schlafsessel Rovigo", "Sessel Anna", "Ohrensessel Josslyn"];
        const actualShopCartNameList = await homePage.getHomePageShopCartSectionProductNameText();
        await expect(actualShopCartNameList).toEqual(expectedShopCartNameList);

        const expectedShopCartPriceList = ["119.99 EUR", "239.99 EUR", "149.99 EUR", "499.99 EUR"];
        const actualShopCartPriceList = await homePage.getHomePageShopCartSectionProductUnitPriceText();
        await expect(actualShopCartPriceList).toEqual(expectedShopCartPriceList);

        const expectedShopCartTotalPrice = "Total: 1009.96 EUR";
        const actualShopCartTotalPrice = await homePage.getHomePageShopCartSectionTotalPriceText();
        await expect(actualShopCartTotalPrice).toEqual(expectedShopCartTotalPrice);

        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Add Multiple Home Page Products (Sessel Little, Schlafsessel Rovigo, Sessel Anna, Ohrensessel Josslyn) To Cart Test Result.png", fullPage: true });
    }

    //product removal tests

    //remove a single homepage product ("Sessel Sofie") to cart test method
    async removeSingleHomePageProductToCartTest(page) {
        const homePage = new HomePage(page);
        const homePageWebElementAsserts = new HomePageWebElementAsserts();
        const homePageTextElementAsserts = new HomePageTextElementAsserts();
        //home page web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageWebElementDisplayed(page);
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //home page product table element assert
        await homePageWebElementAsserts.isHomePageProductTableWebElementDisplayed(page);
        //home page text element assert
        await homePageTextElementAsserts.isHomePageTextElementAsExpected(page);
        //click set product remove button (in shopping cart section)
        await homePage.clickSetProductRemoveFromCartBtn(0);
        //home page empty shopping cart text element assert (to assert the product has been removed)
        await homePageTextElementAsserts.isHomePageEmptyShopCartTextElementAsExpected(page);
        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Remove Single Home Page Product (Sessel Sofie) From Cart Test Result.png", fullPage: true });
    }

    //remove multiple homepage products ("Sessel Little", "Schlafsessel Rovigo") from cart test method
    async removeMultipleHomePageProductsFromCartTest(page) {
        const homePage = new HomePage(page);
        const homePageWebElementAsserts = new HomePageWebElementAsserts();
        const homePageTextElementAsserts = new HomePageTextElementAsserts();
        //home page web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageWebElementDisplayed(page);
        //home page product table element assert
        await homePageWebElementAsserts.isHomePageProductTableWebElementDisplayed(page);
        //home page text element assert
        await homePageTextElementAsserts.isHomePageTextElementAsExpected(page);
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //click set product ("Sessel Little") remove button (in shopping cart section)
        await homePage.clickSetProductRemoveFromCartBtn(0);
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //capture screenshot of the product removal from cart
        await page.screenshot({ path: "src/tests/screenshots/Single Home Page Product (Sessel Little) Removal From Cart.png", fullPage: true });
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //assert the expected list is displayed (both product names and prices -> their position as well)
        const expectedShopCartNameList = ["Schlafsessel Rovigo", "Sessel Anna", "Ohrensessel Josslyn"];
        const actualShopCartNameList = await homePage.getHomePageShopCartSectionProductNameText();
        await expect(actualShopCartNameList).toEqual(expectedShopCartNameList);

        const expectedShopCartPriceList = ["239.99 EUR", "149.99 EUR", "499.99 EUR"];
        const actualShopCartPriceList = await homePage.getHomePageShopCartSectionProductUnitPriceText();
        await expect(actualShopCartPriceList).toEqual(expectedShopCartPriceList);

        const expectedShopCartTotalPrice = "Total: 889.97 EUR";
        const actualShopCartTotalPrice = await homePage.getHomePageShopCartSectionTotalPriceText();
        await expect(actualShopCartTotalPrice).toEqual(expectedShopCartTotalPrice);

        //click set product ("Schlafsessel Rovigo") remove button (in shopping cart section)
        await homePage.clickSetProductRemoveFromCartBtn(0);
        //home page shopping cart section web element assert (singular elements)
        await homePageWebElementAsserts.isHomePageShopCartWebElementDisplayed(page);
        //assert the expected list is displayed after second product removal (both product names and prices -> their position as well)
        const expectedShopCartSecondNameList = ["Sessel Anna", "Ohrensessel Josslyn"];
        const actualShopCartSecondNameList = await homePage.getHomePageShopCartSectionProductNameText();
        await expect(actualShopCartSecondNameList).toEqual(expectedShopCartSecondNameList);

        const expectedShopCartSecondPriceList = ["149.99 EUR", "499.99 EUR"];
        const actualShopCartSecondPriceList = await homePage.getHomePageShopCartSectionProductUnitPriceText();
        await expect(actualShopCartSecondPriceList).toEqual(expectedShopCartSecondPriceList);

        const expectedShopCartSecondTotalPrice = "Total: 649.98 EUR";
        const actualShopCartSecondTotalPrice = await homePage.getHomePageShopCartSectionTotalPriceText();
        await expect(actualShopCartSecondTotalPrice).toEqual(expectedShopCartSecondTotalPrice);

        //capture screenshot of the test result
        await page.screenshot({ path: "src/tests/screenshots/Remove Multiple Home Page Products (Sessel Little, Schlafsessel Rovigo) From Cart Test Result.png", fullPage: true });
    }

}
export {TestMethods};