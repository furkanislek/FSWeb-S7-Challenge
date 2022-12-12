import React from 'react'

function ErrorsDivs({errors}) {
  return (
    <>
     <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.adres}</div>
          <div>{errors.selectFood}</div>
          <div>{errors.pizzaBoyut}</div>
          <div>{errors.ekstraInput}</div>
          <div>{errors.siparisAdet}</div>
        </div>
    </>
  )
}

export default ErrorsDivs