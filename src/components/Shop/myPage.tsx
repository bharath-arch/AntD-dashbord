import Cards from "./Cards";
import {Shopingdata} from "../../JSON/data";

const myPage = () => {
  return (
    <div>
      {Shopingdata.map((item) => (
        <Cards key={item.id} {...item} />
      ))}
    </div>
  );
};

export default myPage;
