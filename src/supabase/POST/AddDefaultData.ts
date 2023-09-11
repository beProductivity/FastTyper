import SupabaseDB from "../supabase";
import { GameSettings, UserSettings } from "@/types/database-types/settings";




async function AddToDB(uuid:string)
{
    try {
    const { error } = await SupabaseDB.from('user_settings').insert<UserSettings>({ id: uuid, theme: "dark"});

    if(error) {
        console.log(error);
    }
    }
    catch(e)
    {
        throw e;
        
    }

    try { 
        const { error } = await SupabaseDB.from('game_settings').insert<GameSettings>({ id: uuid, keyboard_font:"Arial", keyboard_theme: "default", wpm_visible: true});
        if(error) {
            console.log('Nie dodano game_settings');
        }
        } catch(e)
        {
        throw e;
        }
}


async function CheckAndInsertDefaultContent(id: string)
{
    const {data, error } = await SupabaseDB.from('game_settings').select().eq('id', id);

    if (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    
      if(data.length <= 0) {
        AddToDB(id)
      }
      else {
        console.log("Default settings are in the database")
      }
      return data;
}









export default CheckAndInsertDefaultContent;