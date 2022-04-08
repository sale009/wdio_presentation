import { expect as chaiExpect} from 'chai'
import LoginPage from '../pages/login.page'
import LandingPage from '../pages/board.page'



describe("Test landing page and inside functionalities", ()=> {

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
        const urlLogedIn = await browser.getUrl();
        await chaiExpect(urlLogedIn).to.include('https://trello.com/sasaslavkovic/boards')
        await browser.pause(2000)
    
    })


    it('should detect if an element is clickable', async () => {
        
        await (await LandingPage.createNewBoard).click()
        await (await LandingPage.addBoardTitle).setValue("New Kroon Board");
        await (await LandingPage.backgroundPicker[2]).click()
        await browser.pause(3000)
        
    })

    it("Should add page title and click on Create buttn", async ()=> {
        await (await LandingPage.createBoardBtn).click()
        await browser.pause(3000)

    })

    it("Should check is new created Kroon Board placed in the list", async ()=> {
        await LandingPage.getBoardList()
    })
})