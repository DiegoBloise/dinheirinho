import { Container } from "./styles"

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Internet</td>
            <td className="withdraw">R$ 200</td>
            <td>Casa</td>
            <td>20/11/2024</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>17/11/2024</td>
          </tr>
          <tr>
            <td>Investimentos</td>
            <td className="deposit">R$ 2.900</td>
            <td>Investimentos</td>
            <td>8/11/2024</td>
          </tr>
          <tr>
            <td>Restaurante</td>
            <td className="withdraw">- R$ 300</td>
            <td>Alimentação</td>
            <td>3/11/2024</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 2.000</td>
            <td>Casa</td>
            <td>1/11/2024</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
