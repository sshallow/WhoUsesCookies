import {ExtensionListView} from "~features/extension-list-view"

import "~style.css"

function IndexPopup() {
  return (
    <div className="flex items-center justify-center py-1 min-h-96 w-[360px]">
      <ExtensionListView />
    </div>
  )
}

export default IndexPopup
