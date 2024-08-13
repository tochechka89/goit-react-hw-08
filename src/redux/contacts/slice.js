import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, fetchNewContact } from "./operations";
import { logOut } from "../auth/operations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
            }).addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            }).addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = true;
            }).addCase(fetchNewContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            }).addCase(fetchNewContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            }).addCase(fetchNewContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            }).addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            }).addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id);
                state.loading = false;
            }).addCase(deleteContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            }).addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.loading = false;
                state.error = null;
            })

    }

})

export const contactsReducer = contactsSlice.reducer;
