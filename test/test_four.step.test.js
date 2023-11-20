const { test: test_fourStepTest } = require('@playwright/test');
const { WikipediaPage } = require('../Page/WikipediaPage');

test_fourStepTest('Wikipedia tests', async ({ page}) => {
	const wikipediaPage = new WikipediaPage(page);
	await wikipediaPage.navigate();
	await wikipediaPage.searchInput.fill('search query');
	await wikipediaPage.searchButton.click();
});

