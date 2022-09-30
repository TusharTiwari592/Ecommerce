import React from 'react'
import { useState ,useEffect} from 'react'
import Cart from "./Cart"


function Ecommerce(props) {
    // const cartItems = localStorage.getItem('yourcart')
    let [cart , setcart] = useState([]);
    console.log(cart)
    console.log(localStorage)

function getData(productname , productprice){
    
    let existAlready = false;
    if (cart.length >0){
      let productExist = cart.map((cartitem)=>cartitem.productN)
            existAlready =productExist.includes(productname) 
        ? productExist.lastIndexOf(productname)
        : false;
    
      
      existAlready===false ? addtocart(productname , productprice) : updatecart(existAlready);
    }
    else{
        addtocart(productname , productprice)
    }
}
    function addtocart(productname ,productprice){
        let firstadd ={
            productN : productname  ,
            productP : productprice ,
            productQuntity :1,
        }
        setcart([...cart , firstadd])
        console.log(cart)
        localStorage.setItem("yourcart", JSON.stringify(cart))
    }
    
   const updatecart = (count)=>{
    cart[count].productQuntity = cart[count].productQuntity+1 
    setcart([...cart])
    localStorage.setItem("yourcart", JSON.stringify(cart))
   }
   
   
   function Getproducts(){
       return props.products.map((product , index)=>{
           return(
               <div key={index} className='product'>
                <h3>{product.name}</h3>
                <img src={product.image} alt="" />
                <h3>{product.price}</h3>
                <p>{product.cardec}</p>
                <button  onClick={()=> getData(product.name , product.price)}>Add to cart</button>
            </div> 
        )
    })
 } 

  localStorage.setItem("yourcart", JSON.stringify(cart))
  
 
  return (
    <div>
        <aside>
            
            <Cart />
            
            <button onClick={() => localStorage.clear()}>
                clear cart
            </button>
        </aside>
        <section>
            <div className='products'>
                <Getproducts/>
            </div>
            
        </section>
    </div>
  )
}
 
export default Ecommerce