import axios from "axios"
import { useGetProductsQuery } from "../../RTK/API/FakeAuth"
import { useCallback, useEffect, useState } from "react"
import Cookies from "js-cookie"
import Category from "../Categories/Category"

const data = ()=> {

    const {data,isLoading} =  useGetProductsQuery()

    const products = data
    const[count,setCount] = useState(20)
    const [name,setName] = useState('')

    let Realproducts;
    let RealProducts;

    const catName = Cookies.get('CatName')

 

    const ImgData = async(id,title)=>{

        const imageUrl = `https://imagga.com/static/images/categorization/${title}.jpg`;
        const unCode = encodeURIComponent(imageUrl)
        const categorizer = 'general_v3';
        const key = {
                        username:"acc_64bebbba3f7d39b",
                        password:"25abd592b1c751fde28c5440453b8410" 
                    }

        const url = `https://api.imagga.com/v2/similar-images/${categorizer}/${id}?${imageUrl}=${unCode}`
        axios.get(url,key)
            .then((response) => {
              console.log(response);
                // setPage(response.data.contacts.last_page)
            })
            .catch((error) => {
              console.log(error);
            });
      
    }
    const filterProducts = ()=> {
       
        if (name === '') {
            Realproducts = data?.filter(item =>  item?.id <count)

        }
           
        
        return {
            Realproducts
        }

    }
    const filterProductsCat = ()=> {
       
       
        RealProducts = data?.filter(item =>  item?.category?.name === catName)

        
        
        return {
            RealProducts
        }

    }

   

    return(
        {
            products,
            ImgData,
            isLoading,
            filterProducts,
            setCount,
            count,
            setName,
            name,
            catName,
            filterProductsCat,
           
            
        }
    )
}
export default data


  