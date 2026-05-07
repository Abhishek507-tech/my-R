import React from 'react'


const Login = () => {
  const [email, setEmail] = React.useState("") 
  const [password, setPassword] = React.useState("")

    const sumbitHandler = (e) => {
      e.preventDefault()
      console.log("email is",email )
      console.log("password is",password )

      setEmail("")
      setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center  justify-center'>

      <div className='border-2 rounded-xl border-emerald-600 p-20'>

        <form 
        onSubmit={(e) =>{
            sumbitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>

            <input 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required 
            className='outline-none border-2 border-emerald-500 rounded-full py-3 px-5 text-xl bg-transparent placeholder:text-gray-500  ' type="email" placeholder='Enter your email'/>

            <input 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required 
             className=' outline-none border-2 border-emerald-500 rounded-full py-3 px-5 text-xl bg-transparent mt-4 placeholder:text-gray-500  ' type="password" placeholder='Enter your password'/>

            <button   className='outline-none  border-2 bg-emerald-600 rounded-full border-none py-3 px-5 text-xl w-full mt-7 '>Log in </button>

        </form>
      </div>
    </div>
  )
}

export default Login
