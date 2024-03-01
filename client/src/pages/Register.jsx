import { useState } from "react"

export const Register = () => { 
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });

  const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,

      [name]:value,

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
  }


  return (
    <div>
      <div>
        <p>Some Image</p>
      </div>

      <div>
        <h1>Registration Form</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text"
                name="username"
                placeholder="username" 
                id="username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />

              <label htmlFor="email">Email</label>
              <input type="email"
                name="email"
                placeholder="email" 
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />

              <label htmlFor="phone">Phone no.</label>
              <input type="number"
                name="phone"
                placeholder="phone no." 
                id="phone"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />

              <label htmlFor="passwprd">Password</label>
              <input type="password"
                name="password"
                placeholder="password" 
                id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />

            </div>

            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}
