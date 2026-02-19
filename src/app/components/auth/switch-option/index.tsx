import React from 'react'

const SwitchOption = ({
  isPassword,
  setIsPassword,
}: {
  isPassword: boolean
  setIsPassword: any
}) => {
  return (
    <div className='mx-auto mb-8 flex flex-col items-center justify-center gap-3 rounded-lg border border-dark/10 bg-dark/5 p-2 md:flex-row '>
      <button
        className={`w-full rounded-lg border px-6 py-3 transition-all duration-300 hover:text-white hover:bg-dark ${!isPassword && 'bg-dark text-white'
          }`}
        onClick={() => setIsPassword(false)}>
        Magic Link
      </button>
      <button
        className={`w-full rounded-lg border px-6 py-3 transition-all duration-300 hover:text-white hover:bg-dark ${isPassword && 'bg-dark text-white'
          }`}
        onClick={() => setIsPassword(true)}>
        Password
      </button>
    </div>
  )
}

export default SwitchOption
