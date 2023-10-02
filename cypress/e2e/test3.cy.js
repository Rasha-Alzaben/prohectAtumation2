///<reference types="cypress">
/*cy.on("uncaught:exception",(e)=>{
  return false;
});*/
describe('template spec', () => {
  it('passes', () => {
    let websites=["https://sa.almosafer.com/en","https://sa.almosafer.com/ar"]

    let RandomIndex=Math.floor(Math.random()*websites.length)
    cy.visit(websites[RandomIndex])
    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm').click()

    if(RandomIndex==0){
      cy.get('[data-testid="AutoCompleteInput"]').type("dubai")
    }
    else if(RandomIndex==1){
      cy.get('[data-testid="AutoCompleteInput"]').type('دبي')

    }

  });
});