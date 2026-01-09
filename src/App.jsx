import { useState } from "react";
import NavBar from "./components/NavBar";
import CompanyDetails from "./components/CompanyDetails";
import ClientDetails from "./components/ClientDetails";
import InvoiceItems from "./components/InvoiceItems";
import InvoicePreview from "./components/InvoicePreview";

export default function App() {
  const [company, setCompany] = useState({
    name: "",
    address: "",
    taxId: "",
    email: "",
    mobile: "",
    logo: ""
  });

  const [client, setClient] = useState({
    name: "",
    address: "",
    email: ""
  });

  const [items, setItems] = useState([{ desc: "", qty: 1, rate: 0 }]);
  const taxRate = 18;

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="min-h-screen">

        <div className="max-w-5xl mx-auto p-6 space-y-6">

          <CompanyDetails company={company} setCompany={setCompany} />
          <ClientDetails client={client} setClient={setClient} />
          <InvoiceItems items={items} setItems={setItems} />
          <InvoicePreview
            company={company}
            client={client}
            items={items}
            taxRate={taxRate}
          />
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; 2026 Invoify. All rights reserved.
      </footer>
    </div>
  );
}
