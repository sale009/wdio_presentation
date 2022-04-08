import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {

    get addNewWorkspace () {
        return $(".icon-add")
    }

    get createNewBoard () {
        return $("//li[@data-test-id='create-board-tile']")
    }

    get addBoardTitle () {
        return $("//input[@data-test-id='create-board-title-input']")
    }

    get createBoardBtn () {
        return $("//button[@data-test-id='create-board-submit-button']")
    }
    get backgroundPicker () {
        return $$("#background-picker ul li")
    }

    get colorPicker () {
        return $$("#background-picker ul li")
    }

    get boardList () {
        return $$(".board-tile-details-name div")
    }

    get openSingleBoard () {
        return $(".boards-page-board-section-list-item")
    }
    

    open () {
        return super.open('login');
    }


getBoardList() {
    return this.boardList.map((element) => 
    console.log(element.getText())
    );
};
}

export default new LandingPage();