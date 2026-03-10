import CategoryView from "../catalogue/CategoryView";
import data from "../../data/clothing/golden-monarch-outfit.json";

function GoldenMonarchOutfit({ onBack }) {
  return <CategoryView title="Golden Monarch Outfit" data={data} onBack={onBack} />;
}

export default GoldenMonarchOutfit;
