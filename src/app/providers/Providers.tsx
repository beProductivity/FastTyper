'use client'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect, ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return <ThemeProvider>{children}</ThemeProvider>
}
