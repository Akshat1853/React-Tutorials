import Dashboard from "../components/Dashboard"
import { ExpenseProvider } from "../context/ExpenseContext"
import DashboardLayout from "../layouts/DashboardLayout"

const index = () => {
  return (
    <ExpenseProvider>
      <DashboardLayout>
        <Dashboard/>
      </DashboardLayout>
    </ExpenseProvider>
  )
}

export default index
