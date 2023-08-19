import { iSupaBaseProvider } from "@/types/ProviderTypes"
import { useEffect, useState } from "react"
import SupabaseDB from "@/supabase/supabase";
import { useRouter, usePathname  } from "next/navigation";
import { get } from "http";
export default function SupaBaseProvider({ children }:iSupaBaseProvider)
{
    /*Session config */
    const router = useRouter();
    const pathname = usePathname();
    const getSession = async () => {
        SupabaseDB.auth.getSession().then((session) => {
            if(session.data.session != null)
            {
                console.log('User zalogowany');
                return true;
            }
            else {
                console.log('User niezalogowany');
                if(pathname === '/dashboard')
                {
                   router.push('/');
                }
                return false;
             }
        })
    }
    
    useEffect(()=> {
     getSession();
    
    }, [])
   
   return(
        <div>
          {children}
        </div>
    )
}



/* 
 const { data: authListener } = SupabaseDB.auth.onAuthStateChange(async (event, session) => {
            console.log(session?.user)

            if(session?.user) {
                router.push('/dashboard');
            } else {
                router.push('/login')
            }
          });  

  */