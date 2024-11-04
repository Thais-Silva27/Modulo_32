import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
    itens: Contato[]
}

const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: 'Benjamin Oliveira',
            telefone: '55 15 98526-9856',
            email: 'benoliverr@gmail.com'
        },
        {
            id: 2,
            nome: 'Esperança da Silva',
            telefone: '55 19 99669-6996',
            email: 'hopethelastone@hotmail.com'
        },
        {
            id: 3,
            nome: 'Elvaci Junior',
            telefone: '55 11 98552-4712',
            email: 'elvacijr@ebac.com'
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter(
                    (contato) => contato.id !== action.payload
                )
            ]
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(
                (c) => c.id === action.payload.id
            )

            if (indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const ContatoJaExiste = state.itens.find(
                (contato) =>
                    contato.telefone.toLowerCase() ===
                    action.payload.telefone.toLowerCase()
            )

            if (ContatoJaExiste) {
                alert('Já existe um contato com essas informações')
            } else {
                const ultimoContato = state.itens[state.itens.length - 1]

                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.push(contatoNovo)
            }
        }
    }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
