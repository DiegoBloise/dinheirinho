import { createContext, ReactNode, useContext } from "react";
import { useEffect, useState } from "react"
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

interface TransactionsContextProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: newTransaction) => Promise<void>;
}

type newTransaction = Omit<Transaction, 'id' | 'createdAt'>;

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider = ({ children }: TransactionsContextProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  const createTransaction = async (newTransaction: newTransaction) => {
    const response = await api.post("transactions", {
      ...newTransaction,
      createdAt: new Date()
    })

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
}