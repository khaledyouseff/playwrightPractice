import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage{
    //locators:
    readonly page: Page; // Create a variable for the page
    readonly username_tb: Locator; // Create a variable for the username textbox
    readonly password_tb: Locator; // Create a variable for the password textbox
    readonly login_btn: Locator; // Create a variable for the login button
    readonly invalidLoginMessage: Locator;
    readonly validLoginMessage : Locator; // Create a variable for the valid login message
    // variables:
  
   
    
    //constructor:
    constructor(page:Page){
        this.page = page; // Assign the page to the class variable
        this.username_tb = page.locator("#username");
        this.password_tb = page.locator("#password");
        this.login_btn = this.page.getByRole('button', { name: 'Login' });; // Assign the login button locator
        this.validLoginMessage = this.page.getByText("You logged into a secure area!");
       }
       //methods
       async goToURL(url: string) {
        await this.page.goto(url);
    }

        async login(username :string  , password : string){
        await this.username_tb.fill(username); // Fill the username textbox
        await this.password_tb.fill(password); // Fill the password textbox
        await this.login_btn.click(); // Click the login button
     
    }

    //assertions
async assertSuccessfullLogin(successfulMessage :string){
    await expect(this.validLoginMessage).toHaveText(successfulMessage);
}


}
.
