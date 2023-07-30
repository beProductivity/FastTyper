import "../app/globals.scss";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "next-themes";

export default function Index() {
    
    return  (
        <ThemeProvider>
            <p>test</p>
            <ThemeSwitcher />
        </ThemeProvider> 
        )
    
}