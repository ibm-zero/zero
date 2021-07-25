import '../styles/singleProducer.scss';

import likeImg from '../assets/images/like.svg';
import starImg from '../assets/images/star.png'
import { useHistory } from 'react-router';

export function Producer({ producer }) {
	const history = useHistory()

	function handleProducerClick() {
		history.push(`/producer/${producer.id}`)
	}

  return (
    <div className='producer-container' onClick={handleProducerClick}>
      <div className='banner'>
        <img src={producer.img} alt='item' />
      </div>
      <div className='producer-description'>
        <div className='name'>{producer.name}</div>
        <div className='category'>
          {producer.type}
          <p>Ready to delivery</p>
        </div>
      </div>
      <div className='feedback'>
        <div>
          <span>5</span> <img src={starImg} />
        </div>
        <div>
          <img src={likeImg} />
        </div>
      </div>
    </div>
  );
}
