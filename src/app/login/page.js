import React from 'react'
import { signIn } from "../auth"
function login() {
 async function loginn(){
    "use server"
    await signIn("google", {redirectTo: "/alluser"})
 }
  return (
    <div>
      <form action={loginn}>
       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>signIn</button>
      </form>
    </div>
  )
}

export default login
