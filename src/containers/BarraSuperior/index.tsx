import * as S from './style'
import React from 'react'

import { BotaoAdicionar } from '../../styles/index'


const BarraSuperior = () => {
    return (
        <S.header>
           <BotaoAdicionar to={'/novo'}>Adicionar Novo Contato</BotaoAdicionar>
        </S.header>
    )
}

export default BarraSuperior