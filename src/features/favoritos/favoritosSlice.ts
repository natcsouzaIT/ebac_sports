import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type FavoritosState = {
  items: Produto[]
}

const initialState: FavoritosState = {
  items: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const exists = state.items.find((p) => p.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter((p) => p.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
    },
    clearFavoritos: (state) => {
      state.items = []
    }
  }
})

export const { toggleFavorito, clearFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
