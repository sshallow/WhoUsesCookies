export interface ExtensionInfo {
    description: string;
    enabled: boolean;
    homepageUrl: string;
    hostPermissions: string[];
    icons: Icon[];
    id: string;
    installType: string;
    isApp: boolean;
    mayDisable: boolean;
    name: string;
    offlineEnabled: boolean;
    optionsUrl: string;
    permissions: string[];
    shortName: string;
    type: string;
    updateUrl: string;
    version: string;
}

export interface Icon {
    size: number;
    url: string;
}

const extension: ExtensionInfo = {
    description: "Display related notion page when searching!",
    enabled: true,
    homepageUrl: "https://chrome.google.com/webstore/detail/edfigkgekgdhmecpnahljldneglkkmkh",
    hostPermissions: [
        "https://*/*"
    ],
    icons: [
        {
            size: 16,
            url: "edge://extension-icon/edfigkgekgdhmecpnahljldneglkkmkh/16/0"
        },
        {
            size: 32,
            url: "edge://extension-icon/edfigkgekgdhmecpnahljldneglkkmkh/32/0"
        },
        {
            size: 48,
            url: "edge://extension-icon/edfigkgekgdhmecpnahljldneglkkmkh/48/0"
        },
        {
            size: 64,
            url: "edge://extension-icon/edfigkgekgdhmecpnahljldneglkkmkh/64/0"
        },
        {
            size: 128,
            url: "edge://extension-icon/edfigkgekgdhmecpnahljldneglkkmkh/128/0"
        }
    ],
    id: "edfigkgekgdhmecpnahljldneglkkmkh",
    installType: "normal",
    isApp: false,
    mayDisable: true,
    name: "At my notion",
    offlineEnabled: false,
    optionsUrl: "chrome-extension://edfigkgekgdhmecpnahljldneglkkmkh/options.html",
    permissions: [
        "cookies",
        "storage"
    ],
    shortName: "At my notion",
    type: "extension",
    updateUrl: "https://clients2.google.com/service/update2/crx",
    version: "0.0.1"
};
