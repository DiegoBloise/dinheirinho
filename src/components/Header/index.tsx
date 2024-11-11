import { Container, Content } from "./styles"
import { Logo } from "../Logo"

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <button>Nova Transação</button>
      </Content>
    </Container>
  )
}
