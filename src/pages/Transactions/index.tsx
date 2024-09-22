import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm/>

        <TransactionsTable >
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighLight variant="income">
                R$ 12.000,00
              </PriceHighLight>
            </td>
            <td>Venda</td>
            <td>13/07/2024</td>
          </tr>

          <tr>
            <td width="50%">Finecap</td>
            <td>
              <PriceHighLight variant="outcome">
                - R$ 500,00
              </PriceHighLight>
            </td>
            <td>Festa</td>
            <td>13/09/2024</td>
          </tr>

          <tr>
            <td width="50%">Compra de roupas</td>
            <td>
              <PriceHighLight variant="outcome">
                - R$ 1.500,00
              </PriceHighLight>
            </td>
            <td>Festa</td>
            <td>13/08/2024</td>
          </tr>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}