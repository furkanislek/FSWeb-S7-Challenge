import React from 'react'

function FormInputs( {formData, handleChangeCheckbox, handleChangeWithoutCheckbox, malzemeler, disabled}) {
  return (
    <>
    <div className="iletisim">
            <div className="flexLabels">
              <br />
              <br />
              <label htmlFor="name-input" className="name-input">
                <b>İsim Soyisim </b>
              </label>
              <input
                type="text"
                className="label"
                id="name-input"
                name="name"
                value={formData.name}
                onChange={handleChangeWithoutCheckbox}
                placeholder="İsminizi Giriniz"
                autoComplete="off"
              />
              <br />
              <br />
            </div>

            {/* Adres */}
            <div className="flexLabels">
              <label htmlFor="adres-input" className="adres-input">
                <b>Adres </b>
              </label>
              <br />
              <input
                type="text"
                className="label"
                id="adres-input"
                name="adres"
                value={formData.adres}
                onChange={handleChangeWithoutCheckbox}
                placeholder="Enter your name"
                autoComplete="off"
              />
              <br />
              <br />
            </div>

            {/* Pizzanızı Seçin */}
            <div className="flexLabels">
              <label htmlFor="selectFood" className="selectFood">
                <b>Pizzanızı Seçin</b>
              </label>
              <br />
              <select
                className="selectOpt"
                name="selectFood"
                id="size-dropdown"
                onChange={handleChangeWithoutCheckbox}
                value={formData.selectFood}
              >
                <option value="">Seçiniz</option>
                <option value="klasikPizza">Klasik Pizza</option>
                <option value="ekoSucukluPizza">Eko Sucuklu Pizza</option>
                <option value="margaritaPizza">Margarita Pizza</option>
                <option value="4PeynirliPizza">4 Peynirli Pizza</option>
                <option value="barbekuPizza">Barbekü Tavuklu Pizza</option>
                <option value="kebap">Pepperoni Pizza</option>
              </select>

              <br />
              <br />
            </div>

            {/* Pizza Boyutu */}
            <div className="flexLabelsBoyut">
              <div>
                <b> Pizza Boyutunu Seçiniz</b>
              </div>
              <div className="boyutFlex">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="pizzaBoyut"
                      value="kucukBoy"
                      checked={formData.pizzaBoyut === "kucukBoy"}
                      onChange={handleChangeWithoutCheckbox}
                    />
                    Küçük Boy
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="radio"
                      name="pizzaBoyut"
                      value="ortaBoy"
                      onChange={handleChangeWithoutCheckbox}
                      checked={formData.pizzaBoyut === "ortaBoy"}
                    />
                    Orta Boy
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="radio"
                      name="pizzaBoyut"
                      value="buyukBoy"
                      onChange={handleChangeWithoutCheckbox}
                      checked={formData.pizzaBoyut === "buyukBoy"}
                    />
                    Büyük Boy
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="pizzaBoyut"
                      value="battalBoy"
                      onChange={handleChangeWithoutCheckbox}
                      checked={formData.pizzaBoyut === "battalBoy"}
                    />
                    Battal Boy
                  </label>
                </div>
              </div>
            </div>

            {/* Ek Malzemeler */}
            <div>
              <label>
                <b>Ek Malzemeler</b>
                <div className="ekMalzemelerDiv">
                  {malzemeler.map((index, key) => (
                    <div key={key}>
                      <label>
                        <input
                          type="checkbox"
                          name="ekMalzeme"
                          value={index}
                          onChange={handleChangeCheckbox}
                        />
                        {index}
                      </label>
                    </div>
                  ))}
                </div>
              </label>
            </div>

            {/* Notlarınızı Yazınız */}
            <div className="flexLabels flexLabelsEkstra">
              <br />
              <br />
              <label htmlFor="ekstra-input" className="eksta-input">
                <b>Ekstra Notlar</b>
              </label>

              <input
                className="label"
                type="text"
                placeholder="Ekstra Notlarınızı Yazınız"
                id="special-text"
                name="ekstraInput"
                value={formData.ekstraInput}
                onChange={handleChangeWithoutCheckbox}
              />
            </div>

            <div className="flexLabels">
              <label htmlFor="siparisAdet">
                <b>Sipariş Adedi</b>
              </label>
              <input
                className="label"
                type="number"
                id="siparisAdet"
                name="siparisAdet"
                placeholder="0"
                value={formData.siparisAdet}
                onChange={handleChangeWithoutCheckbox}
              />
            </div>

            <div>
              <input type="submit" id="submit" className="button" disabled={disabled} value="Siparişi Oluşturun">
        
              </input>
            </div>

            <div></div>
          </div>
    </>
  )
}

export default FormInputs