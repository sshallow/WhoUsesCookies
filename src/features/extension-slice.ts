import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {ExtensionInfo} from "~features/extension-info";

export interface ExtensionListState {
    extensionList: ExtensionInfo[];
}

export const initialState: ExtensionListState = {
    extensionList: [],
};

const extensionSlice = createSlice({
    name: "notion",
    initialState,
    reducers: {
        setExtensionList: (state, action: PayloadAction<ExtensionInfo[]>) => {
            state.extensionList = action.payload;
        }
    },
});

export const {
    setExtensionList
} = extensionSlice.actions;

export default extensionSlice.reducer;
