## The dragon slayer eventually becomes the evil dragon?

> **How to ensure that this plug-in will not steal cookies?**
>
>
> **How to ensure that the version you publish in the Google plug-in center is consistent with the one you open source, and not a backdoor version?**
>
> https://x.com/huiqiang6/status/1798427725117694083
>

Answer:

> Good question!
>
> 1. How to ensure that this detection plug-in will not steal cookies?
>
> The premise of the plug-in to obtain cookies is that the cookie permission field needs to be set to obtain cookies. First of all, this plug-in code is 100% open source, and you can directly view the source code to check the permissions of this plug-in. Secondly, you can also manually check the actual folder path of the plug-in on macOS and check the mainfest to check the real permission field. It is very easy to verify. This is the method of manually checking permissions for reference: [sshallow/WhoUsesCookies: Displays the permissions of the extensions you installed and shows who is accessing your cookies. (github.com)](https://github.com/sshallow/WhoUsesCookies?tab=readme-ov-file#%E5%A6%82%E4%BD%95%E6%89%8B%E5%8A%A8%E6%A3%80%E6%9F%A5%E6%89%A9%E5%B1%95%E6%9D%83%E9%99%90)
>
> 2. How to ensure that the version released in the Google Plugin Center is consistent with your open source version, and not a backdoor version?
>
> As the answer to question 1, you can manually check the actual extension folder path on macOS, check the mainfest to check the real permission field to verify the actual permissions used. Of course, it is also strongly recommended to install it yourself using the source code!
>

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

## How to manually check extension permissions?

Detailed steps to manually check browser extension permissions on macOS. Windows users can query the path of the extension by themselves, the principle is the same.

### Edge browser

1. Open Finder and go to Edge's profile folder (shift+command+g): `~/Library/Application Support/Microsoft Edge/`
2. Find the `Extensions` folder in the `Default` folder or a folder similar to `Profile 1 (Profile+number)`.
3. After entering the `Default/Extensions` or `Profile 1/Extensions` folder, find the corresponding folder according to the extension ID and open the `manifest.json` in it
4. Open the `manifest.json` file in the folder and check the `permissions` field. For example:
   ```json
   "permissions": [
       "storage",
       "https://*/*",
       "http://*/*",
       "file://*/*",
       "tabCapture",
       "webNavigation"
   ]
   ```
   The above permissions include: `storage`, `tabCapture`, `webNavigation`, and domain scopes `https://*/*`, `http://*/*` and `file://*/*`.

### Chrome browser

1. Open Finder and go to Chrome's profile folder (shift+command+g): `~/Library/Application Support/Google/Chrome/Default/`
2. Find the `Extensions` folder in the `Default` folder or a folder similar to `Profile 1 (Profile+number)`.
3. After entering the `Default/Extensions` or `Profile 1/Extensions` folder, find the corresponding folder according to the extension ID and open the `manifest.json` in it

4. Open the `manifest.json` file in the folder and check the `permissions` field. For example:
   ```json
   "permissions": [
       "storage",
       "https://*/*",
       "http://*/*",
       "file://*/*",
       "tabCapture",
       "webNavigation"
   ]
   ```
   The above permissions include: `storage`, `tabCapture`, `webNavigation`, and domain ranges `https://*/*`, `http://*/*` and `file://*/*`.

Using the above method, you can manually check whether the installed browser extensions have permission to access sensitive information such as cookies.

## Feedback

If you run into any issues or have suggestions for improvements, please file an issue or submit a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).

## Support me with a coffee ☕

If you find this extension useful and want to support its development, feel free to buy me a coffee!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B2XG28D)

<img src="https://github.com/sshallow/AtMyNotion-Extension/assets/21257340/d8e9a707-c86d-40f6-80fa-20b5130a09ff" alt="AtMyNotion-Extension Preview" width="240px">

<img src="https://github.com/sshallow/AtMyNotion-Extension/assets/21257340/0300a891-b741-4ea0-aa26-eee2c728f1b1" alt="AtMyNotion-Extension Preview" width="240px">
