import React, { useState , useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import FooterSiparis from "./FooterSiparis";
import "../Form.css";
import FormInputs from "./FormInputs";
import ErrorsDivs from "./ErrorsDivs";

const malzemeler = [
  "Beyaz Peynir",
  "Brokoli",
  "Cheddar Peyniri",
  "Domates",
  "Extra Mozeralla",
  "Biber",
  "Kapya Biber",
  "Jalepeno Biber",
  "Füme Kaburga",
  "Kavurma",
  "Kekik",
  "Kırmızı Köz Biber",
  "Küp Sucuk",
  "Mantar",
  "Mısır",
  "Parmesan Peyniri",
  "Pastırma",
  "Patlıcan",
  "Pul Biber",
  "Salam",
  "Siyah Zeytin",
  "Soğan",
  "Sosis",
  "Susam",
  "Şerit Sosis",
  "Tavuk Parçaları",
  "Ton Balığı",
];


const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "isim en az 2 karakter olmalıdır" )
    .required("Please Enter Name"),
  adres: yup
    .string()
    .min(2, "Your Adres must be more than 2 letters")
    .required("Please Enter Adress"),
  selectFood: yup.mixed().oneOf(["", "klasikPizza" , "ekoSucukluPizza" , "margaritaPizza", "4PeynirliPizza", "barbekuPizza", "kebap"]),
  pizzaBoyut: yup.mixed().oneOf(["kucukBoy" , "ortaBoy", "buyukBoy", "battalBoy"]),
  ekMalzeme: yup.mixed().oneOf([malzemeler]),
  ekstraInput: yup.string(),
  siparisAdet: yup.number().min(1, "Must be more than 1"),
});

function Form() {
  const [gelenDataYeniSiparis, setGelenDataYeniSiparis] = useState();
  const [gelenDataEkMalzemeler, setGelenDataEkMalzemeler] = useState();
  
  const [checkboxForm, setCheckboxForm] = useState({
    ekMalzeme: [],
  });
  
  const [formData, setFormData] = useState({
    name: "",
    adres: "",
    selectFood: "",
    pizzaBoyut: "",
    ekstraInput: "",
    siparisAdet: 0,
  });

  const [checkErrors, setCheckErrors] = useState({
    ekMalzeme: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    adres: "",
    selectFood: "",
    pizzaBoyut: "",
    ekstraInput: "",
    siparisAdet: "",
  });

  const checkFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setCheckErrors({
          ...checkErrors,
          [name]: "",
        });
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setCheckErrors({
          ...checkErrors,
          [name]: err.errors[0],
        });
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
    };


  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const yeniCheckbox = { ekMalzeme: checkboxForm.ekMalzeme };

    const yeniSiparis = {
      name: formData.name,
      adres: formData.adres,
      selectFood: formData.selectFood,
      pizzaBoyut: formData.pizzaBoyut,
      ekstraInput: formData.ekstraInput,
      siparisAdet: formData.siparisAdet,
    };

    axios
      .post("https://reqres.in/api/orders", { yeniCheckbox, yeniSiparis} )
      .then((res) => {
        console.log("Sipariş Detayları : " , res.data.yeniSiparis);
        console.log("Pizza İçin Ek Malzemeler : " ,res.data.yeniCheckbox.ekMalzeme);
        console.log("İsim Soyisim : " , res.data.yeniSiparis.name);
        console.log("Adres : " , res.data.yeniSiparis.adres);
        console.log("Pizza Seçiniz : " , res.data.yeniSiparis.selectFood);
        console.log("Pizza Boyutu : " , res.data.yeniSiparis.pizzaBoyut);
        console.log("Ekstra Notlar : " , res.data.yeniSiparis.ekstraInput);
        console.log("Sipariş Adeti : " , res.data.yeniSiparis.siparisAdet);
        console.log(yeniCheckbox.ekMalzeme.map((index, key) => (

          ` ${key+1}.Ek Malzeme : ${index} `
        )
         ));
        setGelenDataYeniSiparis(res.data.yeniSiparis);
        setGelenDataEkMalzemeler(res.data.yeniCheckbox);
        setCheckboxForm({
          ekMalzeme: [],
        });
        setFormData({
          name: "",
          adres: "",
          selectFood: "",
          pizzaBoyut: "",
          ekstraInput: "",
          siparisAdet: 0,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeCheckbox = (event) => {
    const { value, checked, name } = event.target;
    const { ekMalzeme } = checkboxForm;
    // console.log(`${value} is ${checked}`);
    if (checked) {
      setCheckboxForm({
        [name]: [...ekMalzeme, value],
      });
    }
  };

  const handleChangeWithoutCheckbox = (event) => {
    const { name, value } = event.target;
    checkFormErrors(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div className="container-form">
        <h2>Siparişinizi Oluşturun</h2>
        <br />
        <br />
       <ErrorsDivs errors={errors} />
        <form onSubmit={handleSubmit} id="pizza-form">
          <FormInputs disabled={disabled} handleChangeCheckbox={handleChangeCheckbox} handleChangeWithoutCheckbox={handleChangeWithoutCheckbox} malzemeler={malzemeler} formData= {formData} />
        </form>
        <div>
          {gelenDataYeniSiparis && (
            <div className="alertSiparis" >
              <p>Sipariş Başarı İle Alındı</p>
            </div>
          )}
        </div>
        {/* <div>
        {gelenDataYeniSiparis && (
          <div className="data">
            <div>
              <p>
                <b>İsim </b>
              </p>
              <p id="name-data"> {gelenDataYeniSiparis.name}</p>
            </div>
            <div>
              <p>
                <b>Adres </b>
              </p>
              <p id="adres-data">{gelenDataYeniSiparis.adres}</p>
            </div>
            <div>
              <p>
                <b>Pizza Boyut</b>
              </p>
              <p id="pizzaBoyut-data">{gelenDataYeniSiparis.pizzaBoyut}</p>
            </div>
            <div>
              <p>
                <b>selectFood </b>
              </p>
              <p id="selectFood-data">{gelenDataYeniSiparis.selectFood}</p>
            </div>
            <div>
              <p>
                <b>Adet </b>
              </p>
              <p id="siparisAdet-data">{gelenDataYeniSiparis.siparisAdet}</p>
            </div>
            <div>
              <p>
                <b>Ek Malzemeler </b>
              </p>
              <p>
                {gelenDataEkMalzemeler && (
                  <div>
                    {gelenDataEkMalzemeler.ekMalzeme.map((index, key) => (
                      <div id="ekMalzemeler-data" key={key}>
                        {key + 1}.Ek Malzeme : {index}
                      </div>
                    ))}
                  </div>
                )}
              </p>
            </div>
          </div>
        )}
      </div> */}
      </div>
      <FooterSiparis />
    </>
  );
}

export default Form;

//
