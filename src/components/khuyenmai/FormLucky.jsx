import Roulette from "./Roulette";
import { v4 as uuidv4 } from "uuid";
function FormLucky() {
  const inputList = ([
    {
      id: uuidv4(),
      text: "1 ly nước ép",
    },
    {
      id: uuidv4(),
      text: "Lồn trâu",
    },
    {
      id: uuidv4(),
      text: "1 ly nước ép",
    },
    {
      id: uuidv4(),
      text: "Lồn trâu xào khế",
    },
    {
      id: uuidv4(),
      text: "1 vé tháng tập",
    },
    {
      id: uuidv4(),
      text: "2 tháng free",
    },
    {
      id: uuidv4(),
      text: "Tàm tạm",
    },
    {
      id: uuidv4(),
      text: "M416",
    },
    {
      id: uuidv4(),
      text: "K98",
    },
    {
      id: uuidv4(),
      text: "AWM",
    },
    {
      id: uuidv4(),
      text: "3Z",
    },
  ]);
  return (
    <div id="SPINLUCKY1256" className="ladi-element">
      <div className="ladi-spin-lucky">
        <Roulette data={inputList} />
      </div>
    </div>
  );
}

export default FormLucky;
