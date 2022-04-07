import React, { useRef, useState } from "react";
import Card from "./Card";
import EditCardForm from "./EditCardForm";

const CardPage = ({ cardArray, setCardArray }) => {
  const [selectedCard, setSelectedCard] = useState(cardArray[0]);
  const [selectedFile, setSelectedFile] = useState();
  const [dragId, setDragId] = useState();
  const [dropId, setDropId] = useState();
  const [oldPublisher, setOldPublisher] = useState("");
  const [oldDate, setOldDate] = useState("");
  const [oldText, setOldText] = useState("");
  const [oldMedia, setOldMedia] = useState("");
  const [newPublisher, setNewPublisher] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newText, setNewText] = useState("");
  const [newMedia, setNewMedia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCard = {
      publisher: "",
      media: "",
      text: "",
      date: ""
    };
    setCardArray([...cardArray, newCard]);
    setSelectedCard(newCard);
  };

  const handleDrag = (e) => {
    setDragId(e.target.id);
    setOldPublisher(cardArray[e.target.id - 1].publisher);
    setOldText(cardArray[e.target.id - 1].text);
    setOldMedia(cardArray[e.target.id - 1].media);
    setOldDate(cardArray[e.target.id - 1].date);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDropId(e.target.id);
    setNewPublisher(cardArray[e.target.id - 1].publisher);
    setNewText(cardArray[e.target.id - 1].text);
    setNewMedia(cardArray[e.target.id - 1].media);
    setNewDate(cardArray[e.target.id - 1].date);
  };

  const handleDrop = (e) => {
    cardArray[dragId - 1].publisher = newPublisher;
    cardArray[dragId - 1].text = newText;
    cardArray[dragId - 1].media = newMedia;
    cardArray[dragId - 1].date = newDate;
    cardArray[dropId - 1].publisher = oldPublisher;
    cardArray[dropId - 1].text = oldText;
    cardArray[dropId - 1].media = oldMedia;
    cardArray[dropId - 1].date = oldDate;
  };

  return (
    <div>
      <div className="header">
        <h1>ARTICLE CARDS</h1>
      </div>
      <div className="cardform">
        <EditCardForm
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          cardArray={cardArray}
          setCardArray={setCardArray}
          selectedFile={selectedFile}
        />
        {cardArray.forEach((item, i) => {
          item.id = i + 1;
        })}
      </div>

      <div className="container">
        {cardArray.map((card) => (
          <Card
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            key={card.id}
            card={card}
            cardArray={cardArray}
            setCardArray={setCardArray}
            handleDrag={handleDrag}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            setDragId={setDragId}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="newcardbutton">
          <button type="submit" className="pushy__btn">
            New Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardPage;
