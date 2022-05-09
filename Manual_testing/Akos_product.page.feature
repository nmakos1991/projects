
Feature: #1 Product color
#browser used: Safari
  Scenario: Product's color changing
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
    And   the product's color is grey
     When the user change the product's color to metallic
     Then the product's color has changed metallic




Feature: #2 Product pictures
  Scenario: Product pictures sliding
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the product's picture
     And  the user scroll to right the picture
     Then the product's picture scroll to the next picture




Feature: #3 Product pictures
  Scenario: Product pictures gallery view
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the product's picture
     And  the user click on the 'Összes' button
     Then the pictures view changed to galley view




Feature: #4 Product save
  Scenario: Product save to the wishlist
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the 'Elmentem' button
     Then a pop-up page appear with login and registration possibilities




Feature: #5 Product's opinion
  Scenario: 'értékelés' button work
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the 'értékelés' button
     Then the page goes down to the 'Vélemények' section




Feature: #6 Product specification section
  Scenario: Show all product's specification
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the 'Teljes specifikáció' button on the 'Specifikáció' section
     Then the 'Specifikáció' section show all product specification




Feature: #7 Product specification section
  Scenario: Close product's all specification
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the 'Teljes specifikáció' button on the 'Specifikáció' section
     And  the 'Specifikáció' section show all product specification
     And  the user click on the 'Mutass kevesebbet' button
     Then the 'Specifikáció' section to close back the normal size




Feature: #8 Product informations
  Scenario: 'Részletes leírás' section
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the 'tovább' button on the information section
     Then the page goes down to the 'Részletes leírás' section




Feature: #9 iVIP
  Scenario: Join to iVIP members
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the '1 525 Ft kedvezmény iVIP tagoknak, csatlakozz most!' button
     Then a pop-up page appear with iVIP informations, registration and payment methods




Feature: #10 iPon guarantee
  Scenario: Add +1 year guarantee
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user select '+1 év garancia' radio button on the 'iPon kiterjesztett garancia' section
     Then the +1 year guarantee added to the product




Feature: #11 iPon guarantee
  Scenario: Delete the +1 year guarantee
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user select '+1 év garancia' on the 'iPon kiterjesztett garancia' section
     And  the +1 year guarantee added to the product
     But  the user delete the +1 year guarantee to clicked on the 'X' button
     Then the +1 year guarantee was deleted




Feature: #12 Piece of product
  Scenario: Increase the piece of product 1 to 2 piece
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user change the piece of the product 1 to 2 in the 'darab' input field
     Then the 'darab' input field changed to 2




Feature: #13 Basket
  Scenario: Add product to the basket
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the basket button
     And  the 'iPon kiterjesztett garancia' pop-up appear
     And  the user click on to 'Tovább' button
     Then the basket page appear
     But  the basket also empty

# after +10 test and some refresh the product has added the basket




Feature: #14 Basket
  Scenario: Remove product from the basket
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user add product to the basket
     And  the user remove the product from basket with the 'X' button
     Then the basket is empty




Feature: #15 Specification section
  Scenario: Specification hyperlink work
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user scroll down to the 'Specifikáció' section
     And  the user click on the 'MTK Helio P22T 2.30GHz Octa Core' hyperlink
     Then the website goes to the 'MTK Helio P22T 2.30GHz Octa Core' filter page




Feature: #16 Specification information
  Scenario: Specification section's information tooltip
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user scroll down to the 'Specifikáció' section
     And  the user move the cursor on the 'Operációs rendszer' info icon 
     Then the info icon's tooltip show the text messege 'Az eszközhöz adott vagy telepített operációs rendszer'




Feature: #17 'Gyártó termékoldala'
  Scenario: 'Gyártó termékoldala' hyperlink work
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user click on the 'Gyártó termékoldala' hyperlink
     Then the Samsung home page open on a new page




Feature: #18 'Kérdések, válaszok' section
  Scenario: Add a post to the 'Kérdések, válaszok' section
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user scroll down to the 'Kérdések, válaszok' section
     And  the user click on the 'Kérdezek' button
     Then a pop-up page appear with login and registration possibilities




Feature: #19 'Vissza az oldal tetejére'
  Scenario: 'Vissza az oldal tetejére' button work
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user scroll down to the bottom of the page
     And  the user click on the 'Vissza az oldal tetejére' button
     Then the page goes to the top of the page




Feature: #20 'Neked ajánljuk'
  Scenario: 'Neked ajánljuk' section work
    Given the user is on the SAMSUNG T220 Galaxy Tab A7 Lite 8.7 32GB WiFi product's page
     When the user scroll down on the 'Neked ajánljuk' section
     And  the user click on the slider's right arrow
     Then the slider goes to the right




 

























