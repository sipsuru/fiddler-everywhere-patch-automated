import requests
from bs4 import BeautifulSoup
import re

def get_latest_version():
    try:
        url = 'https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history'
        response = requests.get(url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        version_text = soup.find('a', string=re.compile(r'Fiddler Everywhere v')).text
        latest_version = re.search(r'(\d+\.\d+\.\d+)', version_text).group(0)

        print(f"Latest Version: {latest_version}")

        # Save the version to a file
        with open('latest_version.txt', 'w') as f:
            f.write(latest_version)
        
    except Exception as e:
        print(f"Error fetching latest version: {e}")

def get_all_versions():
    try:
        url = 'https://www.telerik.com/support/whats-new/fiddler-everywhere/release-history'
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')
        versions = []
        for a in soup.find_all('a', string=re.compile(r'Fiddler Everywhere v')):
            version_match = re.search(r'(\d+\.\d+\.\d+)', a.text)
            if version_match:
                versions.append(version_match.group(0))

        print("All Versions:", versions)

        # Save the versions to a file, one per line
        with open('versions.txt', 'w') as f:
            f.write('\n'.join(versions))
        print('Version numbers saved to versions.txt')

    except Exception as e:
        print(f"Error fetching all versions: {e}")

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description='Fetch Fiddler Everywhere version information')
    parser.add_argument('--latest', action='store_true', help='Get the latest version')
    parser.add_argument('--all', action='store_true', help='Get all versions')

    args = parser.parse_args()

    if args.latest:
        get_latest_version()
    if args.all:
        get_all_versions()
