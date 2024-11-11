import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createServer } from 'miragejs'
import { App } from './App.tsx'

const transactions = [
  {
    id: 5,
    title: 'Internet',
    amount: -200,
    type: 'withdraw',
    category: 'Casa',
    createdAt: '2024-11-20'
  },
  {
    id: 4,
    title: 'Desenvolvimento de Website',
    amount: 12000,
    type: 'deposit',
    category: 'Desenvolvimento',
    createdAt: '2024-11-17'
  },
  {
    id: 3,
    title: 'Investimentos',
    amount: 2900,
    type: 'deposit',
    category: 'Investimentos',
    createdAt: '2024-11-08'
  },
  {
    id: 2,
    title: 'Restaurante',
    amount: -300,
    type: 'withdraw',
    category: 'Alimentação',
    createdAt: '2024-11-03'
  },
  {
    id: 1,
    title: 'Aluguel',
    amount: -2000,
    type: 'withdraw',
    category: 'Casa',
    createdAt: '2024-11-01'
  }
];

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return transactions
    })
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
