import SupabaseDB from "../supabase";

export default function checkSession() {
    let isLogin:boolean = false;
    SupabaseDB.auth.getSession().then((session) => {
        if(session.data.session != null)
        {
            console.log('User zalogowany');
            isLogin = true;
        }
        else {
            console.log('User niezalogowany');
            isLogin = false;
            
         }
         return isLogin;
    })
}