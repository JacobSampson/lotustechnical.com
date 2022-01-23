import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ViewMode = 'edit' | 'view' | 'create';

export type ViewState = {
    mode: ViewMode,
}

const initialState: ViewState = {
    mode: 'view',
}

const view = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setViewState(state, { payload }: PayloadAction<{ mode: ViewMode }>) {
            const { mode } = payload;
            return {
                ...state,
                mode
            };
        },
    }
});

export const {
    setViewState,
} = view.actions;
export default view.reducer;
