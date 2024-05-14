'use client';

import React from "react";

export default function Home() {

  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [code, setCode] = React.useState("");
  const [problems, setProblems] = React.useState<any[]>([]);
  
  async function handleSubmit(event: { preventDefault: () => void; }) {
    setName("");
    setTitle("");
    setCode("");
    event.preventDefault();
    let data = {
      name,
      title,
      code
    }
    await fetch("http://localhost:3000/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    handleProblems(event);
  }

  async function handleProblems(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/api", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
    setProblems(await response.json());

  }

  return (
    <main className="h-screen">
      <form className="flex flex-col items-center p">
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
        <button className="bg-blue-500 text-white p-2 rounded-lg mt-10" onClick={handleProblems}>
          Fetch Problems
        </button>
      </form>
      <div className="flex flex-col items-center p pt-10">
        {
          problems.map(problem => {
            return (
              <div className="text-black">
                <p>Name: {problem.name}, Title: {problem.title}, Code: {problem.code}</p>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}
