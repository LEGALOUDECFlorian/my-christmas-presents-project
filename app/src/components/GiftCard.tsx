import { useEffect, useState } from "react";
// import { supabase } from "../services/supabaseClient";
import { Database } from "../@types/database.types"
import { getGifts } from "../services/giftServices";

type GiftDetail = Database["public"]["Tables"]["gift_detail"]["Row"];

function GiftCard() {

  const [gift, setGift] = useState<GiftDetail[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const gifts = await getGifts();
    if (gifts) {
      setGift(gifts);
    }
  }

  return (
    <ul>
      {gift.map((gift) => (
        <li key={gift.id}>{gift.gift_name}</li>
      ))}
    </ul>
  )
}

export default GiftCard;