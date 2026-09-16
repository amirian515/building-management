import Header from "../../components/Header"
import FinancialStatusCard from "../../components/FinancialStatusCard"
function ResidentDashboard (){

    return(
        <section className="bg-background min-h-screen space-y-6">
            <Header />
            <FinancialStatusCard/>
        </section>


    )

}
export default ResidentDashboard