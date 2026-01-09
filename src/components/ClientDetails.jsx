export default function ClientDetails({ client, setClient }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-lg mb-3">Client Details</h3>

      <div className="text-left text-gray-500 text-sm">Client details to whom invoice is generated</div>

      <div className="flex flex-row flex-wrap mt-4">
        <div className="flex flex-col w-full md:w-1/2">
          <label className="text-base font-medium" htmlFor="client-name"> Client Name </label>
          <input
            id="client-name"
            type="text"
            maxLength={60}
            className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
            placeholder="Name"
            value={client.name}
            onChange={e => setClient({ ...client, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <label className="text-base font-medium" htmlFor="client-address"> Address </label>
          <input
            id="client-address"
            type="text"
            maxLength={80}
            className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
            placeholder="Address"
            value={client.address}
            onChange={e => setClient({ ...client, address: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <label className="text-base font-medium" htmlFor="client-email"> Email </label>
          <input
            id="client-email"
            type="email"
            className="input border p-2 rounded-sm indent-1 w-[90%] mt-2 mb-4"
            placeholder="Email"
            value={client.email}
            onChange={e => setClient({ ...client, email: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
