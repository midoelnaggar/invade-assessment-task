import { createSlice } from "@reduxjs/toolkit"
import { getUniversitiesThunk } from "../thunks/universitiesThunks";

const initialState: IUniversitiesState = {
    loading: false,
    universities: []
}

const universitiesSlice = createSlice({
    name: "universities",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUniversitiesThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUniversitiesThunk.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.universities = action.payload.data;
            }
            state.loading = false;
        });
        builder.addCase(getUniversitiesThunk.rejected, (state) => {
            state.loading = false;
        });
    }

});

export default universitiesSlice;