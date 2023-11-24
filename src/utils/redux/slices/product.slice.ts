import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface productState {
  showModal: boolean;
}

const initialState: productState = {
  showModal: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleModal } = productSlice.actions;

export default productSlice.reducer;
