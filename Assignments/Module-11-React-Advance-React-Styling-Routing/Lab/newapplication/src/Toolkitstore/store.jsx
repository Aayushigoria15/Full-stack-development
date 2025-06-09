// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        // example initial item
        { id: 1, text: 'Learn Redux Toolkit' },
    ],
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action) => {
            const { id, text } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) item.text = text;
        }
    }
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;

const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
    }
});

export default store;
