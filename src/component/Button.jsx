import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="active:scale-95 bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--textlight)] px-6 py-3 rounded  text-[0.78rem] font-bold uppercase">
      {text}
    </button>
  )
}

export default Button