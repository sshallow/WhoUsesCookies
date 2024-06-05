import {useEffect, useState} from "react"

import {cn} from "src/lib/utils"
import {Badge} from "src/components/ui/badge"
import {ScrollArea} from "src/components/ui/scroll-area"
import {Separator} from "src/components/ui/separator"
import {ExtensionInfo} from "~features/extension-info";
import {Switch} from "~components/ui/switch";

interface ExtensionInfoProps {
    items: ExtensionInfo[]
}

export function ExtensionList({items}: ExtensionInfoProps) {
    const [extensions, setExtensions] = useState<ExtensionInfo[]>(items);
    console.log("extensions")
    console.log(extensions)
    const handleSwitchChange = (id, isEnabled) => {
        console.log(id, isEnabled)
        chrome.management.setEnabled(id, isEnabled, () => {
            if (chrome.runtime.lastError) {
                console.error(`Error toggling extension ${id}:`, chrome.runtime.lastError.message);
            } else {
                console.log(`Extension ${id} toggled successfully!`);
                // 更新扩展程序列表的状态
                setExtensions(prevExtensions =>
                    prevExtensions.map(ext =>
                        ext.id === id ? { ...ext, enabled: isEnabled } : ext
                    )
                );
            }
        });
    };
    // 使用 useEffect 在 items 改变时更新 extensions 的值
    useEffect(() => {
        setExtensions(items);
    }, [items]);
    return (
        <ScrollArea className="h-screen">
            <div className="flex flex-col gap-2 p-4 pt-0 space-y-2.5">
                {extensions.map((item) => (
                    <button
                        key={item.id}
                        className={cn(
                            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
                        )}
                        onClick={() => {}                     }
                    >
                        <div className="flex w-full flex-col gap-1">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={item.icons?.[item.icons.length - 1]?.url}
                                        className="h-5 w-5 mr-1 rounded-sm"
                                    />
                                    <div
                                        className="font-semibold">{item.name}</div>
                                </div>
                                <div
                                    className={cn(
                                        "ml-auto text-xs" )}
                                >
                                    {/*<Switch onCheckedChange={() => handleSwitchChange(item.id, !item.enabled)}/>*/}
                                    <Switch
                                        checked={item.enabled}
                                        onCheckedChange={(isChecked) =>
                                            handleSwitchChange(item.id, isChecked)
                                        }
                                    />
                                </div>
                            </div>
                            {/*<div className="text-xs font-medium">{item.shortName}</div>*/}
                        </div>
                        <div className="line-clamp-2 text-xs text-gray-500">
                            {item.description.substring(0, 300)}
                        </div>
                        <Separator></Separator>
                        <div className="text-xs font-medium my-1">使用的权限：
                        </div>
                        {item.permissions.length ? (
                            <div className="w-full">
                                {item.permissions.map((label) => (
                                    <div key={label} className="mb-1">
                                        <Badge
                                            variant={label === "cookies" ? "warning" : "secondary"}>
                                            {label}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        ) : null}


                    </button>
                ))}
            </div>
        </ScrollArea>
    )
}
