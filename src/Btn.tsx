import React from 'react'

interface BtnProps {
    title: string;
    color: string;
    type: "button" | "submit" | "reset";
}

const Btn = ({title, color, type}: BtnProps) => {
  return (
    <button type={type} style={{color}}>{title}</button>
  )
}

export default Btn