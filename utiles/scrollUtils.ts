
import { Page , Locator } from "@playwright/test";
export class ScrollUtils {
    readonly page: Page; // Create a variable for the page

constructor( page: Page) {
    this.page = page;
  }
    async scrollToElement(element: Locator){
         
         await element.scrollIntoViewIfNeeded();
    }
}







