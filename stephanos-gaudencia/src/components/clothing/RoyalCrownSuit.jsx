import CategoryView from "../catalogue/CategoryView";
import data from "../../data/clothing/royal-crown-suit.json";

function RoyalCrownSuit({ onBack }) {
  return <CategoryView title="Royal Crown Suit" data={data} onBack={onBack} />;
}

export default RoyalCrownSuit;
