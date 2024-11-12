import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react"
import { api } from "./services/api";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string
  category: string
  createdAt: Date
}

interface TransactionsContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]);

export const TransactionsProvider = ({ children }: TransactionsContextProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}