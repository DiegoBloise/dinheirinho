import { CircleArrowDown, CircleArrowUp, X } from "lucide-react";
import { Container, RadioBox, TransactionTypeContainer } from "./styles"
import Modal from 'react-modal'
import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = async (event: React.FormEvent) => {
    event.preventDefault();

    await createTransaction({
      amount,
      category,
      title,
      type
    })

    onRequestClose();

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
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
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            active={type === 'deposit'}
            transaction="deposit"
          >
            <span>Entrada</span>
            <CircleArrowUp size='1.25rem' color="var(--green)" />
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            active={type === 'withdraw'}
            transaction="withdraw"
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
