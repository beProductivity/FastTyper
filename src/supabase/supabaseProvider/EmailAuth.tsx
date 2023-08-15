import SupaBaseClient from '../supabase';

class EmailAuth {
    private  passwordInput: string = '';
    private emailInput: string = '';
    
    register = async () => {
        const { error } = await SupaBaseClient.auth.signUp({
            email: this.emailInput,
            password: this.passwordInput
        })
        if (error) throw error;
    }

    login = async () => {
        const { error } = await SupaBaseClient.auth.signInWithPassword({
            email: this.emailInput,
            password: this.passwordInput
        });
        if (error) throw error;
        console.log("zalogowano")
    }

    constructor(email: string, password: string) {
        this.emailInput = email;
        this.passwordInput = password;
    }
}

export default EmailAuth