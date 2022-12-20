import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Veggi() {
  const [veggi, setveggi] = useState([]);
  useEffect(() => {
    getveggi();
  }, []);
  const getveggi = async () => {
    const api = await fetch("http://localhost:3000/data")
    const data = await api.json();
    setpopular(data.receipes)
    console.log(data)
  }
  return (
    <div>
      {veggi.map((receipe) => {
        return (
          <div key={receipe.id}>
            <P>{receipe.title}</P>
          </div>
        )
      })}
    </div>
  )
}
