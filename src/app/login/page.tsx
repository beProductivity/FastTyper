'use client'
import { useState } from 'react';
import EmailAuth from '@/supabase/auth/EmailAuth';
import SocialAuth from '@/supabase/auth/SocialAuth';
import { useRouter } from 'next/router';
export default function Home() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const LoginUser =  () => {
    const emailAuthClient = new EmailAuth(login as string, password as string)
    emailAuthClient.login();
  }

  const LoginByDiscord = () => {
    const discordAuthClient = new SocialAuth(login as string, password as string)
   
    discordAuthClient.discord();
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
  