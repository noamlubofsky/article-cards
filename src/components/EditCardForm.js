import React from 'react';

const EditCardForm = ({cardArray, selectedCard, setSelectedCard, selectedFile}) => {
  const [media, setMedia] = React.useState(selectedCard.media)
  const [imageUrl, setImageUrl] = React.useState(null);
  const [saving, setSaving] = React.useState(false)
  const [saved, setSaved] = React.useState(false)


React.useEffect(() => {
if (selectedFile) {
  setImageUrl(URL.createObjectURL(selectedFile));
}
}, [selectedFile]);


const handleyoutube = (e) => {
   if (e.target.value.includes('www.youtube.com' && 'v=')) {
    setTimeout(() => {
          setSaved(false)
          setSaving(true)
        }, 500)

  let link = `https://img.youtube.com/vi/${e.target.value.split('v=')[1]}/maxresdefault.jpg`

       cardArray[selectedCard.id - 1].media = link
let updatedValue = {};
updatedValue = {media: link};
setSelectedCard(selectedCard => ({
    ...selectedCard,
    ...updatedValue
  }));
   setTimeout(() => {
    setSaving(false)
    setSaved(true)
}, 1000)
   }
}


  const options = [
      '',
      'CNN', 
      'Houston Cronicle',
      'Yahoo!'
  ]

  const handlePublisherChange = (e) => {
    setTimeout(() => {
          setSaved(false)
          setSaving(true)
        }, 500)

    cardArray[selectedCard.id - 1].publisher = e.target.value
let updatedValue = {};
updatedValue = {publisher: e.target.value};
setSelectedCard(selectedCard => ({
    ...selectedCard,
    ...updatedValue
  }));

   setTimeout(() => {
    setSaving(false)
    setSaved(true)
}, 1000)

  }
  
      const handleTextChange = (e) => {
        setTimeout(() => {
          setSaved(false)
          setSaving(true)
        }, 500)

    cardArray[selectedCard.id - 1].text = e.target.value

let updatedValue = {};
updatedValue = {text: e.target.value};
setSelectedCard(selectedCard => ({
    ...selectedCard,
    ...updatedValue
  }));

  setTimeout(() => {
    setSaving(false)
    setSaved(true)
}, 1000)


  }
      
          const handleMediaChange = (e) => {
            setTimeout(() => {
          setSaved(false)
          setSaving(true)
        }, 500)

            setMedia(e.target.value)
            console.log(media)
    cardArray[selectedCard.id - 1].media = e.target.value
let updatedValue = {};
updatedValue = {media: e.target.value};
setSelectedCard(selectedCard => ({
    ...selectedCard,
    ...updatedValue
  }));
   setTimeout(() => {
    setSaving(false)
    setSaved(true)
}, 1000)
  }
          
              const handleDateChange = (e) => {
                setTimeout(() => {
          setSaved(false)
          setSaving(true)
        }, 500)

    cardArray[selectedCard.id - 1].date = e.target.value
let updatedValue = {};
updatedValue = {date: e.target.value};
setSelectedCard(selectedCard => ({
    ...selectedCard,
    ...updatedValue
  }));
   setTimeout(() => {
    setSaving(false)
    setSaved(true)
}, 1000)
  }


  
    const fileHandler = (e) => {
      setTimeout(() => {
          setSaved(false)
          setSaving(true)
        }, 500)

      let url = e.target.files[0]
      cardArray[selectedCard.id - 1].media = URL.createObjectURL(url)
let updatedValue = {};
updatedValue = {media: URL.createObjectURL(url)};
setSelectedCard(selectedCard => ({
    ...selectedCard,
    ...updatedValue
  }));
   setTimeout(() => {
    setSaving(false)
    setSaved(true)
}, 1000)
};

const savingStatus = () => {
  if(selectedCard.publisher !== '' || selectedCard.text !== '' || selectedCard.media !== '' || selectedCard.date !== ''){
    if(saving){
      return(
        <h5 className="saving">Saving...</h5>
      )
    }else if(saved){
      return(
        <h5 className="saved">All Changes Saved!</h5>
      )
    }
  }
}


  return(
      <div className='cardform'>
     
      {!selectedFile ? null : <img src={imageUrl} alt={selectedFile.name} height="100px" />}
  

          <form>

              <h3>Publisher</h3>
              <select  onChange={handlePublisherChange} value={selectedCard.publisher}>
                  {options.map(option =>
                          <option>{option}</option>
                      )}
              </select>
              <h3>Text</h3>
              <textarea onChange={handleTextChange} 
value={selectedCard.text} className='textarea'/>
            <div classname='test'>
                  <div classname='mediainput'>
                  <h3>Media</h3>
              <input type="radio" value="none" name="media" onChange={handleMediaChange}/> None
              <input type="radio" value="image" name="media" onChange={handleMediaChange}/> Image
              <input type="radio" value="video" name="media" onChange={handleMediaChange}/> Video
                    <br></br>
            {media !== 'image' ? null : 
              <input type='file' onChange={fileHandler} accept={media === 'image' ? "image/*" : "video/*"}/>}
                    {media === 'video' ? <input type='text' placeholder='Youtube Link' onChange={handleyoutube}/> : null}
            </div>
             <div classname='dateinput'>

                  <h3>Publish Time</h3>
              <input type='date' onChange={handleDateChange} value={selectedCard.date}/>
                  </div>
                    </div>
                    {savingStatus()}

                      <br></br>
        
          </form>
      </div>
  )
}

export default EditCardForm