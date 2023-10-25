"use client"
import { Modal, message } from "antd";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Wheel } from "react-custom-roulette";

function Roulette({ data }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [isOutOfTurn, setIsOutOfTurn] = useState(false);
  // console.log(rouletteData);
  const handleSpinClick = () => {
    if (spinCount < 2) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setSpinCount(spinCount + 1);
      showModal();
    } else {
      setIsOutOfTurn(true);
      message.error("Bạn đã hết lượt quay");
    }
  };

  useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text,
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={[0.2]}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={["#ccc"]}
          outerBorderWidth={[9]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={[18]}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className="button roulette-button" onClick={handleSpinClick}>
          <Image className="roulette-button-img" style={{width:70}} src="https://png.pngtree.com/png-clipart/20220111/original/pngtree-hand-drawn-cartoon-creative-spinning-wheel-flat-illustration-free-buckle-element-png-image_7071144.png" alt="" />
        </button>
      </div>
      <br />
      {!mustSpin ? (
        <>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>{rouletteData[prizeNumber].completeOption}</p>
          </Modal>
        </>
      ) : (
        "Đang quay..."
      )}
    </>
  );
}

export default Roulette;
