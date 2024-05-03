import { createSlice } from "@reduxjs/toolkit"
import { getUniversitiesThunk } from "../thunks/universitiesThunks";

const initialState: IUniversitiesState = {
    loading: false,
    universities: [],
    filteredUniversities: [],
}

const universitiesSlice = createSlice({
    name: "universities",
    initialState,
    reducers: {
        searchUniversities(state, action: { payload: string }) {
            if (action.payload.length > 2) {
                state.filteredUniversities = state.universities.filter(university => university.name.toLowerCase().includes(action.payload?.toLowerCase()));
            } else {
                state.filteredUniversities = state.universities;
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(getUniversitiesThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUniversitiesThunk.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.universities = action.payload.data;
                state.filteredUniversities = action.payload.data;
            }
            state.loading = false;
        });
        builder.addCase(getUniversitiesThunk.rejected, (state) => {
            state.loading = false;
        });
    }

});

export default universitiesSlice;