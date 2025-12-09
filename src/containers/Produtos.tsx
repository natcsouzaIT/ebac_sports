import { Produto } from '../types'
import ProdutoCard from '../components/Produto'
import * as S from './styles'

type Props = {
  produtos: Produto[]
  favoritos: Produto[]
  adicionarAoCarrinho: (produto: Produto) => void
  favoritar: (produto: Produto) => void
}

const ProdutosComponent = ({ produtos, favoritos }: Props) => {
  const produtoEstaNosFavoritos = (produto: Produto) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <ProdutoCard
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
