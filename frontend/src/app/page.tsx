'use client';

import React from "react";

export default function Home() {

  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [code, setCode] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  async function handleSubmit(event: { preventDefault: () => void; }) {
    setName("");
    setTitle("");
    setCode("");
    setFeedback("");
    event.preventDefault();

    let data = {
      "user_id": "92352",
      "language_version": {
        "language": "python",
        "version": "3.10"
      },
      "files": [
        {
          "path": "template.py",
          "content": code
        }
      ],
      "problem_id": "640aef269dec6b02d871efd8"
    }

    await fetch("http://localhost:3000/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(feedback => {
        setFeedback(feedback);
      })
      .catch(e => {
        setFeedback("Sorry, there was an error. Please try again!");
        console.log(e);
      })
      ;
  }

  return (
    <main className="h-screen">
      <form className="flex flex-col items-center">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-lg mt-10 text-black"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-lg mt-10 text-black"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-lg mt-10 pt-20 text-black truncate"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></input>
        <button className="bg-blue-500 text-white p-2 rounded-lg mt-10" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="flex flex-col items-center mt-10">
        <p className="text-black">{feedback}</p>
      </div>
    </main>
  );
}
