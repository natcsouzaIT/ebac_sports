import React from 'react'
import { Produto } from '../../types'
import { Header } from './styles'

type HeaderProps = {
  favoritos: Produto[]
  itensNoCarrinho: Produto[]
}

const HeaderComponent: React.FC<HeaderProps> = ({
  favoritos,
  itensNoCarrinho
}) => {
  return (
    <Header>
      <h1>EBAC Sports</h1>
      <div>
        <p>Favoritos: {favoritos.length}</p>
        <p>Carrinho: {itensNoCarrinho.length}</p>
      </div>
    </Header>
  )
}

export default HeaderComponent
