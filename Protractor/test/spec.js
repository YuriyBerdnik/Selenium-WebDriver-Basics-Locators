const EC = protractor.ExpectedConditions;

describe('Protractor App', () => {
	beforeAll(() => {
		browser.get('https://www.zagat.com/');
	});

	it('should have a title', () => {
		expect(browser.getTitle()).toEqual(
			'National Restaurant Reviews | Best Restaurants in National - Zagat',
		);
	});

	it('find button is clickable', () => {
		const button = element(by.xpath("//div[@class='zgt-header-search-text']"));

		expect(browser.wait(EC.elementToBeClickable(button), 10000)).toBe(true);
	});

	it('social column is visible', () => {
		const button = element(
			by.xpath("//div[@class='zgt-footer-top layout-gt-sm-row layout-column']"),
		);
		browser.wait(EC.visibilityOf(button), 10000);

		expect(button.isDisplayed()).toBe(true);
	});

	it('a button choose a city clickable and visible, click', () => {
		const buttonCity = element(
			by.xpath("//div[@class='zgt-media-card-title story-cell-title']"),
		);

		expect(browser.wait(EC.visibilityOf(buttonCity), 10000)).toBe(true);
		expect(buttonCity.isDisplayed()).toBe(true);
		buttonCity.click();
	});

	it('should have a new title', () => {
		expect(browser.getTitle()).toEqual('We Want Your Feedback - Zagat');
	});

	it('footer is visible', () => {
		const footer = element(by.xpath("//div[@class='zgt-footer-bottom layout-row']"));

		expect(browser.wait(EC.visibilityOf(footer), 10000)).toBe(true);
	});

	it('verify that footer contains "About" 7 lines', () => {
		const counterFooter = element.all(by
			.xpath("//div[@class='zgt-footer-column zgt-footer-static-links layout-column flex-xs-100 flex-gt-xs-33']/div"));

		expect(counterFooter.count()).toBe(7);
	});
});
