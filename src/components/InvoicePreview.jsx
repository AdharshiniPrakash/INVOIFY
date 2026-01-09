import html2pdf from 'html2pdf.js';

function InvoicePreview({ company, client, items, taxRate }) {
  const subtotal = items.reduce((s, i) => s + i.qty * i.rate, 0);
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax;
  const date = new Date().toISOString().split('T').join('-');

  const exportPdf = () => {
    var element = document.getElementById('element-to-print');

    const options = {
      margin: 0, 
      filename: `invoice-${date}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 3,             
        useCORS: true,        
        logging: false,
        letterRendering: true,
        windowWidth: 794,     
      },
      jsPDF: {
        unit: 'mm',           
        format: 'a4',
        orientation: 'portrait'
      }
    };

    html2pdf().set(options).from(element).save();
  };

  const printPdf = () => {
    const element = document.getElementById('element-to-print');

    const options = {
      margin: 0, 
      filename: `invoice-${date}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 3,             
        useCORS: true,        
        logging: false,
        letterRendering: true,
        windowWidth: 794,     
      },
      jsPDF: {
        unit: 'mm',           
        format: 'a4',
        orientation: 'portrait'
      }
    };

    html2pdf().set(options).from(element).toPdf().get('pdf').then((pdf) => {

      pdf.autoPrint();
      window.open(pdf.output('bloburl'), '_blank');
    });
  };

  return (
    <div
      className="bg-white rounded-xl shadow p-6 border-2"
      style={{ borderColor: company.primaryColor }}
    >
      <div id="element-to-print" className='hidden md:block bg-white p-[20mm] w-[210mm] min-h-[297mm] shadow-none overflow-visible'>
        <div className="mb-4 flex items-center justify-between flex-col md:flex-row space-x-4">
          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: company.primaryColor }}
            >
              {company.name || "Company Name"}
            </h2>
            <p>{company.address}</p>
            <p>{company.email}</p>
            <p>{company.mobile}</p>
            <p className="font-semibold">Tax ID: {company.taxId}</p>
          </div>
          <div>
            {company.logo && (
              <img
                src={company.logo}
                alt="Company Logo"
                className="h-24 w-24 object-contain"
              />
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Bill To</h4>
          <p>{client.name}</p>
          <p>{client.address}</p>
          <p>{client.email}</p>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Description</th>
              <th>Qty</th>
              <th>Rate</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2">{i.desc}</td>
                <td className="text-center">{i.qty}</td>
                <td className="text-center">₹ {i.rate}</td>
                <td className="text-right">₹ {i.qty * i.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 text-right space-y-1">
          <p>Subtotal: ₹ {subtotal}</p>
          <p>Tax ({taxRate}%): ₹ {tax}</p>
          <p className="text-xl font-bold">Total: ₹ {total}</p>
        </div>

        <div className='mt-5 h-8 w-full text-[#aaa] border-t border-[#aaa] italic text-md text-center'>Powered by Invoify</div>
      </div>

      <div className="md:hidden text-slate-500 text-center font-semibold mb-2 text-lg"> Invoice preview is not enabled for mobile devices </div>
      {
        items.length === 0 && (
          <div className="flex justify-end gap-4">
            <button
              disabled
              className="mt-4 px-4 py-2 bg-gray-300 rounded cursor-not-allowed"
            >
              Save as PDF
            </button>

            <button
              disabled
              className="print:hidden mt-4 px-4 py-2 bg-gray-300 rounded cursor-not-allowed"
            >
              Print Invoice
            </button>
          </div>
        )
      }
      {
        items.length > 0 && (
          <div className="flex justify-end gap-4">
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded cursor-pointer"
              onClick={exportPdf}
            >
              Save as PDF
            </button>

            <button
              onClick={printPdf}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white p-2 rounded cursor-pointer"
            >
              Print Invoice
            </button>
          </div>
        )
      }

    </div>
  );
}

export default InvoicePreview;