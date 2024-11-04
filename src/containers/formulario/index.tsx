import React, { FormEvent, useState } from 'react'

import { Campo, BotaoSalvar, BotaoCancelar } from '../../styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { Cancelar, CampoFormulario, Titulo } from './style'

const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    const salvarContato = (evento: FormEvent) => {
        evento.preventDefault()

        dispatch(cadastrar({ email, nome, telefone }))
        navigate('/')
    }

    return (
        <>
            <Titulo>Adicionar Novo Contato</Titulo>
            <CampoFormulario onSubmit={salvarContato}>
                <Campo
                    placeholder="Digite o Nome"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <Campo
                    placeholder="Digite o Telefone/WhatsApp"
                    type="tel"
                    required
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                <Campo
                    placeholder="Digite o Email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <BotaoCancelar>
                    <Cancelar to="/">Cancelar</Cancelar>
                </BotaoCancelar>
                <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
            </CampoFormulario>
        </>
    )
}

export default Formulario
