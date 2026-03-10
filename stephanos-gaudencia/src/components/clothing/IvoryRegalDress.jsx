import CategoryView from "../catalogue/CategoryView";
import data from "../../data/clothing/ivory-regal-dress.json";

function IvoryRegalDress({ onBack }) {
  return <CategoryView title="Ivory Regal Dress" data={data} onBack={onBack} />;
}

export default IvoryRegalDress;
