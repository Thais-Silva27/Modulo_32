import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'
import { remover, editar } from '../../store/reducers/contatos'
import { Botao, BotaoCancelar, BotaoSalvar } from '../../styles'
import { DadosContato, Input, Imagem } from './style'

type Props = ContatoClass

const Contato = ({
    id,
    nome: nomeOriginal,
    email: emailOriginal,
    telefone: telefoneOriginal
}: Props) => {
    const dispatch = useDispatch()

    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setNome] = useState(nomeOriginal)
    const [telefone, setTelefone] = useState(telefoneOriginal)
    const [email, setEmail] = useState(emailOriginal)

    useEffect(() => {
        setNome(nomeOriginal)
        setTelefone(telefoneOriginal)
        setEmail(emailOriginal)
    }, [nomeOriginal, telefoneOriginal, emailOriginal])

    const cancelarEdicao = () => {
        setEstaEditando(false)
        setNome(nomeOriginal)
        setTelefone(telefoneOriginal)
        setEmail(emailOriginal)
    }

    const handleSave = () => {
        dispatch(editar({ nome, telefone, email, id }))
        setEstaEditando(false)
    }

    return (
        <DadosContato>
            <Imagem src="https://img.freepik.com/psd-gratuitas/icone-3d-para-aplicativo-de-midia-social_23-2150049569.jpg?t=st=1730736589~exp=1730740189~hmac=1e1d1347f103121266589dd03dbc96e1f20e6c3ae0211fc157f30537348da738&w=740" alt="Contato" />
            <Input
                value={nome}
                disabled={!estaEditando}
                onChange={(e) => setNome(e.target.value)}
            />
            <Input
                value={telefone}
                disabled={!estaEditando}
                onChange={(e) => setTelefone(e.target.value)}
            />
            <Input
                value={email}
                disabled={!estaEditando}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div>
                {estaEditando ? (
                    <>
                        <BotaoSalvar onClick={handleSave}>Salvar</BotaoSalvar>
                        <BotaoCancelar onClick={cancelarEdicao}>Cancelar</BotaoCancelar>
                    </>
                ) : (
                    <>
                        <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                        <BotaoCancelar onClick={() => dispatch(remover(id))}>Remover</BotaoCancelar>
                    </>
                )}
            </div>
        </DadosContato>
    )
}

export default Contato
