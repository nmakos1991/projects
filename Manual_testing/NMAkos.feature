//NAGY MÉLYKÚTI ÁKOS
//browser used: Safari

Feature: #1 Basket button works
  Scenario: Product's basket button works on the home page
    Given the user is on the szukits.hu home page
     When the user clicks on the <product> product's basket button  
     Then the <product> product goes to the basket


Feature: #2 Remove product from the basket
  Scenario: Basket remove button work
    Given the user is on the basket's page
    And   the basket have one <product>
     When the user clicks on the X (removing from basket) button
     Then the <product> product removed from the basket

Scenario Outline:

    <product>
|Star Wars: A királynő reménysége                   |
|Star Wars: Járulékos veszteség + Csillaghullás     |
|World of Warcraft: Meghasadt föld (keménytáblás)   |
|Warcraft: Legendák Harmadik kötet (képregény)      |



Feature: #3 Product categories
  Scenario: Product categories buttons work
    Given the user is on the szukits.hu home page
     When the user click on the <category> button
     Then the user goes to the <category> subpage

Scenario Outline:

    <category>
|Fantasy            |
|Ifjúsági irodalom  |
|Gasztronómia       |
|Mese               |



Feature: #4 Pagination works
  Scenario: Home page pagination works
    Given the user is on the szukits.hu home page
     When the user clicks the second page button in the pagination
     Then the first page goes to the second page
 
Feature: #5 "Tétel/oldal" slide bar works
  Scenario: "Tétel/oldal" slide bar works on the home page
    Given the user is on the szukits.hu home page
    And   the pagination's slide bar is 20
     When the user changed to 10 the pagination's slide bar 
     Then the page showed 10 product

Feature: #6 "ANTIKVÁR -60%" subpage
  Scenario: "ANTIKVÁR -60%" subpage products dicounts
    Given the user is on the szukits.hu home page
     When the user clicks on the "ANTIKVÁR -60%" category page
     Then the page goes to the "ANTIKVÁR -60%" subpage
     But  in the "ANTIKVÁR -60%"subpage has products with more dicounts than 60%

Feature: #7 Login button
  Scenario: szukits.hu login button works
    Given the user is on the szukits.hu home page
    And   the user doesn't have account
     When the user write his e-mail address in the 'E-mail cím' input field (nmakos1991@gmail.hu)
     And  the user write his password in the 'Jelszó' input field (nmakos1991)
     Then the page showed a message "Hiba! hitelesítés hibás"

Feature: #8 'Előrendelhető' subpage
  Scenario: content of 'Előrendelhető' subpage 
    Given the user is on the szukits.hu home page
     When the user clicks on the 'Előrendelhető' menu button
     Then the page goes to the 'Előrendelhető' subpage
     And  the products have one of these icons: "Előrendelhető", "Előjegyezhető"

Feature: #9 'Prémium garancia' advertising
  Scenario: 'Prémium garancia' advertising works
    Given the user is on the szukits.hu home page
     When the user clicks on the 'Prémium garancia' advertising
     Then the page goes to the 'Prémium garancia' subpage and showed the details

Feature: #10 Searching field
  Scenario: Searching field works
    Given the user is on the szukits.hu home page
     When the user write "ready player" to the searching field
     And  the searching field showed one product's name "#T Ready Player Two"
     And  the user clicks on it
     Then the page goes to the "#T Ready Player Two" product's page