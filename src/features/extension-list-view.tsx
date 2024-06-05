import {useEffect, useState} from "react"
import {ExtensionList} from "~features/extension-list";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~components/ui/tabs";
import {sendToBackground} from "@plasmohq/messaging";
import {GearIcon} from "@radix-ui/react-icons";
import {Separator} from "~components/ui/separator";

export const ExtensionListView = () => {
    // background 消息
    // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    //     // 判断消息类型
    //     if (message.type === "bgGetExtensionList") {
    //         console.log("popup rec ")
    //         console.log(message)
    //     }
    // });

    const [isLoading, setIsLoading] = useState(false);
    const [extensions, setExtensions] = useState([]);

    const fetchGetExtensionList = async () => {
        setIsLoading(true);
        sendToBackground({
            name: "background-get-extension-list",
            body: {},
        }).then((response) => {
            setIsLoading(false);
            console.log("popup rec2")
            console.log(response.extensions)
            setExtensions(response.extensions)
        }).catch((error) => {
            console.error("search error:", error);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        fetchGetExtensionList();
    }, []);

    return (
        <div>
            <Tabs defaultValue="all">
                <div className="w-full mt-auto px-4 py-2 flex items-center justify-between">
                    <button className=" mt-3  mt-0 text-gray-400 hover:text-gray-900 " onClick={() => {
                        chrome.tabs.create({
                            url: "/options.html"
                        })
                    }}>
                        <GearIcon className="h-4 w-4" />
                    </button>

                    <div className="flex mt-3 justify-center mt-0 space-x-5 rtl:space-x-reverse">
                        <a href="https://twitter.com/doit_2017" target="_blank"
                           className="text-gray-400 hover:text-gray-900 ">
                            <svg className="w-4 h-4" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor"
                                 viewBox="0 0 20 17">
                                <path fillRule="evenodd"
                                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a href="https://github.com/sshallow/AtMyNotion-Extension" target="_blank"
                           className="text-gray-400 hover:text-gray-900 ">
                            <svg className="w-4 h-4" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                      clipRule="evenodd"/>
                            </svg>

                        </a>
                    </div>
                </div>
                {/*<Separator className="my-3"/>*/}
                <div className="flex items-center px-4 ">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">扩展列表</h1>
                    </div>
                    <TabsList className="ml-auto">
                        <TabsTrigger
                            value="all"
                            className="text-zinc-600 dark:text-zinc-200"
                        >
                            全部扩展
                        </TabsTrigger>
                        <TabsTrigger
                            value="usesCookies"
                            className="text-zinc-600 dark:text-zinc-200"
                        >
                            使用Cookie
                        </TabsTrigger>
                    </TabsList>
                </div>
                {/*<Separator className=""/>*/}
                <TabsContent value="all" className="mt-4">
                    <ExtensionList items={extensions}/>
                </TabsContent>
                <TabsContent value="usesCookies" className="mt-4">
                    <ExtensionList items={extensions.filter((item) => item.permissions.includes("cookies"))} />
                </TabsContent>
            </Tabs>
        </div>
    )
}
