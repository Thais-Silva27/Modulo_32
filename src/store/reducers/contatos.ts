import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
    itens: Contato[]
}

const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: 'Amanda Oliveira Costa',
            telefone: '55 99326-9123',
            email: 'amanda.oliveiractt@gmail.com'
        },
        {
            id: 2,
            nome: 'André Luiz Santos',
            telefone: '11 98177-9658',
            email: 'andreluiz.017@gmail.com'
        },
        {
            id: 3,
            nome: 'Nícolas Gabriel da Silva',
            telefone: '51 99227-9251',
            email: 'nicolasgabriel.developer@gmail.com'
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
