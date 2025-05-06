"use client"
import React, { useState, useEffect } from 'react'
function AddUser() {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState("")
    const [userInp, setUserInp] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        try {
            const res = await fetch("http://localhost:3000/user")
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }
    
    async function AddUser() {
        setIsSubmitting(true)
        try {
            await fetch("http://localhost:3000/user", {
                method: "POST",
                body: JSON.stringify({ name: userInp, email: email }), 
                headers: {
                    "Content-Type": "application/json"
                }
            })
            await getUser()
            setUserInp("")
            setEmail("")
            setSuccessMessage("User added successfully!")
            setTimeout(() => setSuccessMessage(""), 3000)
        } catch (error) {
            console.error("Error adding user:", error)
        } finally {
            setIsSubmitting(false)
        }
    }
 
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                        <h2 className="text-2xl font-bold text-white">Add New User</h2>
                        <p className="text-blue-100 mt-1">Enter user details below</p>
                    </div>
                    
                    <div className="p-6">
                        {successMessage && (
                            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                                {successMessage}
                            </div>
                        )}
                        
                        <form onSubmit={(e) => {e.preventDefault(); AddUser();}} className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                    Username
                                </label>
                                <input 
                                    id="username"
                                    value={userInp} 
                                    onChange={(e) => { setUserInp(e.target.value) }} 
                                    type="text" 
                                    placeholder="Enter user name" 
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input 
                                    id="email"
                                    value={email} 
                                    onChange={(e) => { setEmail(e.target.value) }} 
                                    type="email" 
                                    placeholder="Enter user email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Creating...' : 'Create User'}
                            </button>
                        </form>
                        
                        {users.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900 mb-3">Existing Users</h3>
                                <div className="border rounded-md overflow-hidden">
                                    <ul className="divide-y divide-gray-200">
                                        {users.map((user) => (
                                            <li key={user.id} className="px-4 py-3 hover:bg-gray-50">
                                                <p className="font-medium text-gray-800">{user.name}</p>
                                                <p className="text-sm text-gray-500">{user.email}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
    
        </div>
    )
}

export default AddUser
