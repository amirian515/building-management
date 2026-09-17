import Header from "../../components/Header"
import PaymentHistoryCard from "../../components/PaymentHistoryCard"
import BillCard from "../../components/BillCard"
import FinancialStatusCard from "../../components/FinancialStatusCard"
import ExpensesCard from "../../components/ExpensesCard"
function ResidentDashboard (){

    return(
        <section className="bg-background min-h-screen space-y-6  flex flex-col pb-6">
            <Header />
            <FinancialStatusCard/>
            <PaymentHistoryCard />
            <BillCard />
            <ExpensesCard />
        </section>


    )

}
export default ResidentDashboard