"use client"
import { useEffect } from 'react';
import * as THREE from 'three'
import ThreeScene from '@/components/3d/ThreeScene';

export default function Home() {

  useEffect(() => {

  }, [])

  return (
    <main className='test'>
      <ThreeScene />
      Hello!
    </main>
  )
}
