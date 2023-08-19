'use client'
import { useState } from 'react';
import EmailAuth from '@/supabase/auth/EmailAuth';
import SocialAuth from '@/supabase/auth/SocialAuth';
import { useRouter } from 'next/router';
import "./login.scss";

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
      <main>
        <div className='shape'>
          <div className='wrapper'>
            <div className="content">
              <div className="content__login">
                <div className="content__login--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3ZM3 9.61811V19H21V9.61853L12 14.1185L3 9.61811ZM3 7.38199L12 11.8825L21 7.38247V5H3V7.38199Z" fill="black"/>
                  </svg>
                </div>
                  <input className="content__login--input">
                </input>
              </div>
              <div className="content__password">
                <div className="content__password--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3ZM3 9.61811V19H21V9.61853L12 14.1185L3 9.61811ZM3 7.38199L12 11.8825L21 7.38247V5H3V7.38199Z" fill="black"/>
                  </svg>
                </div>
                <input className="content__password--input">
                </input>
                <div className="content__password--locker">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3ZM3 9.61811V19H21V9.61853L12 14.1185L3 9.61811ZM3 7.38199L12 11.8825L21 7.38247V5H3V7.38199Z" fill="black"/>
                  </svg>
                </div>
              </div>
          </div>
        </div>   
        </div>
        <div className='bg-image'>
        </div>
               

        {/* <img src="./chad.jpg" alt="" /> */}
        {/* Strona Logowania! <br/>
        Login
        <input type={'text'} value={login} onChange={(event)=> setLogin(event.target.value)}/>
        <br/>
        Password
        <input type={'password'} value={password} onChange={(event)=> setPassword(event.target.value)}/>
        <br/>
        <button onClick={LoginUser}>Login</button> <br/>

        <button onClick={LoginByDiscord}>DISCORD</button> */}
      </main>
    )
  }
  