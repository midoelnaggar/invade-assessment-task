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
        searchUniversities(state, { payload }: { payload: string }) {
            if (payload.length > 2) {
                state.filteredUniversities = state.universities.filter(university => university.name.toLowerCase().includes(payload?.toLowerCase()));
                window.scrollTo({ top: 0, behavior: "smooth" })

            } else {
                state.filteredUniversities = state.universities;
            }
        },
        deleteUniversity(state, { payload }: { payload: number }) {
            state.filteredUniversities = state.filteredUniversities.filter((_, index) => index != payload)
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