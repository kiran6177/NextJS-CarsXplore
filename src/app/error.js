"use client"
import React, { useEffect } from 'react'

function error({error,reset}) {

  useEffect(()=>{
    console.log("Error",error);
  },[error])

  return (
    <div>
      <h2>ERROR</h2>
    </div>
  )
}

export default error
