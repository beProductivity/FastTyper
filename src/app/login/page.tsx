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
          <div className="vector-layer">
            <div className="stain-one">
              <svg xmlns="http://www.w3.org/2000/svg" width="71" height="219" viewBox="0 0 71 219" fill="none">
                <path d="M30.0758 14.6558C39.4893 33.1015 34.1311 61.783 40.4077 80.4588C46.655 98.9959 64.5665 107.666 69.3429 119.266C73.9513 130.757 65.4246 145.178 55.3991 162.091C45.403 179.143 34.0173 198.519 15.5335 209.687C-3.08897 220.884 -28.5324 223.815 -35.783 207.375C-43.0335 190.935 -32.1206 154.987 -31.5862 134.287C-31.2198 113.478 -41.2613 107.778 -55.0798 90.4115C-68.9277 72.906 -86.414 43.7041 -82.5159 23.1609C-78.7564 2.64705 -53.4445 -9.0987 -28.5972 -10.7426C-3.74984 -12.3865 20.4943 -3.8992 30.0758 14.6558Z" fill="#4AE4A0"/>
              </svg>
            </div>
            <div className="stain-two">
              <svg xmlns="http://www.w3.org/2000/svg" width="336" height="168" viewBox="0 0 336 168" fill="none">
                <path d="M328.407 53.9327C343.854 87.4819 333.659 121.258 316.358 142.793C299.057 164.101 274.65 172.942 275.577 193.117C276.504 213.292 303.073 244.801 299.984 269.736C296.894 294.671 264.146 313.032 229.544 314.846C194.942 316.659 158.486 302.152 111.835 287.644C65.1838 273.136 8.33752 258.628 0.92278 233.92C-6.80091 209.438 35.2159 174.982 80.0133 162.061C124.811 149.14 172.698 157.754 198.34 126.472C224.292 95.1892 227.69 24.2371 249.934 5.42232C272.179 -13.3925 312.96 20.1568 328.407 53.9327Z" fill="#4AE4A0"/>
              </svg>
            </div>
          </div>
          <div className='wrapper'>
            <div className="content">
              <h1 className='content__heading'>
                Login in to your account
              </h1>
              <div className="content__login">
                <div className="content__login--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3ZM3 9.61811V19H21V9.61853L12 14.1185L3 9.61811ZM3 7.38199L12 11.8825L21 7.38247V5H3V7.38199Z" fill="black"/>
                  </svg>
                </div>
                  <input className="content__login--input" placeholder='Email'>
                </input>
              </div>
              <div className="content__password">
                <div className="content__password--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5V10.5H6C4.93165 10.5 4 11.2764 4 12.3333V20.6667C4 21.7236 4.93165 22.5 6 22.5H18C19.0684 22.5 20 21.7236 20 20.6667V12.3333C20 11.2764 19.0684 10.5 18 10.5H17V7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5ZM15 7.5V10.5H9V7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM6 20.5V12.5H18V20.5H6ZM13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5C12.5523 15.5 13 15.9477 13 16.5Z" fill="black"/>
                  </svg>
                </div>
                <input className="content__password--input" type='password' placeholder='Password'>
                </input>
                <div className="content__password--locker">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70713 1.79297L1.29292 3.20718L5.35774 7.272C4.97908 7.58582 4.60434 7.92283 4.23373 8.28123C3.40451 9.08312 2.65433 9.93923 1.99393 10.7957C1.59543 11.3125 1.3125 11.7191 1.15759 11.9613L0.812988 12.5001L1.15759 13.0389C1.3125 13.2811 1.59543 13.6876 1.99393 14.2045C2.65433 15.0609 3.40451 15.917 4.23373 16.7189C6.66434 19.0695 9.27247 20.5001 12 20.5001C13.7209 20.5001 15.3943 19.9306 17.0056 18.9198L21.2929 23.2072L22.7071 21.793L2.70713 1.79297ZM15.5447 17.4589L14.032 15.9463C13.4365 16.2981 12.7418 16.5001 12 16.5001C9.79088 16.5001 8.00002 14.7092 8.00002 12.5001C8.00002 11.7583 8.20195 11.0636 8.55384 10.4681L6.77974 8.69401C6.39235 9.00642 6.0068 9.3488 5.62406 9.71893C4.86986 10.4483 4.18241 11.2328 3.57777 12.017C3.44718 12.1863 3.32651 12.3479 3.21619 12.5001C3.32651 12.6523 3.44718 12.8138 3.57777 12.9832C4.18241 13.7674 4.86986 14.5519 5.62406 15.2812C7.71751 17.3057 9.89495 18.5001 12 18.5001C13.1682 18.5001 14.3586 18.1323 15.5447 17.4589ZM10.0678 11.982C10.0236 12.1473 10 12.3209 10 12.5001C10 13.6046 10.8955 14.5001 12 14.5001C12.1792 14.5001 12.3528 14.4765 12.5181 14.4323L10.0678 11.982ZM20.0981 16.391L18.6838 14.9768C19.318 14.3357 19.9009 13.6593 20.4223 12.9832C20.5529 12.8138 20.6735 12.6523 20.7839 12.5001C20.6735 12.3479 20.5529 12.1863 20.4223 12.017C19.8176 11.2328 19.1302 10.4483 18.376 9.71893C16.2825 7.69445 14.1051 6.50008 12 6.50008C11.4777 6.50008 10.951 6.5736 10.4221 6.71509L8.84017 5.13312C9.87262 4.72145 10.9271 4.50008 12 4.50008C14.7276 4.50008 17.3357 5.9307 19.7663 8.28123C20.5955 9.08312 21.3457 9.93923 22.0061 10.7957C22.4046 11.3125 22.6875 11.7191 22.8425 11.9613L23.1871 12.5001L22.8425 13.0389C22.6875 13.2811 22.4046 13.6876 22.0061 14.2045C21.4349 14.9452 20.7966 15.6857 20.0981 16.391Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div className="content__forgot-password">
                  <p>
                    Forgot <span>Password?</span>
                  </p>
              </div>
              <button className="content__login-btn">
                Log in
              </button>
              <div className="content__or">
                <span>
                  OR
                </span>
              </div>
              <div className="content__login-buttons">
                <button className="content__login-button">
                  Log in with Google
                </button>
                <button className="content__login-button">
                  Log in with Discord
                </button>
              </div>
              <div className="content__sign-in">
                <p>
                  Sign <span>In</span>
                </p>
              </div>
          </div>
        </div>   
        </div>
        <div className='bg-image'>
        </div>
      </main>
    )
  }
  