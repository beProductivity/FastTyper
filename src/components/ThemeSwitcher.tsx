"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState<boolean>(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        console.log(theme)
    }, [theme])

    useEffect(() => {
        console.log(resolvedTheme)
    }, [resolvedTheme])

    if (!mounted) {
        return null
    }

    return (
        <div>
            <span>Current theme: {theme}</span> <br/>
            <button onClick={() => setTheme('dark')}>Dark</button>
            <button onClick={() => setTheme('light')}>Light</button>
        </div>
    )
}

export default ThemeSwitcher
