'use client'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect, ReactNode } from 'react'
import SupaBaseProvider from './supabaseProvider'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux/store';

interface ProvidersProps {
    children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
    <ThemeProvider>
         <SupaBaseProvider> 
            <ReduxProvider store={store}> 
            {children}
            </ReduxProvider>
        </SupaBaseProvider>
    </ThemeProvider>
    )
}
