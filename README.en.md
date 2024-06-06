# WhoUsesCookies

[English](README.en.md) | [简体中文](README.md)

WhoUsesCookies is a Chrome browser extension designed to help users detect and monitor whether all extensions have permission to read their browser cookies. With the increasing popularity of web3 and cryptocurrency, protecting personal wallet data and privacy has become particularly important.

## Features

- **Permission detection**: Quickly view the permissions used by all extensions and see which extensions have permission to read your browser cookies

- **One-click disable**: One-click disable plugins

## Preview

https://github.com/sshallow/WhoUsesCookies/assets/21257340/489bbea0-3b15-4f01-a8be-c47ce8bdf6b5

## How to use

1. **Install the extension**: Add the extension to your Chrome/Edge browser.

2. **View permissions**: Click on the "WhoUsesCookies" icon on the browser toolbar to see which extensions are accessing your cookies.

## Installation

There are two ways to install the WhoUsesCookies extension:

### Install from a pre-built package

1. Download the extension: Go to the [releases](https://github.com/sshallow/WhoUsesCookies/releases/tag/product) page and download the WhoUsesCookies zip file.
2. Enable developer mode: Type `chrome://extensions/` or `edge://extensions` in the Chrome or Edge browser address bar to enable "developer mode".
3. Install the extension: Use the "Load unpacked extension" option to select the unpacked extension folder.
4. View permissions: After installation, click on the "WhoUsesCookies" icon on the browser toolbar to open a pop-up window to see which extensions are accessing your cookies.

### Install from source code
1. Clone the code base: `git@github.com:sshallow/WhoUsesCookies.git`.
2. Enter the project directory: `cd WhoUsesCookies`.
3. (Highly recommended) Install pnpm: `npm install --location=global pnpm`.
4. Install dependencies: `pnpm install`.
5. Package and build the extension: `pnpm build`.
6. Enable developer mode: Enter `chrome://extensions/` or `edge://extensions` in the Chrome or Edge browser address bar to enable "developer mode".
7. Install: Click "Load unpacked program" and select the `build/chrome-mv3-prod` folder in the project directory.
8. View permissions: After installation, click the "Who is using cookies" icon on the browser toolbar to open a pop-up window to view which extensions are accessing your cookies.

Enjoy!

## Feedback

If you run into any issues or have suggestions for improvements, please file an issue or submit a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).

## Support me with a coffee ☕

If you find this extension useful and want to support its development, feel free to buy me a coffee!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B2XG28D)

<img src="https://github.com/sshallow/AtMyNotion-Extension/assets/21257340/d8e9a707-c86d-40f6-80fa-20b5130a09ff" alt="AtMyNotion-Extension Preview" width="240px">

<img src="https://github.com/sshallow/AtMyNotion-Extension/assets/21257340/0300a891-b741-4ea0-aa26-eee2c728f1b1" alt="AtMyNotion-Extension Preview" width="240px">
