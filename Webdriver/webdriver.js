const {
	Builder, By, Key, until,
} = require('selenium-webdriver');

const searchLine = (By.name('q'));
const siteLink = (By.css('h3.LC20lb.DKV0Md'));
const usersLink = (By.xpath("//a[text()='Users']"));
const selectUser = (By.xpath("//div[@class='application-main ']//a[@href='/YuriyBerdnik']"));
const repositoriesLink = (By.xpath("//a[@href='/YuriyBerdnik?tab=repositories']"));
const selectRepo = (By.xpath("//a[@href='/YuriyBerdnik/Selenium-WebDriver-Basics-Locators']"));
const pricingButton = (By.xpath("//*[@track-name='pricing']"));
const calculatorsButton = (By.xpath("//*[@track-metadata-eventdetail='calculators']"));

(async function scenario() {
	const driver = await new Builder().forBrowser('chrome').build();
	try {
		await driver.manage().window().maximize();

		await driver.get('https://google.com/');
		await driver.wait(until.titleIs('Google'), 5000);
		await driver.findElement(searchLine).sendKeys('github.com', Key.RETURN);
		await driver.wait(until.elementLocated(siteLink, 5000)).click();
		await driver.wait(until.titleIs('The world’s leading software development platform · GitHub'), 5000);
		await driver.findElement(searchLine).sendKeys('YuriyBerdnik', Key.RETURN);
		await driver.findElement(usersLink).click();
		await driver.wait(until.elementLocated(selectUser), 5000).click();
		await driver.wait(until.elementLocated(repositoriesLink), 5000).click();
		await driver.wait(until.elementLocated(selectRepo), 5000).click();
		await driver.navigate().back();

		const getTitle = await driver.getTitle();
		console.log(getTitle);

		const firstPage = await driver.getWindowHandle();
		await driver.switchTo().newWindow();

		await driver.get('https://cloud.google.com/');
		await driver.wait(until.titleIs('Google Cloud'), 5000);
		await driver.wait(until.elementLocated(pricingButton), 10000).click();
		await driver.wait(until.elementLocated(calculatorsButton), 5000).click();

		const getNewTitle = await driver.getTitle();
		console.log(getNewTitle);

		await driver.switchTo().window(firstPage);
	} catch (e) {
		console.log(e.message);
	} finally {
		await driver.quit();
	}
}());
