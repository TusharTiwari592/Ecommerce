import React ,{useEffect} from 'react'



function Cart(){
  
  function toSwitch(e){
       
  }

 let  localCart = JSON.parse(localStorage.getItem("yourcart"))

  const DisplayProducts = ()=>{
    return (
      localCart.map((ele)=>{
        return <div>
          <h1>{ele.productN}</h1>
          <h2>{ele.productP*ele.productQuntity}</h2>
         </div>
     }))
    }
  return(
    <div className='cart'>
      <div>
        <h1>your cart</h1>
        <DisplayProducts/>     
      </div>
        <button value={false} onClick={toSwitch}>DarkMode</button>
    </div>
  )
}

export default Cart