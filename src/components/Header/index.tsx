import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

import logoImg from '../../assets/Ignite simbol.svg'

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg}/>

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}