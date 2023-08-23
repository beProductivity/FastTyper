'use client'
import { useState } from 'react';
import EmailAuth from '@/supabase/auth/EmailAuth';
import SocialAuth from '@/supabase/auth/SocialAuth';
import { useRouter } from 'next/router';
import "./register.scss";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [passwordVisibility, setPasswordVisibility] = useState<Boolean>(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<Boolean>(false);

  const LoginUser =  () => {
    // const emailAuthClient = new EmailAuth(login as string, password as string)
    // emailAuthClient.login();
  }

  const LoginByDiscord = () => {
    // const discordAuthClient = new SocialAuth(login as string, password as string)
   
    // discordAuthClient.discord();
  }
    return (
      <main>
        <div className='shape'>
        <svg className="decorationShape" id='decor2' width="336" height="315" viewBox="-170 0 336 315" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M170.407 -103.067C185.854 -69.5181 175.659 -35.7422 158.358 -14.2072C141.057 7.1011 116.65 15.9418 117.577 36.1167C118.504 56.2915 145.073 87.8006 141.984 112.736C138.894 137.671 106.146 156.032 71.5439 157.846C36.9418 159.659 0.485977 145.152 -46.1651 130.644C-92.8162 116.136 -149.662 101.628 -157.077 76.9198C-164.801 52.4379 -122.784 17.9819 -77.9867 5.06096C-33.1893 -7.86003 14.6976 0.753952 40.3402 -30.5284C66.2918 -61.8108 69.6902 -132.763 91.9344 -151.578C114.179 -170.392 154.96 -136.843 170.407 -103.067Z" fill="#4AE4A0"/>
</svg> 
          <div className='wrapper'>
            <div className="content">
              <h1 className='content__heading'>
                Create your account
              </h1>
              <div className="content__login">
                <div className="content__login--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3ZM3 9.61811V19H21V9.61853L12 14.1185L3 9.61811ZM3 7.38199L12 11.8825L21 7.38247V5H3V7.38199Z" fill="black"/>
                  </svg>
                </div>
                  <input className="content__login--input" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'>
                </input>
              </div>
              <div className="content__password">
                <div className="content__password--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5V10.5H6C4.93165 10.5 4 11.2764 4 12.3333V20.6667C4 21.7236 4.93165 22.5 6 22.5H18C19.0684 22.5 20 21.7236 20 20.6667V12.3333C20 11.2764 19.0684 10.5 18 10.5H17V7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5ZM15 7.5V10.5H9V7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM6 20.5V12.5H18V20.5H6ZM13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5C12.5523 15.5 13 15.9477 13 16.5Z" fill="black"/>
                  </svg>
                </div>
                <input className="content__password--input" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type={passwordVisibility ? "text" : "password"}>
                </input>
                <div className="content__password--locker" onClick={() => setPasswordVisibility(!passwordVisibility)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70713 1.79297L1.29292 3.20718L5.35774 7.272C4.97908 7.58582 4.60434 7.92283 4.23373 8.28123C3.40451 9.08312 2.65433 9.93923 1.99393 10.7957C1.59543 11.3125 1.3125 11.7191 1.15759 11.9613L0.812988 12.5001L1.15759 13.0389C1.3125 13.2811 1.59543 13.6876 1.99393 14.2045C2.65433 15.0609 3.40451 15.917 4.23373 16.7189C6.66434 19.0695 9.27247 20.5001 12 20.5001C13.7209 20.5001 15.3943 19.9306 17.0056 18.9198L21.2929 23.2072L22.7071 21.793L2.70713 1.79297ZM15.5447 17.4589L14.032 15.9463C13.4365 16.2981 12.7418 16.5001 12 16.5001C9.79088 16.5001 8.00002 14.7092 8.00002 12.5001C8.00002 11.7583 8.20195 11.0636 8.55384 10.4681L6.77974 8.69401C6.39235 9.00642 6.0068 9.3488 5.62406 9.71893C4.86986 10.4483 4.18241 11.2328 3.57777 12.017C3.44718 12.1863 3.32651 12.3479 3.21619 12.5001C3.32651 12.6523 3.44718 12.8138 3.57777 12.9832C4.18241 13.7674 4.86986 14.5519 5.62406 15.2812C7.71751 17.3057 9.89495 18.5001 12 18.5001C13.1682 18.5001 14.3586 18.1323 15.5447 17.4589ZM10.0678 11.982C10.0236 12.1473 10 12.3209 10 12.5001C10 13.6046 10.8955 14.5001 12 14.5001C12.1792 14.5001 12.3528 14.4765 12.5181 14.4323L10.0678 11.982ZM20.0981 16.391L18.6838 14.9768C19.318 14.3357 19.9009 13.6593 20.4223 12.9832C20.5529 12.8138 20.6735 12.6523 20.7839 12.5001C20.6735 12.3479 20.5529 12.1863 20.4223 12.017C19.8176 11.2328 19.1302 10.4483 18.376 9.71893C16.2825 7.69445 14.1051 6.50008 12 6.50008C11.4777 6.50008 10.951 6.5736 10.4221 6.71509L8.84017 5.13312C9.87262 4.72145 10.9271 4.50008 12 4.50008C14.7276 4.50008 17.3357 5.9307 19.7663 8.28123C20.5955 9.08312 21.3457 9.93923 22.0061 10.7957C22.4046 11.3125 22.6875 11.7191 22.8425 11.9613L23.1871 12.5001L22.8425 13.0389C22.6875 13.2811 22.4046 13.6876 22.0061 14.2045C21.4349 14.9452 20.7966 15.6857 20.0981 16.391Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div className="content__password">
                <div className="content__password--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5V10.5H6C4.93165 10.5 4 11.2764 4 12.3333V20.6667C4 21.7236 4.93165 22.5 6 22.5H18C19.0684 22.5 20 21.7236 20 20.6667V12.3333C20 11.2764 19.0684 10.5 18 10.5H17V7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5ZM15 7.5V10.5H9V7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM6 20.5V12.5H18V20.5H6ZM13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5C12.5523 15.5 13 15.9477 13 16.5Z" fill="black"/>
                  </svg>
                </div>
                <input className="content__password--input" placeholder='Repeat password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} type={confirmPasswordVisibility ? "text" : "password"}>
                </input>
                <div className="content__password--locker" onClick={() => setConfirmPasswordVisibility(!confirmPasswordVisibility)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70713 1.79297L1.29292 3.20718L5.35774 7.272C4.97908 7.58582 4.60434 7.92283 4.23373 8.28123C3.40451 9.08312 2.65433 9.93923 1.99393 10.7957C1.59543 11.3125 1.3125 11.7191 1.15759 11.9613L0.812988 12.5001L1.15759 13.0389C1.3125 13.2811 1.59543 13.6876 1.99393 14.2045C2.65433 15.0609 3.40451 15.917 4.23373 16.7189C6.66434 19.0695 9.27247 20.5001 12 20.5001C13.7209 20.5001 15.3943 19.9306 17.0056 18.9198L21.2929 23.2072L22.7071 21.793L2.70713 1.79297ZM15.5447 17.4589L14.032 15.9463C13.4365 16.2981 12.7418 16.5001 12 16.5001C9.79088 16.5001 8.00002 14.7092 8.00002 12.5001C8.00002 11.7583 8.20195 11.0636 8.55384 10.4681L6.77974 8.69401C6.39235 9.00642 6.0068 9.3488 5.62406 9.71893C4.86986 10.4483 4.18241 11.2328 3.57777 12.017C3.44718 12.1863 3.32651 12.3479 3.21619 12.5001C3.32651 12.6523 3.44718 12.8138 3.57777 12.9832C4.18241 13.7674 4.86986 14.5519 5.62406 15.2812C7.71751 17.3057 9.89495 18.5001 12 18.5001C13.1682 18.5001 14.3586 18.1323 15.5447 17.4589ZM10.0678 11.982C10.0236 12.1473 10 12.3209 10 12.5001C10 13.6046 10.8955 14.5001 12 14.5001C12.1792 14.5001 12.3528 14.4765 12.5181 14.4323L10.0678 11.982ZM20.0981 16.391L18.6838 14.9768C19.318 14.3357 19.9009 13.6593 20.4223 12.9832C20.5529 12.8138 20.6735 12.6523 20.7839 12.5001C20.6735 12.3479 20.5529 12.1863 20.4223 12.017C19.8176 11.2328 19.1302 10.4483 18.376 9.71893C16.2825 7.69445 14.1051 6.50008 12 6.50008C11.4777 6.50008 10.951 6.5736 10.4221 6.71509L8.84017 5.13312C9.87262 4.72145 10.9271 4.50008 12 4.50008C14.7276 4.50008 17.3357 5.9307 19.7663 8.28123C20.5955 9.08312 21.3457 9.93923 22.0061 10.7957C22.4046 11.3125 22.6875 11.7191 22.8425 11.9613L23.1871 12.5001L22.8425 13.0389C22.6875 13.2811 22.4046 13.6876 22.0061 14.2045C21.4349 14.9452 20.7966 15.6857 20.0981 16.391Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div className="content__forgot-password">
                  <p>
                    Need <span>Help?</span>
                  </p>
              </div>
              <button className="content__signup-btn">
                Sign up
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
                By clicking sign up you accept our <span>Privacy Policy</span>
                </p>
              </div>
          </div>
        </div>
        <svg className='decorationShape' id='decor1' width="114" height="111" viewBox="0 0 114 111" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M114.076 25.6558C123.489 44.1015 118.131 72.783 124.408 91.4588C130.655 109.996 148.567 118.666 153.343 130.266C157.951 141.757 149.425 156.178 139.399 173.091C129.403 190.143 118.017 209.519 99.5335 220.687C80.911 231.884 55.4676 234.815 48.217 218.375C40.9665 201.935 51.8794 165.987 52.4138 145.287C52.7802 124.478 42.7387 118.778 28.9202 101.411C15.0723 83.906 -2.41401 54.7041 1.48409 34.1609C5.24361 13.647 30.5555 1.9013 55.4028 0.257392C80.2502 -1.38652 104.494 7.1008 114.076 25.6558Z" fill="#4AE4A0"/>
</svg>    
        </div>
        <div className='bg-image'>
        </div>
      </main>
    )
  }
  