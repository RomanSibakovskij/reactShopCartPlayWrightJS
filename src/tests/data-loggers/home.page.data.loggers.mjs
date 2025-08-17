"use strict"

import {HomePage} from "../../pages/home.page.mjs";
import {Logger} from "../../pages/utilities/logger.mjs";

class HomePageDataLoggers{

    //home page product table data logger test method
    async logHomePageProductTableData(page){
        const homePage = new HomePage(page);
        console.log("Home page product table displayed product data: " + "\n");
        //log home page product table product name(s)
        const homePageProductTableName = await homePage.getHomePageProductNameText();
        Logger.info("Home page displayed product names: " + homePageProductTableName.join("\n"));
        //log home page product table product unit price(s)
        const homePageProductTableUnitPrice = await homePage.getHomePageProductUnitPriceText();
        Logger.info("Home page displayed product unit prices: " + homePageProductTableUnitPrice.join("\n"));
    }

    //home page shopping cart section data logger test method
    async logHomePageShopCartSectionData(page){
        const homePage = new HomePage(page);
        console.log("Home page shopping cart section displayed product data: " + "\n");
        //log home page shopping cart section product name(s)
        const homePageShopCartSectionProductName = await homePage.getHomePageShopCartSectionProductNameText();
        Logger.info("Home page shopping cart section displayed product names: " + homePageShopCartSectionProductName.join("\n"));
        //log home page shopping cart section product unit price(s)
        const homePageShopCartSectionProductPrice = await homePage.getHomePageShopCartSectionProductUnitPriceText();
        Logger.info("Home page shopping cart section displayed product unit prices: " + homePageShopCartSectionProductPrice.join("\n"));
        //log home page shopping cart section total order price
        const homePageShopCartSectionTotalPrice = await homePage.getHomePageShopCartSectionTotalPriceText();
        Logger.info("Home page shopping cart section displayed total order price: " + homePageShopCartSectionTotalPrice);
    }

}
export {HomePageDataLoggers};