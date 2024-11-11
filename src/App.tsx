import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { GlobalStyle } from "./styles/global"
import { useState } from "react"

export const App = () => {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  )
}