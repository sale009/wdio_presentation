import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  
    get inputUsername () {
        return $('#user');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginBtn () {
        return $('input#login');
    }

    get cantLogin () {
        return $("//a[@href='Due date']");
    }

    get accValidationMsg () {
        return $("p.error-message");
    }

    get emptyFiledValMsg () {
        return $("//p[normalize-space()='Missing email']")
    }

    get checkingTrelloText () {
       return $('.sc-kGXeez')
    }

    get atlsLogin () {
        return $('#login-submit')
    }

    get atlsError () {
        return $("//span[contains(text(),'Incorrect email address and / or password. If you ')]")
    }

    
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
