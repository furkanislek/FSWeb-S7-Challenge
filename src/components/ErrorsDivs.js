import React from 'react'

function ErrorsDivs({errors}) {
  return (
    <>
     <div className="errors">
          <div id='errName'>{errors.name}</div>
          <div id='errAdress'>{errors.adres}</div>
          <div id="errSelectFood">{errors.selectFood}</div>
          <div id="errPizzaBoyut">{errors.pizzaBoyut}</div>
          <div id="errEkstraInput">{errors.ekstraInput}</div>
          <div id="errSiparisAdet">{errors.siparisAdet}</div>
        </div>
    </>
  )
}

export default ErrorsDivs