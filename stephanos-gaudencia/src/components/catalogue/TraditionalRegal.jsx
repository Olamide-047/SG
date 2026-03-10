import CategoryView from "./CategoryView";
import data from "../../data/catalogue/traditional-regal.json";

function TraditionalRegal({ onBack }) {
  return <CategoryView title="Traditional Regal" data={data} onBack={onBack} />;
}

export default TraditionalRegal;
