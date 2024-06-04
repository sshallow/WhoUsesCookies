import type {PlasmoMessaging} from "@plasmohq/messaging"
// import fetchClient from "~fetch/fetch";
import {Storage} from "@plasmohq/storage";
// import {SpaceInfo, UserInfo} from "~notion/notion-model";
// import {setSpaces, setUser} from "~notion/notion-slice";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    chrome.management.getAll((extensions) => {
        console.log(extensions)
        let extensionsWithCookiePermissions = extensions.filter(ext => ext.permissions && ext.permissions.includes('cookies'));
        console.log(extensionsWithCookiePermissions)
        res.send({
            extensions
        })
    });
}

export default handler
