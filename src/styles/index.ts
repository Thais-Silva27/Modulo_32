import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}`

export const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 90%;
    }
`
export const Campo = styled.input`
    padding: 8px;
    background-color: #ffffff;
    border-radius: 8px;
    font-weight: bold;
    color: #666666;
    border-color: #2c7c64;
    width: 100%;
    margin-bottom: 15px;
`

export const BotaoAdicionar = styled(Link)`
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #041324;
    border-radius: 8px;
    margin-right: 8px;
    transition: 0.3s;
    width: 100%;
    text-decoration: none;
    text-align: center;
    &:hover {
        background-color: #2c7c64;
    }
`
export const Botao = styled.button`
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s;
    display: inline-block;
    margin-right: 15px;
    background-color: #021b10;
    &:hover {
        background-color: #a7dcc8;
    }
`
export const BotaoSalvar = styled(Botao)`
    background-color: #44bd32;
    &:hover {
        background-color: #2c7c64;
    }
`
export const BotaoCancelar = styled(Botao)`
    background-color: #ffd700;
    &:hover {
        background-color: #ff3204;
    }
`

export const Colors = {
    white: '#ffffff',
    gren1: '#A7DCC8;',
    gren2: '#2C7C64',
    gren3: '#021B10',
    black: '#000000',
    yellow: '#FFD700',
    darkblue: '#041324',
    red: '#ff3204'
}

export default EstiloGlobal
