import { CircleArrowDown, CircleArrowUp, X } from "lucide-react";
import { Container, TransactionTypeContainer } from "./styles"
import Modal from 'react-modal'

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close-button"
      >
        <X />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <span>Entrada</span>
            <CircleArrowUp size='1.25rem' color="var(--green)" />
          </button>
          <button type="button">
            <span>Saída</span>
            <CircleArrowDown size='1.25rem' color="var(--red)" />
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
