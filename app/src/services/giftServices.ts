import { supabase } from "./supabaseClient";
import { Database } from "../@types/database.types.ts";

type GiftDetail = Database["public"]["Tables"]["gift_detail"]["Row"];

export async function getGifts(): Promise<GiftDetail[] | null> {
  const { data, error } = await supabase
    .from("gift_detail")
    .select();

  if (error) {
    console.error("Erreur lors de la récupération des cadeaux :", error);
    return null;
  }

  return data;
}

export async function updateGifts(getGiftsID: number, isTaken : boolean) {
  const { data, error } = await supabase
  .from("gift_detail")
  .update({ is_taken: isTaken })
  .eq('id', getGiftsID)
  .select()
  if (error) {
    console.error("Erreur lors de la mise à jour :", error.message);
    return null;
  }

  return data ? data[0] : null;

}


