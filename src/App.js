import "./App.css";
import TopBread from "./components/top.js";
import Tomato from "./components/tomato.js";
import Meat from "./components/meat.js";
import Lettuce from "./components/lettuce.js";
import BaseBread from "./components/base.js";
import Delete from "./components/delete.js";

export default function Burger() {
  return (
    <section className="Burgercontainer">
      <TopBread />
      <Delete slice={<Tomato />} />
      <Delete slice={<Meat />} />
      <Delete slice={<Lettuce />} />
      <BaseBread />
    </section>
  );
}
