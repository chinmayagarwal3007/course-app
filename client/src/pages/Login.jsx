import { useState } from "react"

export const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
  let name = e.target.name;
  let value = e.target.value
    setUser({
    ...user,

    [name]:value
  })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <div>
        <p>some image</p>
      </div>

      <div>
        <h1>Login Form</h1>

        <div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="email"
              id="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input 
              type="password"
              name="password"
              placeholder="password"
              id="password"
              required
              autoComplete="off"
              value={user.password}  
              onChange={handleChange}
            />

          <button type="submit">Login</button>

          </form>
        </div>
      </div>
    </div>
  )
}
