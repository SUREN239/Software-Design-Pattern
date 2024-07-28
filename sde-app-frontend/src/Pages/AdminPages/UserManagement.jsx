// UserManagement.js
import React, { useState } from 'react';
import { FaUserPlus, FaUserEdit, FaUserMinus } from 'react-icons/fa';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@staffscheduler.com', role: 'Academic Staff' },
    { id: 2, name: 'Jane Smith', email: 'jane@staffscheduler.com', role: 'Non-Academic Staff' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  const addUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', email: '', role: '' });
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? { ...user, ...updatedUser } : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">User Management</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border p-2 rounded"
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="">Select Role</option>
            <option value="Academic Staff">Academic Staff</option>
            <option value="Non-Academic Staff">Non-Academic Staff</option>
          </select>
          <button onClick={addUser} className="bg-green-500 text-white p-2 rounded flex items-center">
            <FaUserPlus className="mr-2" /> Add User
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">User List</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => updateUser(user.id, { name: 'Updated Name' })} className="text-blue-500 mr-2">
                    <FaUserEdit />
                  </button>
                  <button onClick={() => deleteUser(user.id)} className="text-red-500">
                    <FaUserMinus />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;