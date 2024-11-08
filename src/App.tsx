import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import EstiloGlobal, { Container } from './styles'
import store from './store'

const rotas = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/novo',
        element: <Cadastro />
    }
])

function App() {
    return (
        <Provider store={store}>
            <h1>Seja bem vindo a minha agenda de contatos online</h1>
            <EstiloGlobal />
            <Container>
                <RouterProvider router={rotas} />
            </Container>
        </Provider>
    )
}

export default App
