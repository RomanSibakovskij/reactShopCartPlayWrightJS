"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class HomePage extends BasePage{

    constructor(page) {
        super(page);

        //home page web elements
        this._homePageTitle = page.locator("//h1");
        //products table (grid)
        this._homePageProductTableTitle = page.locator("//div[@class='col-md-8']/div/h3");
        //list elements
        this._homePageProductImgElements = page.locator("//ul[@class='product-list']/li//img");
        this._homePageProductNameElements = page.locator("//ul[@class='product-list']/li//h3");
        this._homePageProductUnitPriceElements = page.locator("//ul[@class='product-list']/li//div[@class='product__price']");
        this._homePageProductAddToCartBtnElements = page.locator("//ul[@class='product-list']/li//button");
        //shopping cart section
        this._homePageShopCartSectionTitle = page.locator("//div[@class='col-md-4']//h3");
        this._homePageShopCartEmptyWarning = page.locator("//div[@class='alert alert-info']");
        //list elements
        this._homePageShopCartProductRemoveBtnElements = page.locator("//div[@class='cart__body']//button");
        this._homePageShopCartProductNameElements = page.locator("//div[@class='cart__body']//span");
        this._homePageShopCartProductUnitPriceElements = page.locator("//div[@class='cart__body']//div[@class='cart-item__price']");
        //total
        this._homePageShopCartTotalPrice = page.locator("//div[@class='cart__total']");

    }

    //click set product "Add to cart" button method
    async clickSetProductAddToCartBtn(index){await this._homePageProductAddToCartBtnElements.nth(index).click();}

    //click set product remove button method (shopping cart section)
    async clickSetProductRemoveFromCartBtn(index){await this._homePageShopCartProductRemoveBtnElements.nth(index).click();}

    //home page product table data getters
    async getHomePageProductNameText(){
        const homePageProductNameCount = await this._homePageProductNameElements.count();
        const homePageProductNames = [];
        for (let i = 0; i < homePageProductNameCount; i++) {
            const text = await this._homePageProductNameElements.nth(i).innerText();
            homePageProductNames.push(text.trim());
        }
        return homePageProductNames;
    }
    async getHomePageProductUnitPriceText(){
        const homePageProductUnitPriceCount = await this._homePageProductUnitPriceElements.count();
        const homePageProductUnitPrices = [];
        for (let i = 0; i < homePageProductUnitPriceCount; i++) {
            const text = await this._homePageProductUnitPriceElements.nth(i).innerText();
            homePageProductUnitPrices.push(text.trim());
        }
        return homePageProductUnitPrices;
    }

    //home page shopping cart section data getters
    async getHomePageShopCartSectionProductNameText(){
        const homePageShopCartProductNameCount = await this._homePageShopCartProductNameElements.count();
        const homePageShopCartProductNames = [];
        for (let i = 0; i < homePageShopCartProductNameCount; i++) {
            const text = await this._homePageShopCartProductNameElements.nth(i).innerText();
            homePageShopCartProductNames.push(text.trim());
        }
        return homePageShopCartProductNames;
    }
    async getHomePageShopCartSectionProductUnitPriceText(){
        const homePageShopCartUnitPriceCount = await this._homePageShopCartProductUnitPriceElements.count();
        const homePageShopCartProductUnitPrices = [];
        for (let i = 0; i < homePageShopCartUnitPriceCount; i++) {
            const text = await this._homePageShopCartProductUnitPriceElements.nth(i).innerText();
            homePageShopCartProductUnitPrices.push(text.trim());
        }
        return homePageShopCartProductUnitPrices;
    }

    async getHomePageShopCartSectionTotalPriceText(){return await this._homePageShopCartTotalPrice.innerText();}

    //home page text element getters
    async getHomePageTitleText(){return await this._homePageTitle.innerText();}
    //product table
    async getHomePageProductTableTitleText(){return await this._homePageProductTableTitle.innerText();}
    //shopping cart section
    async getHomePageShopCartSectionTitleText(){return await this._homePageShopCartSectionTitle.innerText();}
    //empty shopping cart warning message getter
    async getHomePageEmptyShopCartWarningText(){return await this._homePageShopCartEmptyWarning.innerText();}

    //home page web element getters
    async getHomePageTitle(){return this._homePageTitle;}
    async getHomePageProductTableTitle(){return this._homePageProductTableTitle;}
    //product table
    async getHomePageShopCartSectionTitle(){return this._homePageShopCartSectionTitle;}
    async getHomePageEmptyShopCartWarning(){return this._homePageShopCartEmptyWarning;}

    //list elements
    //home page product table
    async getHomePageProductImage(){return await this._homePageProductImgElements;}
    async getHomePageProductName(){return await this._homePageProductNameElements;}
    async getHomePageProductUnitPrice(){return await this._homePageProductUnitPriceElements;}
    async getHomePageProductAddToCartBtn(){return await this._homePageProductAddToCartBtnElements;}
    //home page shopping cart section
    async getHomePageShopCartProductRemoveButton(){return this._homePageShopCartProductRemoveBtnElements;}
    async getHomePageShopCartProductName(){return this._homePageShopCartProductNameElements;}
    async getHomePageShopCartProductUnitPrice(){return this._homePageShopCartProductUnitPriceElements;}
    async getHomePageShopCartTotalPrice(){return this._homePageShopCartTotalPrice;}

}
export {HomePage};