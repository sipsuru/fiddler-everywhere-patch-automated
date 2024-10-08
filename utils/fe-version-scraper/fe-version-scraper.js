import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

async function getLatestVersion(): Promise<void> {
  try {
    const url: string = 'https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history';
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    // Adjust the selector to match the layout of the page
    const version: string = $('a:contains("Fiddler Everywhere v")')
      .first()
      .text()
      .match(/(\d+\.\d+\.\d+)/)?.[0] || ''; // Update regex to capture version without 'v'

    if (version) {
      console.log(`Latest Version: ${version}`);
      
      // Save the version to a file
      fs.writeFileSync('latest_version.txt', version);
    } else {
      console.error('No version found.');
    }
  } catch (error) {
    console.error('Error fetching version:', error);
  }
}

getLatestVersion();
