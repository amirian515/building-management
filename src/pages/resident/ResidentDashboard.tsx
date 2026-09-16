import Header from "../../components/Header"
import PaymentHistoryCard from "../../components/PaymentHistoryCard"
import BillCard from "../../components/BillCard"
import FinancialStatusCard from "../../components/FinancialStatusCard"
function ResidentDashboard (){

    return(
        <section className="bg-background min-h-screen space-y-6  flex flex-col">
            <Header />
            <FinancialStatusCard/>
            <PaymentHistoryCard />
            <BillCard />
        </section>


    )

}
export default ResidentDashboard