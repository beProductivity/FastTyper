import SupabaseDB from '../supabase';
import AddRegisterDefaultContent from '../POST/AddDefaultData';

class EmailAuth {
    private passwordInput: string = '';
    private emailInput: string = '';
    
    register = async () => {
        const {data, error } = await SupabaseDB.auth.signUp({
            email: this.emailInput,
            password: this.passwordInput
        }).finally(()=> AddRegisterDefaultContent(data.user?.id as string))

        if (error) throw error;
    }

    login = async () => {
        const { error } = await SupabaseDB.auth.signInWithPassword({
            email: this.emailInput,
            password: this.passwordInput
        });
        if (error) throw error;
        window.location.href ='/dashboard';
    }

    logout = async () => {
        const { error } = await SupabaseDB.auth.signOut();
        if (error) throw error;
    }

    constructor(email: string, password: string) {
        this.emailInput = email;
        this.passwordInput = password;
    }
}

export default EmailAuth