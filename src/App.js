import React from 'react';
import Card from './components/Card'

// Данные можно получить с сервера, на основе этих данных отображаются компоненты.
const data = [
  {
    id:1,
    name:'Сказочное заморское явство',
    title:'Нямушка',
    details:'с фуа-гра',
    description:['10 порций','мышь в подарок'],
    weightAmount:'0,5',
    weightName:'кг',
    selectedText:'Печень утки разварная с артишоками.',
    disabled:false
  },
  {
    id:2,
    name:'Сказочное заморское явство',
    title:'Нямушка',
    details:'с рыбой',
    description:['40 порций','2 мыши в подарок'],
    weightAmount:'2',
    weightName:'кг',
    selectedText:'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disabled:false
  },
  {
    id:3,
    name:'Сказочное заморское явство',
    title:'Нямушка',
    details:'с курой',
    description:['100 порций','5 мышей в подарок', 'заказчик доволен'],
    weightAmount:'5',
    weightName:'кг',
    selectedText:'Филе из цыплят с трюфелями в бульоне.',
    disabled:true
  }
]

function App() {
  return (
    <div className="app">
        <div>
          <h1 className='title'>Ты сегодня покормил кота?</h1>
        </div>
      <div className="cards">

        {
          data.map(item => (
            <Card data={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
