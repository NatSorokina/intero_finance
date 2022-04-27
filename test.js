describe('intro finance',() => {
    // проверка: ввод данных в строку поиска 
    it ('login', () => {
      cy.viewport(1920, 1080)
       cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/');
       cy.get("input[type='email']").type('admin@admin.ad')
       cy.get("input[type='password']").type('admin')
       cy.contains("Далее").click()
    });
    it ('search', () => {
       cy.get("input[placeholder='Поиск']").type('иванов').type('{enter}')
       cy.contains('иванов')
    });
});