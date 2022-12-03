import React, {useState} from 'react'
import SecondPart from './SecondPart'
import FirstPart from './FirstPart'


const Page = () => {

  const [formData, setFormData] = useState(
      {
        CardName:"",
        MM: "",
        YY:"",
        CardNumber:"",
        CVC:"" 
      }
  )


  return (
    <>
      <div className='page'>
          <FirstPart formData={formData}/> 
          <SecondPart
            formData={formData}
            setFormData={setFormData}
          />
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Zaza Mirotadze</a>.
      </div>
    </>
  )
}

export default Page