import React, {useState} from 'react'
import './Card.css'

const Card = ({data}) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    if (data.disabled){
      return
    }
    console.log('Успешный клик по', data.id) // Дальше данные можно отправить на сервер, либо передать в Store Redux
    setSelected(!selected)
  }
  return (
      <div className={data.disabled ? 'card disabled':'card' && selected ? 'card selected':'card'} onClick={handleClick}>
        <div className="card__header">
          <div className="card__corner">
          </div>
          <div className="card__name">
            {data.name}
          </div>
        </div>
        <div className="card__content">
          <h2 className='card__title'>{data.title}</h2>
          <div className="card__details">
            {data.details}
          </div>
          <ul className="card__description">
            {
              data.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
          <img src="cat.png" className='card__image' alt=""/>
          <div className="card__weight">
            <div>
              <span className='card__amount'>{data.weightAmount}</span>
              <span className='card__weight-name'>{data.weightName}</span>
            </div>
          </div>
        </div>
        <div className="card__footer">
          {
            data.disabled ? (<p>Печалька, с {data.details} закончился</p>) : (<p>Что ты сидишь? Порадуй котэ, <span>купи</span></p>) &&
            selected ? (<p>{data.selectedText}</p>) : ((<p>Что ты сидишь? Порадуй котэ, <span>купи</span></p>))
          }
        </div>
      </div>
  )
}

export default Card
