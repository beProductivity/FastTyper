import SupabaseDB from "../supabase";


export default async function GetUserUUID(): Promise<string> {
    try {
      const session = await SupabaseDB.auth.getSession();
  
      if (session.data.session != null) {
        const userId = session.data.session.user.id as string;
        return userId;
      } else {
        return ''; 
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }