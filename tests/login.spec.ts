import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ScrollUtils } from '../utiles/scrollUtils.ts';


test.describe("Login test" , ()=> {
test("Successful login with valid credentials" , async ({page}) =>{

    const  loginPage = new LoginPage(page);
    const ScrollUtil = new ScrollUtils(page);
  let  url="https://practice.expandtesting.com/login";

    let username = "practice";
    let password = "SuperSecretPassword!";
    let  assertSuccessfullLoginMessage  = "You logged into a secure area!";
    await loginPage.goToURL(url);
    await ScrollUtil.scrollToElement(loginPage.login_btn);

    await loginPage.login(username , password);

    await loginPage.assertSuccessfullLogin(assertSuccessfullLoginMessage);
})


})