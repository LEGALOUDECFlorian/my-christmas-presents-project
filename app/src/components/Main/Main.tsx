
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { Database } from "../../@types/database.types"
import GiftCard from "../GiftCard/GiftCard";
import "./Main.scss"

type GiftDetail = Database["public"]["Tables"]["gift_detail"]["Row"];


function Main() {

  const [gift, setGift] = useState<GiftDetail[]>([]);

  useEffect(() => {
    getGifts();
  }, []);

  async function getGifts() {
    const { data, error } = await supabase.from("gift_detail").select();
    if (error) {
      console.error("Error fetching gifts:", error);
      return;
    }
    setGift(data);
  }

  return (
    <>
      <main className="main">
        {gift.map((detail) =>
          <GiftCard key={detail.id} giftDetail={detail} />
        )}
      </main>
    </>
  );
}

export default Main;