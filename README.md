## 屠龙者终成恶龙？

> **怎么保证这个插件不会盗取cookie了？**
>
>
> **怎么保证你在Google插件中心发布的版本和你开源的是一致的，而不是有后门版本？**
>
> https://x.com/huiqiang6/status/1798427725117694083
>

答：

>  好问题！
>
> 1. **如何保证这个检测插件不会盗取 cookie？**
> 
>   插件获取 cookie 的前提，需要设置 cookie 权限字段才能获取 cookie。首先，此插件代码 100%开源，可直接查看源代码来检查本插件的权限。其次，也可手动查看插件的在 macOS 上的实际文件夹路径，查看 mainfest 检查真实的权限字段。非常容易验证。这是手动检查权限的方法，以供参考：[sshallow/WhoUsesCookies: 显示您安装的扩展程序的权限，显示谁在访问您的 cookies。 (github.com)](https://github.com/sshallow/WhoUsesCookies?tab=readme-ov-file#%E5%A6%82%E4%BD%95%E6%89%8B%E5%8A%A8%E6%A3%80%E6%9F%A5%E6%89%A9%E5%B1%95%E6%9D%83%E9%99%90)
>
> 2. **如何保证在Google插件中心发布的版本和你开源的是一致的，而不是有后门版本？**
>
>    如问题1的回答，可以手动查看 macOS 上的实际扩展程序文件夹路径，查看 mainfest 检查真实的权限字段来验证实际用到的权限。当然，也强烈推荐自己使用源码安装！
>

# WhoUsesCookies

[English](README.en.md) | [简体中文](README.md)

“谁在用cookies“是一款 Chrome 浏览器扩展，旨在帮助用户检测和监控所有扩展程序是否具有读取他们浏览器Cookie的权限。在web3和加密货币日益流行的今天，保护个人钱包数据和隐私变得尤为重要。

## 特性

- **权限检测**: 快速查看所有扩展程序使用的权限，查看哪些扩展具有读取您浏览器Cookie的权限

- **一键禁用**: 一键禁用插件

## 预览

https://github.com/sshallow/WhoUsesCookies/assets/21257340/489bbea0-3b15-4f01-a8be-c47ce8bdf6b5

## 如何使用

1. **安装扩展**: 将扩展添加到你的 Chrome/Edge 浏览器中。

2. **查看权限**: 点击浏览器工具栏上的 "谁在用cookies" 图标，查看哪些扩展正在访问您的Cookies。

## 安装

有以下两种方式安装 WhoUsesCookies 扩展程序:

### 从预构建包安装

1. 下载扩展程序: 前往 [releases](https://github.com/sshallow/WhoUsesCookies/releases/tag/product) 页面，下载 WhoUsesCookies 压缩包。
2. 启用开发者模式: 在 Chrome 或 Edge 浏览器地址栏输入 `chrome://extensions/` 或 `edge://extensions`，启用“开发者模式”。
3. 安装扩展程序: 使用“加载已解压的扩展程序”选项选择解压后的扩展程序文件夹。
4. 查看权限: 安装完成后，点击浏览器工具栏上的 “谁在用cookies” 图标打开弹出窗口，查看哪些扩展正在访问您的Cookies。

### 从源代码安装
1. 克隆代码库: `git@github.com:sshallow/WhoUsesCookies.git`。
2. 进入项目目录: `cd WhoUsesCookies`。
3. (强烈推荐)安装 pnpm: `npm install --location=global pnpm`。
4. 安装依赖项: `pnpm install`。
5. 打包构建扩展程序: `pnpm build`。
6. 启用开发者模式: 在 Chrome 或 Edge 浏览器地址栏输入 `chrome://extensions/` 或 `edge://extensions`，启用“开发者模式”。
7. 安装: 点击“加载已解压程序”选择项目目录下的 `build/chrome-mv3-prod` 文件夹。
8. 查看权限: 安装完成后，点击浏览器工具栏上的 “谁在用cookies” 图标打开弹出窗口，查看哪些扩展正在访问您的Cookies。

尽情使用吧!

## 如何手动检查扩展权限？

在 macOS 系统上手动检查浏览器扩展程序权限的详细步骤。Windows 用户可以自行查询扩展所在路径，原理相同。

### Edge浏览器

1. 打开访达，前往 Edge 的配置文件夹（shift+command+g）：`~/Library/Application Support/Microsoft Edge/`
2. 在 `Default` 文件夹或类似 `Profile 1 (Profile+数字)` 的文件夹中找到 `Extensions` 文件夹。
3. 进入`Default/Extensions` 或 `Profile 1/Extensions` 文件夹后，根据扩展程序ID找到对应的文件夹，打开其中的 `manifest.json`
4. 打开该文件夹中的 `manifest.json` 文件，并检查 `permissions` 字段。例如:
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
   上述权限包括：`storage`、`tabCapture`、`webNavigation`，以及域名范围 `https://*/*`、`http://*/*` 和 `file://*/*`。

### Chrome浏览器

1. 打开访达，前往 Chrome 的配置文件夹（shift+command+g）：`~/Library/Application Support/Google/Chrome/Default/`
2. 在 `Default` 文件夹或类似 `Profile 1 (Profile+数字)` 的文件夹中找到 `Extensions` 文件夹。
3. 进入`Default/Extensions` 或 `Profile 1/Extensions` 文件夹后，根据扩展程序ID找到对应的文件夹，打开其中的 `manifest.json`
4. 打开该文件夹中的 `manifest.json` 文件，并检查 `permissions` 字段。例如:
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
   上述权限包括：`storage`、`tabCapture`、`webNavigation`，以及域名范围 `https://*/*`、`http://*/*` 和 `file://*/*`。

具体路径请参见下图所示：
![15941717654336_ pic](https://github.com/sshallow/WhoUsesCookies/assets/21257340/e8dfb2fc-ae50-4ed6-a432-be7a611a36f9)
![15951717654358_ pic_hd](https://github.com/sshallow/WhoUsesCookies/assets/21257340/b41ea8f9-ec7f-4e73-a2ba-b67bf9e9a4d4)


通过以上方式，你可以手动检查安装的浏览器扩展程序是否具有访问 Cookie 等敏感信息的权限。

## 反馈建议

如果你遇到任何问题或有任何改进建议，请在 GitHub 上提出 issue 或提交 pull request。

## 许可证

该项目采用 [MIT 许可证](LICENSE)。

## 支持我一杯咖啡 ☕

如果你觉得这个扩展程序很有用，并希望支持它的开发，欢迎请我喝杯咖啡!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B2XG28D)

<img src="https://github.com/sshallow/AtMyNotion-Extension/assets/21257340/d8e9a707-c86d-40f6-80fa-20b5130a09ff" alt="AtMyNotion-Extension 预览" width="240px">

<img src="https://github.com/sshallow/AtMyNotion-Extension/assets/21257340/0300a891-b741-4ea0-aa26-eee2c728f1b1" alt="AtMyNotion-Extension 预览" width="240px">



[![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")
