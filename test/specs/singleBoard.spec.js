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

    /*it('Add new Lists', async () => {
        
        await (await BoardPage.addListBtn).click()
        await (await BoardPage.inputListName).setValue("New Kroon List")
        await (await BoardPage.addListCreateBtn).click()
        await browser.pause(2000)
        await (await BoardPage.inputListName).setValue("New Kroon List 1")
        await (await BoardPage.addListCreateBtn).click()
        await browser.pause(2000)
        await (await BoardPage.inputListName).setValue("New Kroon List 2")
        await (await BoardPage.addListCreateBtn).click()
        await browser.pause(2000)
    })*/

   /* it('Create New Cards', async () => {
        
        await (await BoardPage.createCard).click()
        await (await BoardPage.textAreaForNewCard).setValue("New Kroon Card")
        await (await BoardPage.addCardBtn).click()
        await browser.pause(2000)
        await (await BoardPage.textAreaForNewCard).setValue("New Kroon Card 1")
        await (await BoardPage.addCardBtn).click()
        await browser.pause(2000)
        await (await BoardPage.textAreaForNewCard).setValue("New Kroon Card 2")
        await (await BoardPage.addCardBtn).click()
        await browser.pause(2000)
    })*/

   it("It should open single Card page", async () => {

    await (await BoardPage.cardOne).click()
    await browser.pause(2000)
    await (await BoardPage.descriptionTextArea).click()
    await (await BoardPage.textAreaDesc).setValue("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using END Christosaaaaaa")
    await (await BoardPage.saveDescBtn).click()
    await browser.pause(2000)
    await (await BoardPage.textAreaPlaceholder).click()
    await (await BoardPage.textAreaPlaceholder).setValue("Sasa It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.")
    await (await BoardPage.saveCommentBtn).click()
    await browser.pause(2000)
    
})

it("Add Cover and close the task panel", async () => {
    await (await BoardPage.clickOnCover).click()
    await browser.pause(2000)
    await (await BoardPage.tirkizeColor).click()
    await browser.pause(1000)
    await (await BoardPage.closeCover).click()
    await browser.pause(1000)
    
})

it("Edit and add new predefined Labels", async () => {

    await (await BoardPage.clickOnLabel).click()
    await browser.pause(2000)
    await (await BoardPage.editOneLabel).click()
    await browser.pause(2000)
    await (await BoardPage.addLabelName).setValue("Ana Kaloperovic the Queen")
    await browser.pause(2000)
    await (await BoardPage.saveLabel).click()
    await browser.pause(2000)
    await (await BoardPage.cardPurpleLabel).click()
    await browser.pause(1000)
    await (await BoardPage.closeLabel).click()
})

 /*it("Should dragAnddrop cards", async () => {

        await (await BoardPage.firstCard).dragAndDrop({ x: 530, y: 230 })
        await browser.pause(2000)
    
   })*/
})

