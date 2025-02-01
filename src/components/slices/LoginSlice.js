import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false
  },
  reducers: {
    loggedIn: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoggedIn = true
    },
    loggedOut: (state, action) => {
      state.isLoggedIn = false
    },
    hydrate: (state, action) => {
      return action.payload
    }

  }
})

export const { loggedIn, loggedOut, hydrate } = loginSlice.actions

export default loginSlice.reducer
