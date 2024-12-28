"use client"
import { useState } from 'react';

export default function Counter() {
  
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleAgeChange() {
    setAge(age + 1);
    if (typeof window !== 'undefined') {
      localStorage.setItem('myCat2', 'Tom');
    }
  }

  if (typeof window !== 'undefined') {
    localStorage.setItem('myCat1', 'Tom');
  }

  return (
    <>
      <input
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleAgeChange}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  )
}
