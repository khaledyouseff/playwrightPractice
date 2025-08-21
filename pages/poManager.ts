import {type  Page} from "@playwright/test"
import { LoginPage } from "./loginPage"

export class PoManager{

    private readonly page: Page;
    private readonly loginPage: LoginPage; 


constructor(page : Page){

    this.page=  page;
    this.loginPage=new LoginPage(page);
}

getLoginPage(){
    return this.loginPage
}


}


