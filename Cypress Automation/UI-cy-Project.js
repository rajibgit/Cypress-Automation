describe('UI Element', function()
{
    it('flight expert', function()
    {
        cy.visit("https://www.flightexpert.com/") //visit flight expert site
        
         //logindetails

        cy.get('#login > a').click()
        cy.get('#logInClick > .ui-button-text').click()
        cy.get('input[id="logInEmail"]').type("email")
        cy.get('input[id="logInPassword"]').type("13142103134")
        cy.get('#logInClick > .ui-button-text').click()

                          //logout
        // cy.get('#logout > a').click()

        //Navigationmenus     
        cy.get('#HotelTab').click()
                  
     

                             //searchforbestflights
        cy.get('[id="oneWay"]').click()
        cy.get('#roundTrip')
        cy.get('#multistop')
        
                           //choosecategory&date
        cy.get('#source').type("Dhaka") //choose from
        cy.get('#dest').type("Singapore")   //choose destination
                           //startdeparitng date
        
                           //adultcount
        cy.get('#adultCount').click()                   
                           //childrencount
        cy.get('#childCount').click()
                           //infantcount
        cy.get('#infantCount').click()
                           //classchoose
        cy.get('#pills-home-tab').click()                   
                           //flightssearch
        cy.get('#FlightSearch')
                          
    }
    )
})
