"use client"
import { useEffect } from 'react';
import RotatingSquareCanvas from '@/components/3d/Keyboard3d';
import "./page.scss";
import SupabaseDB from '@/supabase/supabase';
import EmailAuth from '@/supabase/auth/EmailAuth';
import { useRouter } from 'next/navigation';
import generateArrayWithSum from '@/utils/GameEngine/GenerateNumbers';
import GenerateText from '@/utils/GameEngine/GenerateText';

export default function Home() {
  const { data: authListener } = SupabaseDB.auth.onAuthStateChange((event, session) => {

  })
  const router = useRouter();
  

  // useEffect(() => {
  //   const authClient = new EmailAuth('meduska@yopmail.com', '12345')
  //   authClient.login()
  // }, [])

  useEffect(() => {
    console.log(GenerateText())
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
