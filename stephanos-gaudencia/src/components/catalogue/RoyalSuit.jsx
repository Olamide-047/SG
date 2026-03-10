import CategoryView from "./CategoryView";
import data from "../../data/catalogue/royal-suit.json";

function RoyalSuit({ onBack }) {
  return <CategoryView title="Royal Suit" data={data} onBack={onBack} />;
}

export default RoyalSuit;
