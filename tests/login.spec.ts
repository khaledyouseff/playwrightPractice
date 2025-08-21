import { test } from '@playwright/test';
import { ScrollUtils } from '../utiles/scrollUtils.ts';
import { PoManager } from '../pages/poManager.ts';   


test.describe("Login test" , ()=> {
test("Successful login with valid credentials" , async ({page}) =>{

    const poManager = new PoManager(page);
    const loginPage = poManager.getLoginPage();
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