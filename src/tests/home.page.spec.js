import { test } from '@playwright/test';
import {TestMethods} from "./utilities/test.methods.mjs";

const testMethods = new TestMethods();

test.setTimeout(25000);

test.describe('Single Product Addition To Shopping Cart Test', () => {

        // Test 001 -> add single homepage product ("Sessel Sofie") to shopping cart test
        test('Home Page Single Product ("Sessel Sofie") Addition To Shopping Cart Test', async ({page}) => {
            //launch the page
            await page.goto('https://krzysu.github.io/reactjs-shopping-cart/'); //  '/' doesn't seem to work
            //add single homepage product ("Sessel Sofie") to cart test
            await testMethods.addSingleHomePageProductToCartTest(page);
        });

});

test.describe('Multiple Products Addition To Shopping Cart Test', () => {

        // Test 001a -> add multiple homepage products ("Sessel Little", "Schlafsessel Rovigo", "Sessel Anna", "Ohrensessel Josslyn") to shopping cart test
        test('Home Page Multiple Products ("Sessel Little", "Schlafsessel Rovigo", "Sessel Anna", "Ohrensessel Josslyn") Addition To Shopping Cart Test', async ({page}) => {
            //launch the page
            await page.goto('https://krzysu.github.io/reactjs-shopping-cart/'); //  '/' doesn't seem to work
            //add multiple homepage products ("Sessel Little", "Schlafsessel Rovigo", "Sessel Anna", "Ohrensessel Josslyn") to cart test
            await testMethods.addMultipleHomePageProductsToCartTest(page);
        });

});

test.describe('Product(s) Removal From Shopping Cart Tests', () => {

        // Test 001b -> remove single homepage product ("Sessel Sofie") from shopping cart test
        test('Home Page Single Product ("Sessel Sofie") Removal From Shopping Cart Test', async ({page}) => {
            //launch the page
            await page.goto('https://krzysu.github.io/reactjs-shopping-cart/'); //  '/' doesn't seem to work
            //add single homepage product ("Sessel Sofie") to cart test
            await testMethods.addSingleHomePageProductToCartTest(page);
            //remove single homepage product ("Sessel Sofie") from shopping cart test
            await testMethods.removeSingleHomePageProductToCartTest(page);
        });

        // Test 001c -> remove multiple homepage products ("Sessel Little", "Schlafsessel Rovigo") from shopping cart test
        test('Home Page Multiple Products ("Sessel Little", "Schlafsessel Rovigo") Removal From Shopping Cart Test', async ({page}) => {
            //launch the page
            await page.goto('https://krzysu.github.io/reactjs-shopping-cart/'); //  '/' doesn't seem to work
            //add multiple homepage products ("Sessel Little", "Schlafsessel Rovigo", "Sessel Anna", "Ohrensessel Josslyn") to cart test
            await testMethods.addMultipleHomePageProductsToCartTest(page);
            //remove multiple homepage products ("Sessel Little", "Schlafsessel Rovigo") from shopping cart test
            await testMethods.removeMultipleHomePageProductsFromCartTest(page);
        });

});