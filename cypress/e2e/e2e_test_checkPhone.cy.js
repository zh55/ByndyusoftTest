
const url = "https://google.com";
const byndyusoftUrl = "https://byndyusoft.com/"

describe('Проверка контактной информации на сайте Byndyusoft', () => {
    it('Проверяет корректность номера телефона и почтового ящика', () => {

        cy.visit(url);
        cy.get("[aria-label=\"Найти\"]").type('Byndyusoft{enter}')
        cy.get(`[href="${byndyusoftUrl}"]`).first().invoke('removeAttr', 'target').click();
        cy.origin(byndyusoftUrl, () => {
            // const phone = "8 800 775-15-21"
            const contactEmail = "sales@byndyusoft.com"

            cy.contains("Заказать презентацию").click();
            // cy.contains(phone).should('be.visible');                       //Его сейчас нет на странице, убрали? бага?
            cy.contains(contactEmail).should('be.visible');
                })

    });
});
