import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";


export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, textFilter) => {
        return contacts.filter((contact) => {
            if (textFilter.trim() === '') {
                return contacts;
            }
            return contact.name.toLowerCase().includes(textFilter.toLowerCase());
        })
    })
    