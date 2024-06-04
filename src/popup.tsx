import {ExtensionListView} from "~features/extension-list-view"

import "~style.css"

function IndexPopup() {
  return (
    <div className="flex items-center justify-center py-5 min-h-96 w-[320px]">
      <ExtensionListView />
    </div>
  )
}

export default IndexPopup
