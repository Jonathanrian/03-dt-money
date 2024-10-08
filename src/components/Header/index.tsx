import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import * as Dialog from '@radix-ui/react-dialog' //biblioteca de acessibilidade
import logoImg from '../../assets/Logo.svg'
import { NewTransactionModal } from "../NewTransactionModal"

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg}/>

        <Dialog.Root>
          <Dialog.Trigger>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  )
}