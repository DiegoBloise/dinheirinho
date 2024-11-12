import { CircleArrowDown, CircleArrowUp, Wallet } from "lucide-react"
import { Container } from "./styles"
import { useTransactions } from "../../hooks/useTransactions"

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.incomes += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.outcomes += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    incomes: 0,
    outcomes: 0,
    total: 0
  })

  return (
    <Container>
      <div className="card">
        <header>
          <p>Entradas</p>
          <CircleArrowUp size='2rem' color="var(--green)" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: "currency",
          currency: 'BRL',
        }).format(summary.incomes)}</strong>
      </div>

      <div className="card">
        <header>
          <p>Saídas</p>
          <CircleArrowDown size='2rem' color="var(--red)" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: "currency",
          currency: 'BRL',
        }).format(summary.outcomes)}</strong>
      </div>

      <div className="card card-total">
        <header>
          <p>Total</p>
          <Wallet size='2rem' />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: "currency",
          currency: 'BRL',
        }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}