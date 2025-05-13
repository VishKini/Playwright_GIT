class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Enter your username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Enter your password' });
        this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember Me' });
        this.signInButton = page.getByRole('link', { name: 'Sign in' });        
    }

    async logintoApp(username, password){
        await this.usernameInput.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.rememberMeCheckbox.check();
        await this.signInButton.click();
    }
}

module.exports = { LoginPage };
// Compare this snippet from tests/appliToolsBank.spec.js: