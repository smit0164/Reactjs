import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeAddGroupModal,
  openAddGroupModal,
  openAddExpenseModal,
  closeAddExpenseModal,
} from '../features/modal/modalSlice';
import AddGroupModal from './modals/AddGroupModal';
import AddExpenseModal from './modals/AddExpenseModal';
import { deleteExpense } from '../features/expenseSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const showAddGroupModal = useSelector((state) => state.modal.showAddGroupModal);
  const showAddExpenseModal = useSelector((state) => state.modal.showAddExpenseModal);
  const getGroup = useSelector((state) => state.group.group);
  const getExpense = useSelector((state) => state.expense.expense);

  return (
    <div className="p-6 bg-gray-100 min-h-screen max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">💸 Expense Tracker</h1>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => dispatch(openAddGroupModal())}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium"
        >
          + Add Group
        </button>
        {showAddGroupModal && (
          <AddGroupModal onClose={() => dispatch(closeAddGroupModal())} />
        )}

        <button
          onClick={() => dispatch(openAddExpenseModal())}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium"
        >
          + Add Expense
        </button>
        {showAddExpenseModal && (
          <AddExpenseModal onClose={() => dispatch(closeAddExpenseModal())} />
        )}
      </div>

      {/* Groups List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">📁 Groups</h2>
        {getGroup.length === 0 ? (
          <p className="text-gray-500 italic">No groups added yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-2">
          {getGroup.map((group) => (
            <div
              key={group.id}
              className="w-24 h-24 bg-white rounded-lg shadow hover:shadow-md transition flex flex-col items-center justify-center"
            >
              <h3 className="text-sm font-medium text-gray-800 truncate text-center">
                {group.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1 truncate">ID: {group.id}</p>
            </div>
          ))}
        </div>
        
        )}
      </div>

      {/* Expenses List */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">🧾 Expenses</h2>
        {getExpense.length === 0 ? (
          <p className="text-gray-500 italic">No expenses added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {getExpense.map((expense) => (
              <div
                key={expense.id}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">{expense.title}</h3>
                  <span className="text-green-600 font-bold text-sm">
                    ₹ {expense.amount}
                  </span>
                </div>
                <p className="text-sm text-gray-500">Date: {expense.date}</p>
                <p className="text-sm text-gray-500 mb-2">Group ID: {expense.groupId}</p>

                <button
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                  onClick={() => dispatch(deleteExpense(expense.id))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
