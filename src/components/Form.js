import React, {useState} from 'react'


const Form = ({formData, setFormData}) => {
  const [isEmpty, setIsEmpty] = useState(
    {
      nameIsEmpty: false,
      cardNumIsEmpty: false,
      mmIsEmpty: false,
      yyIsEmpty: false,
      cvcNumIsEmpty: false
    }
  )
  const [isWrong, setIsWrong] = useState(
    {
      nameIsWrong: false,
      cardNumIsWrong: false,
      mmIsWrong: false,
      yyIsWrong: false,
      cvcNumIsWrong: false
    }
  )

  const [isCorret, setIsCorrect] = useState(
    {
      nameIsCorret: false,
      cardNumIsCorret: false,
      mmIsCorret: false,
      yyIsCorret: false,
      cvcNumIsCorret: false
    }
  )

  function handleChange(event) {
      const {name, value} = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name] : value
          }
      })
  }
  


  function handleSubmit(event){
    event.preventDefault()
    //////////////////////////form validation
    // card name
    let regexCardName = /^[a-zA-Z_ ]+$/g   
    if (regexCardName.test(formData.CardName)) {
      setIsEmpty(prevData => {return{ ...prevData,nameIsEmpty: false}});
      setIsWrong(prevData => {return{ ...prevData,nameIsWrong: false}});
      setIsCorrect(prevData => {return{ ...prevData,nameIsCorret: true}});
    }else if(formData.CardName===""){
      setIsEmpty(prevData => {return{ ...prevData,nameIsEmpty: true}});
      setIsWrong(prevData => {return{ ...prevData,nameIsWrong: false}});
      setIsCorrect(prevData => {return{ ...prevData,nameIsCorret: false}});
    }else{
      setIsWrong(prevData => {return{ ...prevData,nameIsWrong: true}});
      setIsEmpty(prevData => {return{ ...prevData,nameIsEmpty: false}});
      setIsCorrect(prevData => {return{ ...prevData,nameIsCorret: false}});
    }
    /////
    // card number
    let regexCardnum = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
    if (regexCardnum.test(formData.CardNumber)) {
      setIsEmpty(prevData => {return{ ...prevData,cardNumIsEmpty: false}});
      setIsWrong(prevData => {return{ ...prevData,cardNumIsWrong: false}}); 
      setIsCorrect(prevData => {return{ ...prevData,cardNumIsCorret: true}});
    }else if(formData.CardNumber===""){
      setIsEmpty(prevData => {return{ ...prevData,cardNumIsEmpty: true}});
      setIsWrong(prevData => {return{ ...prevData,cardNumIsWrong: false}});
      setIsCorrect(prevData => {return{ ...prevData,cardNumIsCorret: false}});
    }else{
      setIsWrong(prevData => {return{ ...prevData,cardNumIsWrong: true}});
      setIsEmpty(prevData => {return{ ...prevData,cardNumIsEmpty: false}});
      setIsCorrect(prevData => {return{ ...prevData,cardNumIsCorret: false}});
    }
    /////////
    // MM
    let regexMM = /0[1-9]|1[0-2]/
    if (regexMM.test(formData.MM)) {
      setIsEmpty(prevData => {return{ ...prevData,mmIsEmpty: false}});
      setIsWrong(prevData => {return{ ...prevData,mmIsWrong: false}}); 
      setIsCorrect(prevData => {return{ ...prevData,mmIsCorret: true}});
    }else if(formData.MM===""){
      setIsEmpty(prevData => {return{ ...prevData,mmIsEmpty: true}});
      setIsWrong(prevData => {return{ ...prevData,mmIsWrong: false}}); 
      setIsCorrect(prevData => {return{ ...prevData,mmIsCorret: false}});
    }else{
      setIsWrong(prevData => {return{ ...prevData,mmIsWrong: true}});
      setIsEmpty(prevData => {return{ ...prevData,mmIsEmpty: false}});
      setIsCorrect(prevData => {return{ ...prevData,mmIsCorret: false}});
    }
    //
    // YY
    let regexYY = /\b(22|23|24|25|26|27|28|29|30|31|32|33|34|35|36)\b/
    if (regexYY.test(formData.YY)) {
      setIsEmpty(prevData => {return{ ...prevData,yyIsEmpty: false}});
      setIsWrong(prevData => {return{ ...prevData,yyIsWrong: false}});
      setIsCorrect(prevData => {return{ ...prevData,yyIsCorret: true}});
    }else if(formData.YY===""){
      setIsEmpty(prevData => {return{ ...prevData,yyIsEmpty: true}});
      setIsWrong(prevData => {return{ ...prevData,yyIsWrong: false}}); 
      setIsCorrect(prevData => {return{ ...prevData,yyIsCorret: false}});
    }else{
      setIsWrong(prevData => {return{ ...prevData,yyIsWrong: true}});
      setIsEmpty(prevData => {return{ ...prevData,yyIsEmpty: false}});
      setIsCorrect(prevData => {return{ ...prevData,yyIsCorret: false}});
    }
    //
    // cvc 
    let regexCvc = /^\d{3}$/
    if (regexCvc.test(formData.CVC)) {
      setIsEmpty(prevData => {return{ ...prevData,cvcNumIsEmpty: false}});
      setIsWrong(prevData => {return{ ...prevData,cvcNumIsWrong: false}});
      setIsCorrect(prevData => {return{ ...prevData,cvcNumIsCorret: true}});
    }else if(formData.CVC===""){
      setIsEmpty(prevData => {return{ ...prevData,cvcNumIsEmpty: true}});
      setIsWrong(prevData => {return{ ...prevData,cvcNumIsWrong: false}}); 
      setIsCorrect(prevData => {return{ ...prevData,cvcNumIsCorret: false}});
  
    }else{
      setIsWrong(prevData => {return{ ...prevData,cvcNumIsWrong: true}});
      setIsEmpty(prevData => {return{ ...prevData,cvcNumIsEmpty: false}});
      setIsCorrect(prevData => {return{ ...prevData,cvcNumIsCorret: false}});
    }
    //
    ///////////////////////////////////////////////////////
  }

  function refreshPage(){
    window.location.reload(false);
  }

  function errorBorderForcardName(){
    setIsEmpty(prevData => {return{ ...prevData,nameIsEmpty: false}});
    setIsWrong(prevData => {return{ ...prevData,nameIsWrong: false}});
  }
  function errorBorderForcardNumber(){
    setIsEmpty(prevData => {return{ ...prevData,cardNumIsEmpty: false}});
    setIsWrong(prevData => {return{ ...prevData,cardNumIsWrong: false}});
  }
  function errorBorderForcardMM(){
    setIsEmpty(prevData => {return{ ...prevData,mmIsEmpty: false}});
    setIsWrong(prevData => {return{ ...prevData,mmIsWrong: false}}); 
  }
  function errorBorderForcardYY(){
    setIsEmpty(prevData => {return{ ...prevData,yyIsEmpty: false}});
    setIsWrong(prevData => {return{ ...prevData,yyIsWrong: false}});
  }
  function errorBorderForcardCVC(){
    setIsEmpty(prevData => {return{ ...prevData,cvcNumIsEmpty: false}});
    setIsWrong(prevData => {return{ ...prevData,cvcNumIsWrong: false}});
  }

  return (
    <>
    {isCorret.nameIsCorret & isCorret.cardNumIsCorret & isCorret.mmIsCorret  & isCorret.yyIsCorret & isCorret.cvcNumIsCorret?
    <div className='secondPart__submit-div'>
      <img src='images/icon-complete.svg'></img>
      <h2>Thank you!</h2>
      <h3>We've added your card details</h3>
      <button onClick={refreshPage}> Continue</button>
    </div>: 
    <form onSubmit={handleSubmit}>
        <div className='secondPart__form--child'>
          <label htmlFor='Cardholder-Name' >Cardholder Name</label>
          <input 
            onClick={errorBorderForcardName}
            className={isEmpty.nameIsEmpty || isWrong.nameIsWrong ?"redBorder": ""}
            type="text" 
            id='Cardholder-Name' 
            name='CardName'
            value={formData.CardName}
            placeholder='e.g. Jane Appleseed'
            onChange={handleChange}
            maxLength={30}
          />
          {isEmpty.nameIsEmpty &&<p>Can't be blank</p>}
          {isWrong.nameIsWrong &&<p className='big-p'>Wrong format, latters only</p>}
        </div>
        <div className='secondPart__form--child'>
          <label htmlFor='Card-Number' >Card Number</label>
          <input 
            onClick={errorBorderForcardNumber}
            className={isEmpty.cardNumIsEmpty || isWrong.cardNumIsWrong ?"redBorder": ""}
            type="tel" 
            id='Card-Number' 
            name='CardNumber'
            value={formData.CardNumber}
            placeholder="e.g. 1234 5678 9123 0000" 
            onChange={handleChange}
            maxLength={19}
          />
          {isEmpty.cardNumIsEmpty &&<p>Can't be blank</p>}
          {isWrong.cardNumIsWrong &&<p className='big-p'>Wrong format, numbers only</p>}
        </div>
        

        <div className='secondPart__form--child-row'>
        <div>
          <label htmlFor='MM/YY' >Exp. Date (MM/YY)</label>
          <div >
            <div>
              <input 
                onClick={errorBorderForcardMM}
                className={isEmpty.mmIsEmpty || isWrong.mmIsWrong ?"redBorder": ""}
                type="tel" 
                id="MM" 
                name='MM'
                value={formData.MM}
                placeholder="MM" 
                allowed-pattern="[0-9]" 
                maxLength="2" 
                onChange={handleChange}
              />
              {isEmpty.mmIsEmpty &&<p>Can't be blank</p>}
              {isWrong.mmIsWrong &&<p>Wrong format, numbers only</p>}
            </div>
           <div>
            <input 
                onClick={errorBorderForcardYY}
                className={isEmpty.yyIsEmpty || isWrong.yyIsWrong ?"redBorder": ""}
                type="tel" 
                id="YY" 
                name='YY'
                value={formData.YY}
                placeholder="YY" 
                allowed-pattern="[0-9]" 
                maxLength="2" 
                onChange={handleChange}
              />
              {isEmpty.yyIsEmpty &&<p>Can't be blank</p>}
              {isWrong.yyIsWrong &&<p>Wrong format, numbers only</p>}
            </div>
          </div>
        </div>
          <div className='cvc-class--div'>
            <label htmlFor='CVC' >CVC</label>
            <div className='cvc-class'>
            <input 
              onClick={errorBorderForcardCVC}
              className={isEmpty.cvcNumIsEmpty || isWrong.cvcNumIsWrong ?"redBorder": ""}
              id='CVC'
              placeholder='e.g. 123'
              name='CVC'
              value={formData.CVC}
              type="tel" 
              maxLength={3} 
              onChange={handleChange}
            />
            </div>
            {isEmpty.cvcNumIsEmpty &&<p>Can't be blank</p>}
            {isWrong.cvcNumIsWrong &&<p>Wrong format, numbers only</p>}
          </div>
        </div>
        <div className='secondPart__form--child'>
          <button>Confirm</button>
        </div>
    </form>
    }
    </>
  )
}

export default Form


