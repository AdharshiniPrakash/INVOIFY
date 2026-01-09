import { useState } from "react";

export default function CompanyDetails({ company, setCompany }) {
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const validateLogo = e => {

    const file = e.target.files[0]; // Get the actual file object

    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (file && !validTypes.includes(file.type)) {
      alert("Please select a valid image file (jpg, jpeg, png)");
      return;
    }
    if (file && file.size > 2 * 1024 * 1024) {
      alert("File size should be less than 2MB");
      return;
    }

    if (previewUrl) URL.revokeObjectURL(previewUrl);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setCompany({ ...company, logo: url });
    }

  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-semibold text-lg"
      >
        Company Details
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="text-left text-gray-500 text-sm">Your Business information (shown on invoice & PDF)</div>
      )}
      {open && (
        <div className="flex flex-row flex-wrap mt-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-base font-medium" htmlFor="company-name"> Company Name </label>
            <input
              id="company-name"
              type="text"
              maxLength={60}
              className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
              placeholder="Name"
              value={company.name}
              onChange={e => setCompany({ ...company, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-base font-medium" htmlFor="company-address"> Company Address </label>
            <input
              id="company-address"
              type="text"
              maxLength={80}
              className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
              placeholder="Address"
              value={company.address}
              onChange={e => setCompany({ ...company, address: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-base font-medium" htmlFor="company-taxid"> Tax ID </label>
            <input
              id="company-taxid"
              type="text"
              className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
              placeholder="Tax ID"
              value={company.taxId}
              onChange={e => setCompany({ ...company, taxId: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-base font-medium" htmlFor="company-email"> Email </label>
            <input
              id="company-email"
              type="email"
              className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
              placeholder="Email"
              value={company.email}
              onChange={e => setCompany({ ...company, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-base font-medium" htmlFor="company-mobile"> Mobile Number </label>
            <input
              id="company-mobile"
              type="text"
              className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
              placeholder="Mobile"
              value={company.mobile}
              onChange={e => setCompany({ ...company, mobile: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-base font-medium" htmlFor="company-logo"> Company Logo </label>
            <input
              id="company-logo"
              type="file"
              className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
              placeholder="Logo"
              onChange={e => validateLogo(e)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
