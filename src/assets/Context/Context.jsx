import { createContext, useEffect, useState } from "react";
import { grocery_list } from "../data/Grocery.js";
import axios from "axios";
export const storeContext = createContext(null)

const StoreContextProvider = (props)=>{
    const [cartItems, setCartitems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [grocery_list, setGroceryList] = useState([]);



    const addtocart = async (itemId)=>{
        if(!cartItems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const removefromcart = async (itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    

    const getTotalcartvalue =()=>{
        let totalvalue=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = grocery_list.find((product)=>product._id===item);
                totalvalue += itemInfo.price * cartItems[item];
            }
        }
        return totalvalue;
    }
    const fetchGroceryList = async()=>{
        const response = await axios.get(url+"/api/product/list");
        setGroceryList(response.data.data)
    }

    const loadCartData = async(token)=>{
            const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
            setCartitems(response.data.cartData);
    }

    useEffect(()=>{
        async function loadData(){
            await fetchGroceryList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue ={
        grocery_list,
        cartItems,
        setCartitems,
        addtocart,
        removefromcart,
        getTotalcartvalue,
        url,
        token,
        setToken
    }
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}
export default StoreContextProvider