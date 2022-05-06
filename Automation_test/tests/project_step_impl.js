// NAGY MÉLYKÚTI ÁKOS
// BROWSER: Chromium 88.0.4314.0

const path = require('path');
const {
    $,
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    hover,
    resizeWindow,
    currentURL,
    scrollDown,
    waitFor,
    clear,
    highlight,
    scrollTo,
} = require('taiko');
const assert = require("assert");
const { Console } = require('console');
const expect = require("chai").expect;
const { AsyncLocalStorage } = require('async_hooks');
const exp = require('constants');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({headless: headless});
    await resizeWindow({width: 1440, height: 900});
    page = "ipon.hu/shop/termek/samsung-t220-galaxy-tab-a7-lite-87-32gb-wifi-szurke/1925626";
    await goto(page);
 }); 
 

 afterSuite(async () => {
     await closeBrowser();
 });

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Change product's color", async function() {
    await click($(`a[title="Ezüst"]`));
});

step("Click on the product's picture", async function() {
    await click($(`a[data-gallery-link-index-value="0"]`));
});

step("Scroll to right the picture", async function() {
    await click($(`//button[@aria-label="Next slide"]`));
});

step("Click on 'Elmentem' button", async function() {
    await click($(`a[class="action-link action-link--right action-link--toggle js-product-save-link"]`));
});

step("Click on 'értékelés' button", async function() {
    await click($(`a[href="#velemenyek"]`));
});

step("Click on the 'Teljes specifikáció' button on the 'Specifikáció' section", async function() {
    await click($(`(//div[@class="product__link flex__row flex__align-items--center flex__justify--center"])[1]`));
});

//BUG
step("Click on the 'Mutass kevesebbet' button on the 'Specifikáció' section", async function() {
    await click($(`(//i[@class="product__link__icon fas fa-arrow-up"])[1]`));
});

step("Click on 'tovább' button", async function() {
    await click($(`(//*[@href='#reszletek'])[2]`));
});

step("Click on 'csatlakozz most!' button", async function() {
    await click($(`(//a[@href="#"])[53]`));
});

step("Click on '+1 év garancia' radio button", async function() {
    await click($(`(//span[@class="control__indicator"])[2]`));
});

step("Remove '+1 év garancia' radio button", async function() {
    await click($(`(//a[@class="product__guarantee-delete"])[1]`));
});

step("Change the piece of the product 1 to 2 in the 'darab' textBox", async function() {
    await clear($(`input[class="shop-to-cart-quantity__input"]`));
    await write("2", $(`input[class="shop-to-cart-quantity__input"]`));
});

step("Add product to the basket", async function() {
    await click($(`//button[contains(@class, "cart-button--vlg")]`));
    await click($(`//button[contains(@class, "secondary button--fluid")]`));
});

step("Remove product from the basket", async function() {
    await click($(`a[class="basket-card__remove"]`));
});

step("Click on the '1340 * 800 pixel' link in 'Specifikáció' section", async function() {
    await hover($(`(//h3[@class="product-box__title section-title"])[2]`));
    await click("1340 * 800");
});

step("Click on 'Háttértár' info icon", async function() {
    await scrollTo($(`(//h3[@class="product-box__title section-title"])[2]`));
    await click($(`//*[@id="specifikacio"]/div/div[2]/div[1]/table/tbody/tr[7]/td[1]/i`));
    await waitFor(3000);
});

step("Click on 'Gyártó termékoldala' link", async function() {
    await scrollTo("Garancia");
    await click($(`a[href="https://www.samsung.com/"]`));
});

step("Click on 'Kérdezek' button", async function() {
    await scrollTo($(`(//h3[@class="product-box__title section-title"])[3]`));
    await click($(`(//button[@class="button button--secondary button--text--default empty-block__button"])[1]`));
});

step("Click on 'Értékelem' button", async function() {
    await scrollTo("VÉLEMÉNYEK");
    await click($(`(//button[@class="button button--secondary button--text--default empty-block__button"])[2]`));
});

step("Click on 'Vissza az oldal tetejére' button", async function() {
    await scrollTo("Vélemények");
    await click($(`a[class="site-footer__back-to-top-link js-site-footer-back-to-top-link"]`));
});

step("Scroll slider to right two times in 'Neked ajánljuk' section", async function() {
    await scrollTo("Neked ajánljuk");
    await click($(`(//span[@class="shop-scroll__scroll-btn"])[2]`));
    await click($(`(//span[@class="shop-scroll__scroll-btn"])[2]`));
});





step("The page goes to the silver coloured product", async function() {
    var expectedRes = 'SAMSUNG T220 Galaxy Tab A7 Lite 8.7" 32GB WiFi ezüst';
    var actualRes = await $(`h1[class="product__title"]`).text();
    expect(actualRes).to.equal(expectedRes);
});

step("Showed second picture", async function() {
    var expectedRes = await $(`(//img[@alt="SAMSUNG T220 Galaxy Tab A7 Lite 8.7"])[2]`).text();
    var actualRes = await $(`(//img[@src="https://media.icdn.hu/product/GalleryMod/2021-05/701724/resp/1650412_samsung_t225_galaxy_tab_a7_lite_87_32gb_lte_szurke.webp"])[3]`).text();
    expect(actualRes).to.equal(expectedRes);
});

step("'Bejelentkezés' pop-up comes up", async function() {
    var expectedRes = "BEJELENTKEZÉS";
    var actualRes = await $(`(//h5[@class="modal-title"])[8]`).text();
    expect(actualRes).to.include(expectedRes);
});

step("Page scroll down to 'Vélemények' section", async function() {
    var expectedRes = 'VÉLEMÉNYEK';
    var actualRes = await $(`div[class="product-box__title section-title"]`).text();
    expect(actualRes).to.equal(expectedRes);
});

step("Showed all specification", async function() {
    var expectedRes = await $(`(//td[@class="product-table__td"])[31]`);
    var actualRes = await expectedRes.isVisible();
    if (actualRes == true) {
        highlight(expectedRes);
    }
});

step("Page scroll down to 'Részletes leírás' section", async function() {
    var expectedRes = await $(`div[class="layout-box--gap"]`);
    var actualRes = await expectedRes.isVisible();
    if (actualRes == true) {
        highlight(expectedRes);
    }    
});

step("Registration pop-up comes up", async function() {
    var expectedRes = "Miért érdemes előfizetni?";
    var actualRes = await $(`(//h5[@class="modal-title"])[2]`).text();
    expect(actualRes).to.include(expectedRes);
});

step("+1 year guarantee added to the price", async function() {
    var expectedRes = "+1 év";
    var actualRes = await $(`(//div[@class="product__guarantee-price"])[1]`).text();
    expect(actualRes).to.include(expectedRes);
});

step("+1 year guarantee removed", async function() {
    var expectedRes = $(`(//div[@class="product__guarantee-price"])[1]`);
    assert.ok(expectedRes.isVisible());
});

step("Piece of the product changed 1 to 2 in the 'darab' textBox", async function() {
    var expectedRes = textBox(`input[class="shop-to-cart-quantity__input"]`).text();
    var actualRes = $(`input[class="shop-to-cart-quantity__input"]`);
    expect(actualRes).to.equal(expectedRes);
}); /////////////////////////////// MÉG NEM JÓ!!!!!!!!! //////////////////////////////////////////////////////// MÉG NEM JÓ!!!!!!!!! //////////////////////////////////////////////////////// MÉG NEM JÓ!!!!!!!!! /////////////////////////

step("Product added to the basket", async function() {
    var expectedRes = 'SAMSUNG T220 Galaxy Tab A7 Lite 8.7" 32GB WiFi szürke';
    var actualRes = await $(`span[class="js-truncate__text"]`).text();
    expect(actualRes).to.include(expectedRes);
});

step("Product removed from the basket", async function() {
    var expectedRes = $(`span[class="js-truncate__text"]`);
    assert.ok(expectedRes.isVisible());
});

step("Page goes to the '1340 * 800' filter tag page", async function() {
    //var expectedRes = await $(`//*[@id="app"]/div[1]/main/div[2]/section/div/section/div[1]/div[2]/ul/li/text()`);
    //var actualRes = await $(`li[class="shop-list__filter-tags__item"]`).text();
    //expect(actualRes).to.include(expectedRes);
    var expectedRes = $(`li[class="shop-list__filter-tags__item"]`);
    assert.ok(expectedRes.isVisible());
}); /////////////////////////////// MÉG NEM JÓ!!!!!!!!! //////////////////////////////////////////////////////// MÉG NEM JÓ!!!!!!!!! //////////////////////////////////////////////////////// MÉG NEM JÓ!!!!!!!!! /////////////////////////

step("New tab opened with samsung.com/hu homepage", async function() {
    var expectedRes = 'Samsung';
    var actualRes = await $(`a[href="/www.samsung.com/"]`).text(); 
    //var actualRes = await click($(`(//span[@class="hidden"])[1]`));
    expect(actualRes).to.include(expectedRes);
});/////////////////////////////// MÉG NEM JÓ!!!!!!!!! //////////////////////////////////////////////////////// MÉG NEM JÓ!!!!!!!!! //////////////////////////////////////////////////////// MÉG NEM JÓ!!!!!!!!! /////////////////////////

step("Page goes to top of the page", async function() {
    var expectedRes = $(`div[class="ipon-logo"]`);
    assert.ok(expectedRes.isVisible());
});

step("Slider scrolled to right two times", async function() {
    var expectedRes = $(`a[href="/shop/termek/apple-ipad-pro-11-2-gen-smart-keyboard-folio-magyar-fekete/1826943"]`);
    assert.ok(expectedRes.isVisible());
});

step("Info icon showed informations", async function() {
    expect(await $(`//*[@id="specifikacio"]/div/div[2]/div[1]/table/tbody/tr[7]/td[1]/i`).isVisible());
});












step("Click <button>", async function(button) {

    var elmentem = click($(`a[class="action-link action-link--right action-link--toggle js-product-save-link"])`));
    var ertekeles = click($(`a[href="#velemenyek"]`));
    var teljesSpec = click($(`(//div[@class="product__link flex__row flex__align-items--center flex__justify--center"])[1]`));
    var tovabb = click($(`(//*[@href='#reszletek'])[2]`));
    var csatlakozz = click($(`(//a[@href="#"])[53]`));
    var egyEvGar = click($(`(//span[@class="control__indicator"])[2]`));
    var noEgyEvGar = click($(`(//a[@class="product__guarantee-delete"])[1]`));
    var kerdezek = click($(`(//button[@class="button button--secondary button--text--default empty-block__button"])[1]`));
    var ertekelem = click($(`(//button[@class="button button--secondary button--text--default empty-block__button"])[2]`));
    var visszaFel = click($(`a[class="site-footer__back-to-top-link js-site-footer-back-to-top-link"]`));

    var buttonTomb = [elmentem, ertekeles, teljesSpec, tovabb, csatlakozz, egyEvGar, noEgyEvGar, kerdezek, ertekelem, visszaFel];

    for (var i = 0; i <= 9; i++) {  
        if (buttonTomb[i] == button) {
            await buttonTomb[i];
        }
    } 
});

step("<button> button clicked", async function(button) {

    var elmentem = click($(`a[class="action-link action-link--right action-link--toggle js-product-save-link"])`));
    var ertekeles = click($(`a[href="#velemenyek"]`));
    var teljesSpec = click($(`(//div[@class="product__link flex__row flex__align-items--center flex__justify--center"])[1]`));
    var tovabb = click($(`(//*[@href='#reszletek'])[2]`));
    var csatlakozz = click($(`(//a[@href="#"])[53]`));
    var egyEvGar = click($(`(//span[@class="control__indicator"])[2]`));
    var noEgyEvGar = click($(`(//a[@class="product__guarantee-delete"])[1]`));
    var kerdezek = click($(`(//button[@class="button button--secondary button--text--default empty-block__button"])[1]`));
    var ertekelem = click($(`(//button[@class="button button--secondary button--text--default empty-block__button"])[2]`));
    var visszaFel = click($(`a[class="site-footer__back-to-top-link js-site-footer-back-to-top-link"]`));

    var buttonTomb = [elmentem, ertekeles, teljesSpec, tovabb, csatlakozz, egyEvGar, noEgyEvGar, kerdezek, ertekelem, visszaFel];

    for (var i = 0; i <= 9; i++) {  
        if (buttonTomb[i] == button) {
            expect(buttonTomb[i]).isVisible();
        }
    } 
});