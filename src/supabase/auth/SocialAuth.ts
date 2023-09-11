import SupabaseDB from '../supabase';
import AddRegisterDefaultContent from '../POST/AddDefaultData';
class SocialAuth {
    private  passwordInput: string = '';
    private emailInput: string = '';

    discord = async () => {
        const { data, error } = await SupabaseDB.auth.signInWithOAuth({
            provider: 'discord'
        }).finally(()=> AddRegisterDefaultContent(""))
        if (error) throw error;
    }

    constructor(email: string, password: string) {
        this.emailInput = email;
        this.passwordInput = password;
    }
}

export default SocialAuth;