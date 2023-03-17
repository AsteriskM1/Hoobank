import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-5 px-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button