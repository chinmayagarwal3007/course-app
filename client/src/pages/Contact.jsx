import { useState } from "react";

export const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,

      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <div>some image</div>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            placeholder="Name"
            id="username"
            required
            autoComplete="off"
            value={user.name}
            onChange={handleChange}
          />

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

          <label htmlFor="message">message</label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            id="message"
            required
            autoComplete="off"
            value={user.message}
            onChange={handleChange}
            style={{
              resize: "vertical", // You can change this to "horizontal" if you want resizing only horizontally
              minHeight: "50px", // Set the minimum height of the textarea
              maxHeight: "200px", // Set the maximum height of the textarea
            }}
          />

          <button type="submit">Send messsage</button>
        </form>
      </div>
    </div>
  );
};
