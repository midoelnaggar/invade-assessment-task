import universitiesServices from "@/services/universitiesServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getUniversitiesThunk = createAsyncThunk(
    "universities",
    async (_, { rejectWithValue }) => {
        try {
            const res = await universitiesServices.getAll();
            return res;

        } catch (err: any) {
            toast.error(err?.response?.data?.message?.toUpperCase(), { position: "bottom-left" })
            return rejectWithValue(err);
        }
    })