import React from "react";

const Card = ({
  card,
  cardArray,
  setCardArray,
  selectedCard,
  setSelectedCard,
  handleDrag,
  handleDragOver,
  handleDrop,
  setDragId
}) => {
  const handleDelete = (e) => {
    e.preventDefault();
    setCardArray(cardArray.filter((c) => c.id !== card.id));

    if (cardArray.length === 1) {
      let newCard = {
        publisher: "",
        media: "",
        text: "",
        date: ""
      };
      setCardArray([...[], newCard]);
      setSelectedCard(newCard);
    }
    if (card.id === selectedCard.id) {
      setSelectedCard(cardArray[0]);
    }
  };

  const instructions = () => {
    if (
      (card.media === "" || card.media === "none") &&
      card.publisher === "" &&
      card.text === "" &&
      card.date === ""
    ) {
      if (selectedCard.id === card.id) {
        return <h1 id={card.id}>Edit this card in the form above</h1>;
      } else {
        return <h1 id={card.id}>Click this card to select it for editing</h1>;
      }
    }
  };

  const pic = () => {
    if (card.media !== "" && card.media !== "none") {
      return (
        <div class="image-wrap">
          <img
            src={card.media}
            alt={
              card.media === "image" ? "No image selected" : "Upload video link"
            }
          />
          {!card.media.includes("youtube.com") ? null : (
            <div class="play-button"></div>
          )}
        </div>
      );
    }
  };

  // const draggingCard = () => {
  //   setOldPublisher(card.publisher)
  //   setOldText(card.text)
  //   setOldMedia(card.media)
  //   setOldDate(card.date)
  //   setDragId(card.id)
  //   cardArray[card.id - 1].publisher = 'yahoo'

  // }

  return (
    <div
      className={selectedCard.id === card.id ? "selected" : "card"}
      draggable={true}
      // onDragOver={(ev) => ev.preventDefault()}

      // onDragStart={() => setDragId(card.id)}
      onDragStart={handleDrag}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      id={card.id}
    >
      <div
        onClick={() => setSelectedCard(card)}
        className="cardbody"
        id={card.id}
      >
        {instructions()}
        {pic()}
        <h1 id={card.id}>{card.publisher}</h1>
        <div
          className={
            selectedCard.id === card.id ? "selectedCardText" : "cardText"
          }
        >
          <p>{card.text}</p>
        </div>
        <h3>{card.date}</h3>
      </div>
      <div className="delete">
        <form onSubmit={handleDelete}>
          <button className="button" type="submit">
            X
          </button>
        </form>
      </div>
    </div>
  );
};

export default Card;
