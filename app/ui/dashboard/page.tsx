import { fetchRevenue } from "@/app/lib/data";
import RevenueChart from "./revenue-chart";
import LatestInvoices from "./latest-invoices";
import { fetchLatestInvoices } from "@/app/lib/data";



export default async function Page () {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {/*<Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
  />*/}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<RevenueChart revenue={revenue} />
<LatestInvoices latestInvoices={latestInvoices} /> 
      </div>
      </main>
  )
}