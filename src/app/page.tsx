"use client"
import { useEffect } from 'react';
import RotatingSquareCanvas from '@/components/3d/Keyboard3d';
import "./page.scss";
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

  })
  const router = useRouter();
  
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
      <main className='test'>
        <h1>test</h1>
        <button onClick={() => router.push('/dashboard')}>  Dashboard </button>
      </main>
      {/* <RotatingSquareCanvas widthPercent={100} heightPercent={40} backgroundColor='#F0F0F0'/> */}
    </>
  )
}
