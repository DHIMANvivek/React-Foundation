import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
      addItem: (state , action) => { // state is the initial state and action is the data which is coming in
        state.items.push(action.payload);
      },
      removeItem: (state, action) => {
        state.items.pop();
      },
      clearCart: (state) => {
        state.items = state.items.filter((item) => item.name !== item.name);
      }
    }

});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;