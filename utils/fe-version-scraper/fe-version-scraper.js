const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function getLatestVersion() {
  try {
    const url = 'https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history';
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    // Adjust the selector to match the layout of the page
    const version = $('a:contains("Fiddler Everywhere v")').first().text().match(/v\d+\.\d+\.\d+/)[0];

    console.log(`Latest Version: ${version}`);

    // Save the version to a file
    fs.writeFileSync('latest_version.txt', version);
  } catch (error) {
    console.error('Error fetching version:', error);
  }
}

getLatestVersion();
