import { CircleArrowDown, CircleArrowUp, Wallet } from "lucide-react"
import { Container } from "./styles"
import { useContext, useEffect, useState } from "react"
import { TransactionsContext } from "../../TransactionsContext"

export const Summary = () => {
  const transactions = useContext(TransactionsContext);
  const [incomes, setIncomes] = useState(0);
  const [outcomes, setOutcomes] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIncomes(transactions.reduce((acumulador, atual) => atual.type === 'deposit' ? acumulador + atual.amount : acumulador, 0));
    setOutcomes(transactions.reduce((acumulador, atual) => atual.type === 'withdraw' ? acumulador + atual.amount : acumulador, 0));
    setTotal(incomes + outcomes);
  }, [incomes, outcomes, transactions]);

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
        }).format(incomes)}</strong>
      </div>

      <div className="card">
        <header>
          <p>Saídas</p>
          <CircleArrowDown size='2rem' color="var(--red)" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: "currency",
          currency: 'BRL',
        }).format(outcomes)}</strong>
      </div>

      <div className="card card-total">
        <header>
          <p>Total</p>
          <Wallet size='2rem' />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: "currency",
          currency: 'BRL',
        }).format(total)}</strong>
      </div>
    </Container>
  )
}