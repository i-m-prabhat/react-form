import { useState } from 'react'
import InputBox from './form-fields/InputBox'

function App() {
  const [values, setValues] = useState({
    username:"",
    email: "",
    password:"",
    confirmPassword:""
  })

  const formFields = [
    {
      id:1,
      name: "username",
      type:"text",
      placeholder: "Username",
      label: "Username"
    },
    {
      id:2,
      name: "email",
      type:"email",
      placeholder: "Email",
      label: "Email"
    },
    {
      id:3,
      name: "password",
      type:"password",
      placeholder: "Password",
      label: "Password"
    },
    {
      id:4,
      name: "confirmPassword",
      type:"password",
      placeholder: "Confirm Password",
      label: "Confirm Password"
    },
  ]

  const onChange= (e)=>{
setValues
  };
  return (
    <form autoComplete='off'>
    {formFields.map((field) => (
                <InputBox
                    key={field.id}
                    {...field}
                    // value={values[field.name]}
                    onChange={onChange}
                />
            ))}
    <button className='button'>Submit</button>
    </form>
  )
}

export default App
