describe('intro finance',() => {
    // проверка: переход на страницу юридические лица 
    it ('login', () => {
      cy.viewport(1920, 1080)
       cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/');
       cy.get("input[type='email']").type('admin@admin.ad')
       cy.get("input[type='password']").type('admin')
       cy.contains("Далее").click()
    });
    it ('menu', () => {
       cy.get("button[class='button button--size-sm button--is-square button--is-rounded button--is-centered button--state-secondary']").click()
       cy.contains("Юр. лица").click()
       cy.contains("Юридические лица")
     });
});