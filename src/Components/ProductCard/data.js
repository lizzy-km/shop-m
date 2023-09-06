import axios from "axios"
import { useGetProductsQuery } from "../../RTK/API/FakeAuth"

const data = ()=> {

    const {data,isLoading} =  useGetProductsQuery()

    const products = data

    




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

    return(
        {
            products,
            ImgData,
            isLoading
        }
    )
}
export default data


  