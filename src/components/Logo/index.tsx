import { BadgeDollarSign } from "lucide-react"
import { Container } from "./styles"

export const Logo = () => {
  return (
    <Container>
      <BadgeDollarSign size='3rem' color="var(--green)" />
      <h1>Dinheirinho</h1>
    </Container>
  )
}
