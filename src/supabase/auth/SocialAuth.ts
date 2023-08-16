import SupabaseDB from '../supabase';

class SocialAuth {
    private  passwordInput: string = '';
    private emailInput: string = '';

    discord = async () => {
        const { error } = await SupabaseDB.auth.signInWithOAuth({
            provider: 'discord'
        })
        if (error) throw error;
    }

    constructor(email: string, password: string) {
        this.emailInput = email;
        this.passwordInput = password;
    }
}

export default SocialAuth