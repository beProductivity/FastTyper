import SupabaseDB from "../supabase";
import { GameSettings, UserSettings } from "@/types/database-types/settings";


/* Skrypt do zapełniania danych w bazie po rejestracji defaultowym contentem */
async function AddRegisterDefaultContent(uuid:string)
{
   await SupabaseDB.from('game_settings').insert<GameSettings>({ id: uuid, keyboard_font:"Arial", keyboard_theme: "default", wpm_visible: true});
   await SupabaseDB.from('user_settings').insert<UserSettings>({ id: uuid, theme_mode: "dark"});

}



export default AddRegisterDefaultContent;