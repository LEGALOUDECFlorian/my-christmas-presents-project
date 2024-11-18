import React from "react";
import { Database } from "../../@types/database.types"
import { updateGifts } from "../../services/giftServices";
import "./GiftCard.scss"

type GiftDetail = Database["public"]["Tables"]["gift_detail"]["Row"];

interface GiftCardProps {
  giftDetail: GiftDetail
};

function GiftCard({ giftDetail }: GiftCardProps) {

  const [isTaken, setIsTaken] = React.useState(giftDetail.is_taken);

  async function handleToggleIsTaken() {
    try {
      const newIsTaken = !isTaken;
      setIsTaken(newIsTaken);

      const updatedGift = await updateGifts(giftDetail.id, newIsTaken);

      if (updatedGift) {
        console.log("Cadeau mis à jour avec succès :", updatedGift);
      } else {
        console.log("Échec de la mise à jour ou aucun enregistrement trouvé.");
      }

    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      setIsTaken(giftDetail.is_taken);
    }
  }


  return (
    <>
      <div className={`card ${isTaken ? "card-taken" : ""}`}>
        <div className="card-img-holder">
          <img src={`${giftDetail.gift_image}`} alt={`${giftDetail.gift_name}`} />
        </div>
        <h3 className="blog-title">{giftDetail.gift_name}</h3>
        <span className="blog-time">Prix: XX </span>
        <p className="description">
        </p>
        <div className="options">
          <span>
          </span>
          <div className="card-btn-container">
            <button
              className={`taken-btn ${isTaken ? "taken-btn-taken" : "taken-btn-available"}`}
              onClick={handleToggleIsTaken}
            >
              {isTaken ? "Cadeau pris !" : "Prendre le cadeau"}
            </button>
            <a
              href={`${giftDetail.gift_link}`}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Allez voir
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default GiftCard;