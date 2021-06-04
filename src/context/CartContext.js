import React,{useState,createContext} from 'react'


export const CartContext = createContext()

export default function CartProvider(props) {


    const [inCartitems, setCartItems] = useState([])
    const [message, setMessage] = useState('')

    const addToCart = (item,selectedColor) => {
        const copyCart = [...inCartitems]

        const index = copyCart.findIndex( itm => itm.id == item.id && itm.selectedColor == selectedColor)
        if(index===-1){
            const animal = {...item,selectedColor}
            setCartItems([...inCartitems,animal])
            setMessage('')
        }else{
            setMessage('This variant is already in cart.')
        }
    }


    const deleteFromCart = (item) => {
        const copyCart = [...inCartitems]
        const removeCart = copyCart.filter( itm => {
            if(itm.id===item.id){
                return itm.selectedColor != item.selectedColor ? true : false
            }else{
                return true
            }
        })
        setCartItems([...removeCart])
    }

    const inCartItemQty = inCartitems.length

    const inCartTotalPrice = inCartitems.reduce(
        (sum,e) => parseInt(sum) + parseInt(e.price) ,0
    )

    return (
        <CartContext.Provider value={{
            ...props,
            message,
            inCartitems,
            inCartItemQty,
            inCartTotalPrice,
            addToCart,
            deleteFromCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
