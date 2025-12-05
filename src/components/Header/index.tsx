import React from 'react'
import { Produto } from '../../types'

type HeaderProps = {
  favoritos: Produto[]
  itensNoCarrinho: Produto[]
}

const Header: React.FC<HeaderProps> = ({ favoritos, itensNoCarrinho }) => {
  return (
    <header>
      <h1>EBAC Sports</h1>
      <p>Favoritos: {favoritos.length}</p>
      <p>Carrinho: {itensNoCarrinho.length}</p>
    </header>
  )
}

export default Header
