import React from 'react'
import Button from './Button'


const list = ["All" , "Gaming" , "News " , "Comedy", "Music","Live", "Roast" , "Eating", "Cars","Vlogs"];


const ButtonLists = () => {
 
  return (
    <div className='flex'>
  
    
      <Button name={"All"}/>
      <Button name={"Gaming"}/>
      <Button name={"News "}/>
      <Button name={"Comedy"}/>
      <Button name={"Music"}/>
      <Button name={"Live"}/>
      <Button name={"Roast"}/>
      <Button name={"Eating"}/>
      <Button name={"Vlog"}/>
      <Button name={"Cars"}/>
      
    </div>
  )
}

export default ButtonLists