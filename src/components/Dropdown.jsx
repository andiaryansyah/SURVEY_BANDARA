import React from 'react'

const Dropdown = ({title, defaultOption, Options, value, onChange}) => {
  

  return (
    <>
        <label className="block mt-4">
                <span className="block text-slate-700 mb-1"><b>{title}</b> (Wajib diisi)</span>
                <div className="inline-block relative w-full">
                  <select value={value ? value : defaultOption} onChange={onChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 focus:ring-blue-500 focus:border-blue-700 px-4 py-2 pr-8 rounded focus:outline-none focus:shadow-outline" >
                  <option disabled selected value={defaultOption}>{defaultOption}</option>
                {Options.map((option, index) => (
                    <option key={index}>{option}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </label>
    </>
  )
}

export default Dropdown