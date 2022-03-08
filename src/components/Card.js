import React from 'react';


const Card = ({card, cardArray, setCardArray, selectedCard, setSelectedCard}) => {

  const handleDelete = (e) => {
    e.preventDefault()
      setCardArray(cardArray.filter(c => c.id !== card.id))

    if(cardArray.length === 1){
        let newCard = {
            publisher: '',
            media: '',
            text: '',
            date: ''
        }
        setCardArray([...[], newCard])
        setSelectedCard(newCard)
    }
    if(card.id === selectedCard.id){
      console.log('yes')
      console.log(card.id)
      console.log(selectedCard.id)
      setSelectedCard(cardArray[0])
    }
}

  
  const instructions = () => {
    if((card.media === '' || card.media === 'none') && card.publisher === '' && card.text === '' && card.date === ''){
      if(selectedCard.id === card.id){
        return(
        <h1>Edit this card in the form above</h1>
        )
      }else{
        return(
        <h1>Click this card to select it for editing</h1>
        )
      }
    }
  }
  
  const pic = () => {
    if(card.media !== '' && card.media !== 'none'){
      return(
        
        <div class="image-wrap">
      <img src={card.media} alt={card.media === 'image' ? 'No image selected' : 'Select video file or upload video link'}/>
          {!card.media.includes('youtube.com') ? null : <div class="play-button"></div>}
  </div>
          

      )
    }
  }
    

    return(
      <div className={selectedCard.id === card.id ? "selected" : "card"} >
        <div onClick={() => setSelectedCard(card)} className='cardbody'>

          {instructions()}
          {pic()}          
        <h1>{card.publisher}</h1>
         
            <p style={{ flexShrink: 1 }}>{card.text}</p>
            <h3>{card.date}</h3>
                  </div>
        <div className="delete">
        <form onSubmit={handleDelete} >
        <button className='button' type='submit'>X</button>
        </form>
        </div>
        </div>

    )
}

export default Card