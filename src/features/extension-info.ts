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
