import React, { useState } from 'react';

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    { id: 1, content: 'Card 1 Content' },
    { id: 2, content: 'Card 2 Content' },
    { id: 3, content: 'Card 3 Content' },
  ];

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <div className='mx-auto mt-8 max-w-screen-md'>
      <div className='relative'>
        <div className='flex transform space-x-4 transition-transform duration-300 ease-in-out'>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-full ${
                index === currentCard ? 'opacity-100' : 'opacity-0'
              } transform translate-x-${index - currentCard}`}
            >
              <div className='rounded bg-gray-200 p-4 shadow'>
                <h2 className='mb-2 text-xl font-bold'>Card {card.id}</h2>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className='absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-500 p-2 text-white'
          onClick={prevCard}
        >
          &lt;
        </button>
        <button
          className='absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-500 p-2 text-white'
          onClick={nextCard}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
