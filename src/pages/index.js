import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [count, setCount] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = text.slice(32);
    const endpoint = "/api/youtube";
    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/text",
      },

      body: data,
    };
    const response = await fetch(endpoint, options);
    console.log(response);
    const result = await response.json();
    setCount("Subscriber count :" + result.subscribers);
  };

  return (
    <div
      className="container card"
      style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <form action="/api/youtube" onSubmit={handleSubmit} method="post">
        <label htmlFor="first">profile Link:</label>
        <input
          type="text"
          id="first"
          onChange={handleChange}
          value={text}
          name="Enter profile Link"
          required
        />

        <button type="submit">Submit</button>
      </form>

      <p style={{ color: "black" }}>{count}</p>
    </div>
  );
}
