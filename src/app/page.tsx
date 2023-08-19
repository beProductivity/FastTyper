"use client"
// import { useEffect } from 'react';
import RotatingSquareCanvas from '@/components/3d/Keyboard3d';
import Image from 'next/image';
import "./page.scss";
// import SupabaseDB from '@/supabase/supabase';
// import EmailAuth from '@/supabase/auth/EmailAuth';
// import { useRouter } from 'next/navigation';
import SupabaseDB from '@/supabase/supabase';
import EmailAuth from '@/supabase/auth/EmailAuth';
import { useRouter } from 'next/navigation';
import generateArrayWithSum from '@/utils/GameEngine/GenerateNumbers';
import GenerateText from '@/utils/GameEngine/GenerateText';
import GenerateGameTextContent from '@/utils/GameEngine/GenerateGameTextContent';
import GameTextContentParams from '@/types/GameTextContentParams'; 
import GameTextContentLang from '@/types/Enums/GameTextContentLang';

export default function Home() {
  const { data: authListener } = SupabaseDB.auth.onAuthStateChange((event, session) => {


export default function Home() {
  // const { data: authListener } = SupabaseDB.auth.onAuthStateChange((event, session) => {

  // })
  // const router = useRouter();
  
  // useEffect(() => {
  //   const authClient = new EmailAuth('meduska@yopmail.com', '12345')
  //   authClient.login()
  // }, [])

  useEffect(() => {
    const params: GameTextContentParams = {
      lineAmount: 4,
      lineLength: 50,
      lang: GameTextContentLang.ENG
    }

    const engine = new GenerateGameTextContent(params)
    engine.generate().then((res) => {
      console.log(res)
    })
  }, [])

 

  return (
    <>
      <Image src={'/vector-topLeft.svg'} alt={'topRightVector'} width={100} height={100} className='top-left-vector'/>
      <Image src={'/vector-topRight.svg'} alt={'topRightVector'} width={100} height={100} className='top-right-vector'/>
      {/* <Image src={'/keyboard.svg'} alt={'keyboard'} width={100} height={100} className='keyboard'/> */}
      <button className='bottomlogin'>
        Log in
      </button>

      <button className='signup'>
        Sign up
      </button>

      <div className='text-top'>
        Learn to type fast
      </div>

      <div className='text-bottom'>
        |text more hoes!
      </div>

      <RotatingSquareCanvas widthPercent={100} heightPercent={40} backgroundColor='#1C1B22'/>

    </>
  )
}
