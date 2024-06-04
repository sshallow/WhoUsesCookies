
console.log("Live now; make now always the most precious time. Now will never come again.")

chrome.runtime.onInstalled.addListener(() => {
    checkExtensionsWithCookiePermissions();
});

function checkExtensionsWithCookiePermissions() {
    chrome.management.getAll((extensions) => {
        console.log(extensions)
        let extensionsWithCookiePermissions = extensions.filter(ext => ext.permissions && ext.permissions.includes('cookies'));
        console.log(extensionsWithCookiePermissions)

        // 发送到 popup
        chrome.runtime.sendMessage({type: "bgGetExtensionList", payload: extensions}, function (res) {
            if (res) {
                console.log("回调函数:", res)
            } else if (res && res.error) {
                console.log("回调函数 Error:", res)
            }
        })
    });
}
