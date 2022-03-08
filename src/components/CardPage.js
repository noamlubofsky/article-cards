import React from 'react';
import EditCardForm from "./EditCardForm"
import Card from "./Card"

const CardPage = ({cardArray, setCardArray}) => {
    const [selectedCard, setSelectedCard] = React.useState(cardArray[0])
    const [selectedFile, setSelectedFile] = React.useState();


  const handleSubmit = (e) => {
    e.preventDefault()
    let newCard = {
        publisher: '',
        media: '',
        text: '',
        date: ''
      }
      setCardArray([...cardArray, newCard])
      setSelectedCard(newCard)
 
  }

  return(
      <div>
       <div className='header'>
      <h1>Edit Card Form</h1>
      </div>
      <div  className='cardform'>
      <EditCardForm selectedCard={selectedCard} setSelectedCard={setSelectedCard} cardArray={cardArray} selectedFile={selectedFile}/>
      {cardArray.forEach((item, i) => {
item.id = i + 1;
})}
    </div>

      <div className='container'>
      {cardArray.map(card => 
      <Card selectedCard={selectedCard} setSelectedCard={setSelectedCard} key={card.id} card={card} cardArray={cardArray} setCardArray={setCardArray}/>
      )}
      </div>
      <form onSubmit={handleSubmit}>
          <div className='newcardbutton'>
              <button type="submit" className='pushy__btn'>New Card</button>
            </div>
      </form>
      </div>
  )
}

export default CardPage