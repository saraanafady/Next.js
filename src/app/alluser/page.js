"use client"
import React, { useState, useEffect } from 'react'

function AllUser() {
    const [users, setUsers] = useState([])
    const [editMode, setEditMode] = useState(null)
    const [editName, setEditName] = useState("")
    const [editEmail, setEditEmail] = useState("")

    // Fetch users when component mounts
    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        try {
            const res = await fetch("http://localhost:3000/user")
            const data = await res.json()
            setUsers(data)
            console.log(data)
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }
    
    async function deleteUser(id) {
        try {
            await fetch(`http://localhost:3000/user/${id}`, {
                method: "DELETE",
            })
            getUser() 
        } catch (error) {
            console.error("Error deleting user:", error)
        }
    }
    
    // Update the updateUser function
    async function updateUser(id) {
        try {
            await fetch(`http://localhost:3000/user/${id}`, {
                method: "PUT",
                body: JSON.stringify({ 
                    name: editName, 
                    email: editEmail 
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            getUser() 
            setEditMode(null) 
            setEditName("")
            setEditEmail("")
        } catch (error) {
            console.error("Error updating user:", error)
        }
    }

    function startEdit(user) {
        setEditMode(user.id)
        setEditName(user.name)
        setEditEmail(user.email)
    }
    
    function cancelEdit() {
        setEditMode(null)
        setEditName("")
        setEditEmail("")
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Management System</h1>

            <div className="mb-4">
                <button 
                    onClick={getUser} 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                >
                    Refresh Users
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        {editMode === user.id ? (
                                            <input
                                                type="text"
                                                value={editName}
                                                onChange={(e) => setEditName(e.target.value)}
                                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                            />
                                        ) : (
                                            user.name
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        {editMode === user.id ? (
                                            <input
                                                type="email"
                                                value={editEmail}
                                                onChange={(e) => setEditEmail(e.target.value)}
                                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                            />
                                        ) : (
                                            user.email
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                        {editMode === user.id ? (
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => updateUser(user.id)}
                                                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded text-sm"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={cancelEdit}
                                                    className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-1 px-3 rounded text-sm"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => startEdit(user)}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-1 px-3 rounded text-sm"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => deleteUser(user.id)}
                                                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded text-sm"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUser