import CategoryView from "./CategoryView";
import data from "../../data/catalogue/luxury-dress.json";

function LuxuryDress({ onBack }) {
  return <CategoryView title="Luxury Dress" data={data} onBack={onBack} />;
}

export default LuxuryDress;
