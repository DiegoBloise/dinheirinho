import { CircleArrowDown, CircleArrowUp, Wallet } from "lucide-react"
import { Container } from "./styles"

export const Summary = () => (
  <Container>
    <div className="card">
      <header>
        <p>Entradas</p>
        <CircleArrowUp size='2rem' color="var(--green)" />
      </header>
      <strong>R$ 14.900,00</strong>
    </div>

    <div className="card">
      <header>
        <p>Saídas</p>
        <CircleArrowDown size='2rem' color="var(--red)" />
      </header>
      <strong>- R$ 2500,00</strong>
    </div>

    <div className="card card-total">
      <header>
        <p>Total</p>
        <Wallet size='2rem' />
      </header>
      <strong>R$ 12.400,00</strong>
    </div>
  </Container>
)
