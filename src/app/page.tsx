"use client"
import { useEffect } from 'react';
import RotatingSquareCanvas from '@/components/3d/ThreeScene';
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
