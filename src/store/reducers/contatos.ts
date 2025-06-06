import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { remover, editar, adicionar } = contatosSlice.actions
export default contatosSlice.reducer
