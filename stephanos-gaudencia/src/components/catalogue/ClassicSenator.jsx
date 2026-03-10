import CategoryView from "./CategoryView";
import data from "../../data/catalogue/classic-senator.json";

function ClassicSenator({ onBack }) {
  return <CategoryView title="Classic Senator" data={data} onBack={onBack} />;
}

export default ClassicSenator;
