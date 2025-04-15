import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { AddGroup } from '../../features/groupSlice';
export default function AddGroupModal({ onClose }) {
  const [groupName,setGroupName]=useState('')
  const dispatch=useDispatch()
  const AddGroupSubmit=(e)=>{
      e.preventDefault();
      if (groupName.trim() === '') {
        alert("Group name is valid")
        return;
      }
     dispatch(AddGroup(groupName));
     setGroupName("")
     onClose()
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative transform transition-all">
        {/* Close button in the top-right corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <AiOutlineClose size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add New Group</h2>

        {/* Input field for group name */}
        <form onSubmit={AddGroupSubmit}>
          <div className="mb-6">
            <input
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow placeholder:text-gray-400"
              placeholder="Enter group name"
              type="text"
              value={groupName}
              onChange={(e) => {
                setGroupName(e.target.value);
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => onClose()}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}