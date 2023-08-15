"use client"
import { useEffect } from 'react';
import RotatingSquareCanvas from '@/components/3d/Keyboard3d';
import "./page.scss";
import SupaBaseClient from '@/supabase/supabase';
import EmailAuth from '@/supabase/supabaseProvider/EmailAuth';

export default function Home() {

  useEffect(() => {
    const authClient = new EmailAuth('meduska@yopmail.com', '12345')
    authClient.login()
  }, [])

  return (
    <>
      <main className='test'>
        <h1>test</h1>
      </main>
      {/* <RotatingSquareCanvas widthPercent={100} heightPercent={40} backgroundColor='#F0F0F0'/> */}
    </>
  )
}
