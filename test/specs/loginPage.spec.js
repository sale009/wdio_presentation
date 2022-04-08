import { expect as chaiExpect} from 'chai'
import LoginPage from '../pages/login.page'


describe("Test login page and checking inner elements and different behavior", ()=> {

    it("Open Login page and check URL", async ()=> {
        
        await (await browser.url("https://trello.com/login"))
        const url = await browser.getUrl();
        await chaiExpect(url).to.include('/login')
    
    })

    it("Login - attempt with submitting empty fields", async ()=> {
        
        await (await LoginPage.loginBtn).click();
        await browser.pause(1000)
        await expect(await LoginPage.emptyFiledValMsg).toBeDisplayed()
        await browser.pause(1000)
    
    })

    it("Login - attempt with email address which doesn't exist", async ()=> {
        await (await LoginPage.inputUsername).setValue('xxxyyyy@jjjjj.com');
        await (await LoginPage.inputPassword).setValue('Bezanija1!');
        await (await LoginPage.loginBtn).click();

        await expect(await LoginPage.accValidationMsg).toBeDisplayed()
        await browser.pause(2000)
    })

    it("Check if you are redirectd properly on atlassian page", async ()=> {
        await (await LoginPage.inputUsername).setValue('sasaslavkovic87@gmail.com');
        await browser.pause(1000)
        await (await LoginPage.loginBtn).click();
        await browser.pause(1000)
        const urlAtlasian = await browser.getUrl();
        await chaiExpect(urlAtlasian).to.include('https://id.atlassian.com/login?application=trello')
        await expect(await LoginPage.checkingTrelloText).toHaveText('Trello')
        await (await LoginPage.inputPassword).setValue('Christosaaa!!!');
        await (await LoginPage.atlsLogin).click();
        await browser.pause(2000)
    
    })

    it("Atlasian Incorect password checking behavior", async ()=> {

        await browser.pause(1000)

        await expect(await LoginPage.atlsError).toHaveText('Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.')
        await browser.pause(2000)
    
    })

    it("Atlasian add correct password and check if user is successfuly logged in", async ()=> {
        await browser.pause(1000)
        await (await LoginPage.inputPassword).setValue('Bezanija1!');
        await (await LoginPage.atlsLogin).click();
        await browser.pause(2000)
        const urlLogedIn = await browser.getUrl();
        await browser.pause(2000)
        await chaiExpect(urlLogedIn).to.include('https://trello.com/sasaslavkovic/boards')
        await browser.pause(2000)
    
    })
})