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

    discord = async () => {
        const { user, error } = await SupaBaseClient.auth.signInWithOAuth({
            provider: 'discord'
        })
        if (error) throw error;
    }

    constructor(email: string, password: string) {
        this.emailInput = email;
        this.passwordInput = password;

        console.log("email: '" + email + "'");
        console.log("password: '" + password + "'");
    }
}

export default EmailAuth