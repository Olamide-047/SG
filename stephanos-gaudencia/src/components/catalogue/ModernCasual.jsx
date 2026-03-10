import CategoryView from "./CategoryView";
import data from "../../data/catalogue/modern-casual.json";

function ModernCasual({ onBack }) {
  return <CategoryView title="Modern Casual" data={data} onBack={onBack} />;
}

export default ModernCasual;
