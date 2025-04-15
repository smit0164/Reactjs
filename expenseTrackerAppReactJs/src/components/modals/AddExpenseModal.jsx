import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AddExpense } from '../../features/expenseSlice';
export default function AddExpenseModal({ onClose }) {
  const groups = useSelector((state) => state.group.group);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    groupId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can dispatch your action here to add the expense
    console.log('Form submitted:', formData);
    if (formData.title.trim() === '') {
      alert("Hey! you are forget to fill up somethings in the expense form")
      return;
    }
    dispatch(AddExpense(formData))
    // Reset form
    setFormData({
      title: '',
      amount: '',
      date: '',
      groupId: '',
    });
    onClose()
   
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <AiOutlineClose size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add New Expense</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="Expense Title"
              type="text"
            />
          </div>

          <div className="mb-4">
            <input
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="Amount"
              type="number"
              min="0"
              step="0.01"
            />
          </div>

          <div className="mb-4">
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
            />
          </div>

          <div className="mb-6">
            <select
              name="groupId"
              value={formData.groupId}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>Select a group</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
