'use client'
import EmailAuth from "@/supabase/auth/EmailAuth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
 
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