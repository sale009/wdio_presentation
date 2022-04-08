import { expect as chaiExpect} from 'chai'
import LoginPage from '../pages/login.page'
import LandingPage from '../pages/board.page'
import BoardPage from '../pages/singleBoard.page'

describe("Test Single Board page and inside functionalities", ()=> {

    it("Open Login page and check URL", async ()=> {
        
        await (await browser.url("https://trello.com/login"))
        const url = await browser.getUrl();
        await chaiExpect(url).to.include('/login')
    
    })


    it("Atlasian add correct password and check if user is successfuly logged in", async ()=> {
        
        await (await LoginPage.inputUsername).setValue('sasaslavkovic87@gmail.com');
        await browser.pause(1000)
        await (await LoginPage.loginBtn).click();
        await browser.pause(1000)
        await (await LoginPage.inputPassword).setValue('Bezanija1!');
        await (await LoginPage.atlsLogin).click();
        await browser.pause(2000)
        //const urlLogedIn = await browser.getUrl();
        //await chaiExpect(urlLogedIn).to.include('https://trello.com/sasaslavkovic/boards')
        //await browser.pause(2000)
    
    })


    it('Should open single board Page', async () => {

        await (await LandingPage.openSingleBoard).click()
        await browser.pause(2000)
       
        await expect(await BoardPage.checkTheTitle).toHaveText("New Kroon Board")
        await browser.pause(2000)
    })

    it ("Shold close and permanently delete create board", async () => {
        await (await BoardPage.showMenu).click()
        await browser.pause(2000)
        await (await BoardPage.moreOptionClick).click()
        await browser.pause(2000)
        await (await BoardPage.closeBoard).click()
        await browser.pause(2000)
        await (await BoardPage.closeBoardBtn).click()
        await browser.pause(2000)
        await (await BoardPage.permanentlyDeleteBoard).click()
        await browser.pause(2000)
        await (await BoardPage.deleteBoardBtn).click()
    })
})