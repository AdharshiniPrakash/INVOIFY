import html2pdf from 'html2pdf.js';

function InvoicePreview({ company, client, items, taxRate }) {
  const subtotal = items.reduce((s, i) => s + i.qty * i.rate, 0);
  subtotal.toFixed(2);
  const tax = (subtotal * taxRate) / 100;
  const total = (subtotal + tax).toFixed(2);
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
    >
      <div id="element-to-print" className='hidden md:block bg-[#fff] p-[20mm] w-[210mm] min-h-[297mm] shadow-none overflow-visible'>
        <div className="mb-4 flex items-center justify-between flex-col md:flex-row space-x-4 gap-5">
          <div className='pr-8'>
            <h2
              className="text-2xl font-bold mb-2"
            >
              {company.name || "Company Name"}
            </h2>
            <p>{company.address}</p>
            <p className='italic'>{company.email}</p>
            <p>{company.mobile}</p>
            <p className="font-semibold">Tax ID: {company.taxId}</p>
          </div>
          <div>
            {company.logo && (
              <img
                src={company.logo}
                alt="Company Logo"
                className="h-48 w-48 object-contain"
              />
            )}
          </div>
        </div>

        <div className="my-4">
          <h3 className="font-semibold border-b border-[#aaa]">Bill To</h3>
          <br />
          <p>{client.name}</p>
          <p className='text-[#444] w-[80%]'>{client.address}</p>
          <p className='text-[#444] italic'>{client.email}</p>
        </div>

        <table className="table-fixed w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 w-3/6">Description</th>
              <th className='w-1/6'>Qty</th>
              <th className='w-1/6'>Rate</th>
              <th className="text-right w-1/6">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2 w-3/6">{i.desc}</td>
                <td className="text-center w-1/6">{i.qty}</td>
                <td className="text-right w-1/6">₹ {i.rate}</td>
                <td className="text-right w-1/6">₹ {i.qty * i.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-7 text-right space-y-1">
          <p>Subtotal: ₹ {subtotal}</p>
          <p>Tax ({taxRate}%): ₹ {tax}</p>
          <p className="text-xl font-bold">Total: ₹ {total}</p>
        </div>

        <div className='mt-7 h-8 w-full text-[#aaa] border-t border-[#aaa] italic text-md text-center'>Powered by Invoify</div>
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