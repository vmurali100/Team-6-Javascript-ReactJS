import React from 'react'

export default function Popular() {
    const getpopular=async()=>{
        const api=await fetch("https://api.spoonacular.com/recipes/random")
        const data=await api.json();
    }
  return (
    <div>popular</div>
  )
}
