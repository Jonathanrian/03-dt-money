import * as Dialog from '@radix-ui/react-dialog' //biblioteca de acessibilidade
import { CloseButton, NewContent, NewOverlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
  return(
    <Dialog.Portal>
      <NewOverlay/>

      <NewContent>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form action="">
          <input type='text' placeholder='Descrição'/>
          <input type='number' placeholder='Preço' />
          <input type='text' placeholder='Categória' />

          <TransactionType>
            <TransactionTypeButton variant='income'>
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionTypeButton>
          </TransactionType>

          <TransactionType>
            <TransactionTypeButton variant='outcome'>
              <ArrowCircleDown size={24}/>
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type='submit'>
            Cadastar
          </button>
        </form>
      </NewContent>
    </Dialog.Portal>
  )
}
