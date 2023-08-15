'use client'
import { useState } from 'react';
import EmailAuth from '@/supabase/supabaseProvider/EmailAuth';


export default function Home() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const LoginUser =  () => {
    const authClient = new EmailAuth(login as string, password as string)
    console.log(login, password)
    authClient.login()
  }

  const LoginByDiscord = () => {
    const authClient = new EmailAuth(login as string, password as string)
   
    authClient.discord()
  }
    return (
      <main >
        Strona Logowania! <br/>
        Login
        <input type={'text'} value={login} onChange={(event)=> setLogin(event.target.value)}/>
        <br/>
        Password
        <input type={'password'} value={password} onChange={(event)=> setPassword(event.target.value)}/>
        <br/>
        <button onClick={LoginUser}>Login</button> <br/>

        <button onClick={LoginByDiscord}>DISCORD</button>
      </main>
    )
  }
  