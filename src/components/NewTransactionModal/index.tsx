import { CircleArrowDown, CircleArrowUp, X } from "lucide-react";
import { Container, RadioBox, TransactionTypeContainer } from "./styles"
import Modal from 'react-modal'
import { useState } from "react";
import { api } from "../../services/api";

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      value,
      type,
      category,
    }

    api.post("transactions", data)
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            transactionType="deposit"
          >
            <span>Entrada</span>
            <CircleArrowUp size='1.25rem' color="var(--green)" />
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            transactionType="withdraw"
          >
            <span>Saída</span>
            <CircleArrowDown size='1.25rem' color="var(--red)" />
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
