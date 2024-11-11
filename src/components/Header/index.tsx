import { Container, Content } from "./styles"
import { Logo } from "../Logo"

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <Logo />
        <button onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}
