// Check the word is Palimdrome?//

import axios from "axios";
import { AddUser } from "./RTK/Services/AuthSlice";
import Cookies from "js-cookie";
import { useFakeLoginMutation, useGetSingleUserQuery } from "./RTK/API/FakeAuth";
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

const [fakeLogin] = useFakeLoginMutation()
const dispatch = useDispatch()
const LoginHandler = async(e,userData,email,password,name,avatar)=>{
  
  try{

      e.preventDefault();
      const user ={
      
       email,
       password,
      
      };

     dispatch(AddUser(user))
     
  }catch(error){
  }
}





const SignupHandler = async(e,name,email,password,password_confirmation,setNewAcc,newAcc,avatar,setErr)=>{

    try{
      e.preventDefault();

      const body = {
        name,
        email,
        password,
        avatar
      }
      const res = await fakeLogin(body)
        if(res?.error?.data?.message){
          setErr(res?.error?.data?.message)
        }
        if (res?.data) {
          Cookies.set('LID',res?.data?.id)
          setNewAcc(!newAcc)
          
        }
      

    }catch (error){
    }
}
const User = useGetSingleUserQuery()

const isAuth = () =>{
  const uDa = Cookies.get('ID')
let userData
  uDa ? (userData = JSON.parse(uDa)):(
    userData
  )



  const Rdata = User?.data
  let is = false;
  const Dd = Rdata?.filter(data => data?.email === userData?.email )
  const Ds = Dd?.filter(data=> data?.password === userData?.password)
  const Fds = Ds?.find(data => data)

  Fds?.email ? (
    is=true
  ):(
    is=false
  )
  

  return {is}
}



  return (
    { secondLargestNumber,
      isPalimdrome,
      fakeStoreLogin,
      LoginHandler,
      SignupHandler,
      arr ,
      isAuth
    }
  )
}
export default Function





