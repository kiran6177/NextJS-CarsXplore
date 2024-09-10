"use client"
import React from 'react'

const CustomButton = ({title,styles,clickHandler}) => {
  return (
    <button className={styles}>
      {title}
    </button>
  )
}

export default CustomButton
