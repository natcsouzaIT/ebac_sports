import * as S from './styles'
import { Produto } from '../../types'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'
import { toggleFavorito } from '../../features/favoritos/favoritosSlice'
import { BtnFavorito } from './styles'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type Props = {
  produto: Produto
  estaNosFavoritos: boolean
}

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(addItem(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
      <S.BtnFavorito
        onClick={() => dispatch(toggleFavorito(produto))}
        type="button"
      >
        {estaNosFavoritos ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      </S.BtnFavorito>
    </S.Produto>
  )
}

export default ProdutoComponent
