import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./components/slices/LoginSlice";

const store = configureStore({
  reducer: loginSlice,
});

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

console.log(store);

export default store;
