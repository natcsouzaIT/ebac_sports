import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

import { RootState } from './store'
import { addItem } from './features/cart/cartSlice'
import { toggleFavorito } from './features/favoritos/favoritosSlice'
import { useGetProdutosQuery } from './features/products/api'

function App() {
  const dispatch = useDispatch()

  const carrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favoritos.items)

  const { data: produtos = [], isLoading, error } = useGetProdutosQuery()

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar produtos</p>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={(produto) => dispatch(toggleFavorito(produto))}
          adicionarAoCarrinho={(produto) => dispatch(addItem(produto))}
        />
      </div>
    </>
  )
}

export default App
