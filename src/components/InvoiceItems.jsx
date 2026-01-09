import { useEffect } from "react";

export default function InvoiceItems({ items, setItems }) {

  const addItem = () => {
    if(items.length >= 20) {
      alert("Maximum of 20 items allowed");
      return;
    }
    let lastItem = items[items.length - 1];
    if(lastItem && (lastItem.desc.trim() === "" || lastItem.rate <= 0)) {
      alert("Please fill the previous item before adding a new one");
      document.getElementsByClassName('description-input')[items.length - 1]?.focus();
      return;
    }
    setItems([...items, { desc: "", qty: 1, rate: 0 }]);
  }

  const updateItem = (i, key, value) => {
    if(key === "desc" && value.length == 0) {
      alert("Description cannot be empty");
      return;
    }
    if(key === "rate" && value == 0) {
      alert("Provide a valid rate");
      return;
    }
    if(key === "qty" || key === "rate") {
      if(value < 0) value = 0;
    }
    if(key === "desc") {
      value = value.slice(0, 100);
    }
    const updated = [...items];
    updated[i][key] = value;
    setItems(updated);
  };

  const removeItem = i => {
    setItems(items.filter((_, index) => index !== i));
  };

  const clearItems = () => {
    if(window.confirm("Are you sure you want to clear all items?")) {
      setItems([]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-lg mb-3">Invoice Items</h3>
       <div className="grid grid-cols-12 gap-2 items-center my-2 text-base text-gray-600">
        <span className="col-span-5">Description</span>
        <span className="col-span-2">Qty</span>
        <span className="col-span-2">Rate</span>
        <span className="col-span-2 text-right">Amount</span>
        <span className="col-span-1"></span>
       </div>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-2 items-center"
          >
            <input
              type="text"
              className="input col-span-5 border text-indent-1 p-1 rounded-sm text-md description-input"
              placeholder="Description"
              maxLength={80}
              value={item.desc}
              onChange={e => updateItem(i, "desc", e.target.value)}
            />

            <input
              type="number"
              className="input col-span-2 border text-indent-1 p-1 rounded-sm text-md"
              value={item.qty}
              max={1000000}
              onChange={e => updateItem(i, "qty", +e.target.value)}
            />

            <input
              type="number"
              className="input col-span-2 border text-indent-1 p-1 rounded-sm text-md"
              value={item.rate}
              max={1000000000}
              onChange={e => updateItem(i, "rate", +e.target.value)}
            />

            <span className="col-span-2 text-right font-medium">
              ₹ {item.qty * item.rate}
            </span>

            <button
              onClick={() => removeItem(i)}
              className="text-red-500 font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3">

          <button
            onClick={addItem}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
            >
            + Add Item
          </button>
          <button
            onClick={clearItems}
            className="mt-4 px-4 py-2 bg-slate-600 text-white rounded"
            >
            Clear all
          </button>
        </div>
    </div>
  );
}
