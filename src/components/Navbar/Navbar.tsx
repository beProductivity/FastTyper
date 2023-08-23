"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import './navbar.scss';

export default function Navbar()
{   
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const SwitchTheme = () => {
        if(theme == "dark")
        {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }
    return(
        <nav className="navbar">
            <p className="text">FastTyper</p>
            <button onClick={SwitchTheme}> Switch Theme</button>
            <button className="log-in"> 
                Log in
            </button>
        </nav>
    )
}