// Check the word is Palimdrome?//

import axios from "axios";
import { AddUser } from "./RTK/Services/AuthSlice";
import Cookies from "js-cookie";




function isPalimdrome (word){
    var letter = [];
    var Rword ='';
    let Result;
    for(var i = 0; i<word.length; i++){
        letter.push(word[i])
      }
      for(var i = 0; i<word.length; i++){
       Rword += letter.pop()
      }
      if(word === Rword) {
        console.log(word + 'is Palindrome')
      }else{
        console.log(word + ' is not Palindrome')
      }
}

//Check the word is Palimdrome?//

// find Second Largest Num in Array

const secondLargestNumber = (word)=>{
    const uniqueWord = Array.from(new Set(word));

    uniqueWord.sort((a,b)=>{
        return b-a;
    });

    if (uniqueWord.length >=2) {
        return uniqueWord[1]
    }else{
        return -1;
    }
}

const fakeStoreLogin = (email,name,pass,setFakeData)=>{
    const token = '4670|YJruWtMUezqugaMyItredXeTKephtz6Dq4SR1uUh'
    axios.post(`  https://contact-app.mmsdev.site/api/v1/contact`, {
        headers: {
            Authorization: `Bearer ${token}`,
          },
        body:JSON.stringify({
            name:name,
            phone: '09761723325',
            email: email,
            address:email
        })
      }).then((response) => {
        setFakeData(response)
      })
      .catch((error) => {
        console.log(error);
      });

            // return data
}

const LoginHandler = async(e,login,fakeLogin,userData,navigate,dispatch,email,password)=>{
  
  try{

      e.preventDefault();
      const user ={
      
       email,
       password,
      
      };

      const {data} = await login(user);
      const {error} = await login(user);


      if (data?.success) {
        navigate('/')
        Cookies.set('User',data?.token)
        const name = data?.user?.name
        const contact = {
          name:name,
          phone: '09761723325',
          email: email,
          address:email
        }
        const fData = await fakeLogin(contact)
       
        console.log(fData?.data?.contact);

        dispatch(AddUser(fData?.data?.contact))

        Cookies.set('ID',userData?.user?.id)
        
        



      }

  }catch(error){
      console.log(error);
  }
}

export { secondLargestNumber,isPalimdrome,fakeStoreLogin,LoginHandler }
