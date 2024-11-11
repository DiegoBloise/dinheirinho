import { useEffect, useState } from "react"
import { Container } from "./styles"
import { api } from "../../services/api"

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string
  category: string
  createdAt: Date
}


export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(res => setTransactions(res.data))
  }, []);

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
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', })}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </Container>
  )
}
