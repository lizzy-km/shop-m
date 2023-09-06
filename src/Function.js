// Check the word is Palimdrome?//

import axios from "axios";
import { AddUser } from "./RTK/Services/AuthSlice";
import Cookies from "js-cookie";
import { useContactMutation, useLoginMutation, useRegisterMutation } from "./RTK/API/Auth";
import { useFakeLoginMutation } from "./RTK/API/FakeAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Function =()=>{
  const userData = useSelector(state => state.AuthSlice.user)

  const arr = [
    {
      id:'1'
    },
    {
      id:'1'
    },
    {
      id:'1'
    },
    {
      id:'1'
    },
    {
      id:'1'
    },
    {
      id:'1'
    },{
      id:'1'
    },
    {
      id:'1'
    },
    {
      id:'1'
    },
    {
      id:'1'
    },
    {
      id:'1'
    },
    {
      id:'1'
    },
  ]
  

  const isPalimdrome =(word)=>{
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

const [login] = useLoginMutation()
const [fakeLogin] = useFakeLoginMutation()
const navigate = useNavigate()
const dispatch = useDispatch()

const LoginHandler = async(e,userData,email,password,name,avatar)=>{
  
  try{

      e.preventDefault();
      const user ={
      
       email,
       password,
      
      };

      const {data} = await login(user);
      const error = await login(user);
     
       if (data?.success) {
        Cookies.set('User',data?.token)

        const body = {
          name,
          email,
          password,
          avatar
        }
        const res = await fakeLogin(body)
        console.log(res?.error?.data?.message);
          if(res?.error?.data?.message){
            setErr(res?.error?.data?.message)
          }
          if (res?.data) {
            dispatch(AddUser(res?.data))
            
          }
        setNewAcc(!newAcc)
        
      }


  }catch(error){
  }
}

const [signup] = useRegisterMutation()


const SignupHandler = async(e,name,email,password,password_confirmation,setNewAcc,newAcc,avatar,setErr)=>{

    try{
      e.preventDefault();

      const user = {
        name,
        email,
        password,
        password_confirmation
      };

      const {data} = await signup(user);
      const {error} = await signup(user);
      console.log(error);
      if (error) {
        setErr(error?.data?.errors)
        
      }
      if (data?.success) {

       LoginHandler(e,userData,email,password,name,avatar)
        setNewAcc(!newAcc)
        
      }

    }catch (error){
    }
}



  return (
    { secondLargestNumber,
      isPalimdrome,
      fakeStoreLogin,
      LoginHandler,
      SignupHandler,
      arr 
    }
  )
}
export default Function





