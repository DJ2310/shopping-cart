import axios from "axios";
import { createContext, useState} from "react"
import {toast} from "react-hot-toast"

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [loading , setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const[category,setCategory] = useState("all");

    const getProducts = async ()=>{
        setLoading(true);
        try{
            const result = await axios("https://fakestoreapi.com/products");
            setProducts(result.data);
        }catch(error){
            console.log(error);

        }
        setLoading(false);
    }

    const addToCart = (item) => {
        setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
                
            };
            return [...prevCartItems, { ...item, quantity: 1 }];
        });
        
        toast.success('Item Added to Cart!');
        
    };

    const removeFromCart = (id) => {
        setCartItems((prevCartItems) => 
            prevCartItems.filter(item => item.id !== id)
        );
        
        toast.error('Item removed from Cart!');
        
    };

    const incQuantity = (id) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        
        toast.success('Item Added to Cart!');
        
    };

    const getItemQuantity = (id) => {
        const item = cartItems.find(item => item.id === id);
        return item ? item.quantity : 0;
    };

    const decQuantity = (id) => {
        if(getItemQuantity(id)===1){
            removeFromCart(id)
        }
        setCartItems((prevCartItems) =>
            prevCartItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
        
        toast.error('Item removed from Cart!');
        
    };
    function getTotalItems(){
        var count = 0;
        cartItems.map((item)=>{
            count = count + item.quantity;
        })
        setTotalItems(count);
    }
    function getCartTotal(){
        var total = 0;
        cartItems.map((item)=>{
            total = total + (item.price)*(item.quantity);
        })
        setCartTotal(total);

    }
    const handleCategory = (event) => {
        setCategory(event.target.value);
      };

    

    const value ={
        loading ,
        setLoading,
        products,
        setProducts,
        getProducts,
        cartItems,
        setCartItems,
        totalItems,
        setTotalItems,
        cartTotal,
        setCartTotal,
        addToCart,
        removeFromCart,
        incQuantity,
        decQuantity,
        getTotalItems,
        getCartTotal,
        getItemQuantity,
        category,
        handleCategory

    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}