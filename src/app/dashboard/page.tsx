'use client'
import EmailAuth from "@/supabase/auth/EmailAuth";
import { useRouter } from "next/navigation";
import GetUserUUID from "@/supabase/GET/GetUserUUID";
import CheckAndInsertDefaultContent from "@/supabase/POST/AddDefaultData";
import { useEffect } from "react";
export default function Dashboard() {
    const router = useRouter();
    
    useEffect(()=> {
        const SessionUserID = GetUserUUID();
        SessionUserID.then((data)=> CheckAndInsertDefaultContent(data));
    },[])
   const logout = () => {
      const auth = new EmailAuth("", "");
      auth.logout().then(()=> {
        router.push('/');
      });

    


   }
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={() => logout()}>Log Out</button>
            
        </>
    )
}