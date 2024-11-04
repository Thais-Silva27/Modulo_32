import styled from "styled-components"

export const ContainerLista = styled.ul`

    margin-top: 15px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 100px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`