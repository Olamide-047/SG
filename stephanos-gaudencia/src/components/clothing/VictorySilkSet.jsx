import CategoryView from "../catalogue/CategoryView";
import data from "../../data/clothing/victory-silk-set.json";

function VictorySilkSet({ onBack }) {
  return <CategoryView title="Victory Silk Set" data={data} onBack={onBack} />;
}

export default VictorySilkSet;
