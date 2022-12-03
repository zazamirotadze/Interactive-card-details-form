import React from 'react'



const FirstPart = ({formData}) => {
  return (
    <div className='firstPart'>
      <div className='firstPart__image1--div'>
        <div className='firstPart__image1--div--big-circle'></div>
        <div className='firstPart__image1--div--small-circle'></div>
        <div className='firstPart__image1--div--card-number'>
          {formData.CardNumber?formData.CardNumber:<>0000 0000 0000 0000</>}
        </div>
        <div className='firstPart__image1--div--card-name'>
          {formData.CardName?formData.CardName:<>Jane Appleseed</>}
        </div>
        <div className='firstPart__image1--div--MM'>{formData.MM?formData.MM:<>00</>}/</div>
        <div className='firstPart__image1--div--YY'>{formData.YY?formData.YY:<>00</>}</div>
        <img src="images/bg-card-front.png"></img>
      </div>
      <div className='firstPart__image2--div'>
        <div className='firstPart__image2--div-cvc'>{formData.CVC?formData.CVC:<>000</>}</div>
        <img src="images/bg-card-back.png"></img>  
      </div>
    </div>
  )
}

export default FirstPart

