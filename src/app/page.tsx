"use client"
import { useEffect } from 'react';
import RotatingSquareCanvas from '@/components/3d/Keyboard3d';
import "./page.module.scss";

export default function Home() {

  useEffect(() => {

  }, [])

  return (
    <>
      <main className='test'>
        <h1>test</h1>
      </main>
      <RotatingSquareCanvas widthPercent={100} heightPercent={40}/>
    </>
  )
}
