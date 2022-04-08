import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BoardPage extends Page {

    get checkTheTitle () {
        return $(".js-board-editing-target")
    }

    get addListBtn () {
        return $(".open-add-list .placeholder")
    }

    get inputListName () {
        return $(".list-name-input")
    }

    get addListCreateBtn () { 
        return $(".nch-button")
     }

     get createCard () {
         return $(".js-add-a-card")
     }

     get textAreaForNewCard () {
         return $('.list-card-composer-textarea')
     }

     get addCardBtn () {
         return $(".js-add-card")
     }

     get firstColumn () {
        return $("//body/div/div/div/div/main/div/div/div/div/div/div/div[@dragscrollenabled='true']/div[1]")
    }

    get secondColumn () {
        return $("//body/div/div/div/div/main/div/div/div/div/div/div/div[@dragscrollenabled='true']/div[2]")
    }

    get firstCard () {
        return $(".list-card-details")
    }

    get cardOne () {
        return $(".list-card-details")
    }

    get descriptionTextArea () {
        return $(".description-fake-text-area")
    }

    get textAreaDesc () {
        return $(".card-description")
    }

    get textAreaPlaceholder () {
        return $("//textarea[@placeholder='Write a comment…']")
    }

    get commentBoxInput () {
        return $(".comment-box-input")
    }

    get saveCommentBtn () {
        return $("//input[@class='nch-button nch-button--primary confirm mod-no-top-bottom-margin js-add-comment']")
    }
    get saveDescBtn () {
        return $("//input[@class='nch-button nch-button--primary confirm mod-submit-edit js-save-edit']")
    }

    get closeTaskBtn () {
        return $("//a[@class='icon-md icon-close dialog-close-button js-close-window']")
    }

    get clickOnCover () {
        return $("//span[normalize-space()='Cover']")
    }

    get tirkizeColor () {
        return $("._3WED4RNr6dLCTr")
    }

    get closeCover () {
        return $("//a[@class='pop-over-header-close-btn icon-sm icon-close']")
    }

    get clickOnLabel () {
        return $("//span[normalize-space()='Labels']")
    }

    get editOneLabel () {
        return $("//div[@class='pop-over is-shown']//li[5]//a[1]")
    }

    get cardPurpleLabel () {
        return $(".card-label-purple")
    }

    get addLabelName () {
        return $("//input[@id='labelName']")
    }

    get saveLabel () {
        return $("//input[@class='nch-button nch-button--primary wide js-submit']")
    }
    get closeLabel () {
        return $("//a[@class='pop-over-header-close-btn icon-sm icon-close']")
    }

    get showMenu () {
        return $("//span[normalize-space()='Show menu']")
    }

    get moreOptionClick () {
        return $(".js-open-more")
    }

    get closeBoard () {
        return $(".js-close-board")
    }

    get closeBoardBtn () {
        return $("//input[@value='Close']")
    }

    get permanentlyDeleteBoard () {
        return $("//button[normalize-space()='Permanently delete board']")
    }

    get deleteBoardBtn () {
        return $("//button[normalize-space()='Delete']")
    }

    open () {
        return super.open('login');
    }

}

export default new BoardPage();