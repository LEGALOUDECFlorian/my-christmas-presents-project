import { Database } from "../../@types/database.types"
//import { useNavigate } from "react-router-dom";
import "./GiftCard.scss"

type GiftDetail = Database["public"]["Tables"]["gift_detail"]["Row"];

interface GiftCardProps {
  giftDetail: GiftDetail
};

function GiftCard({ giftDetail }: GiftCardProps) {
 // const navigate = useNavigate();
  // const handleClick = () => {
  //   if (giftDetail.gift_link) {
  //     navigate(giftDetail.gift_link); // Navigue si le lien est valide
  //   } else {
  //     console.error("Le lien est invalide ou manquant.");
  //   }
  // };

  return (
    <>
      <div className="card">
  <div className="card-img-holder">
    <img src={`${giftDetail.gift_image}`} alt={`${giftDetail.gift_name}`}/>
  </div>
  <h3 className="blog-title">{giftDetail.gift_name}</h3>
  <span className="blog-time">Prix: XX </span>
  <p className="description">
  </p>
  <div className="options">
    <span>
     
    </span>
    <a
  href={`${giftDetail.gift_link}`}
  className="btn"
  target="_blank" // Facultatif : ouvre dans un nouvel onglet
  rel="noopener noreferrer" // Recommandé pour des raisons de sécurité avec target="_blank"
>
  Allez voir
</a>
  </div>
</div>

    </>
);
}

export default GiftCard;