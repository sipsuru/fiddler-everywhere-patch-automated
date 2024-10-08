import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';

async function getAllVersions(): Promise<void> {
  try {
    const url: string = 'https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history';
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    // Extract all versions containing "Fiddler Everywhere v"
    const versions: string[] = [];

    $('a:contains("Fiddler Everywhere v")').each((i, el) => {
      const version = $(el).text().match(/(\d+\.\d+\.\d+)/); // Regex to capture version number
      if (version) {
        versions.push(version[0]); // Push the version number into the array
      }
    });

    // Log and save all versions
    console.log('All Versions:', versions);

    // Save the versions to a file, one per line
    fs.writeFileSync('versions.txt', versions.join('\n'), 'utf8');
    console.log('Version numbers saved to versions.txt');
  } catch (error) {
    console.error('Error fetching versions:', error);
  }
}

getAllVersions();
