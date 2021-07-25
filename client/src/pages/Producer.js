import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import producerImg_1 from '../assets/images/producer_1.jpg';
import producerImg_2 from '../assets/images/producer_2.jpg';
import producerImg_3 from '../assets/images/producer_3.jpg';
import producerImg_4 from '../assets/images/producer_4.jpg';
import arrowLeftCircle from '../assets/images/back-btn.png';

import '../styles/producer.scss';

export function Producer() {
  const history = useHistory();
  const params = useParams();
  const partnerId = params.id;

  let producerName;
  let producerImg;
  let producerDescription;
  let producerAddress;
  switch (partnerId) {
    case '1':
      producerImg = producerImg_1;
      producerName = "Arnaldo's Farm";
      producerDescription = '$$ - Vegetables';
      producerAddress = '1099 Front Street - Anaheim - CA, 48548';
      break;
    case '2':
      producerImg = producerImg_2;
      producerName = 'Fruit Ninjas';
      producerDescription = '$ - Vegetables';
      producerAddress = '1099 Front Street - Anaheim - CA, 48548';
      break;
    case '3':
      producerImg = producerImg_3;
      producerName = 'Earth Family';
      producerDescription = '$$ - Vegetables';
      producerAddress = '1099 Front Street - Anaheim - CA, 48548';
      break;
    default:
      producerImg = producerImg_4;
      producerName = 'Veggie Eggie';
      producerDescription = '$ - Vegetables ';
      producerAddress = '1099 Front Street - Anaheim - CA, 48548';
  }

  function handleBack() {
    history.push('/home');
  }

  return (
    <>
      <div className='banner'>
        <button className='back-btn' onClick={handleBack}>
          <img src={arrowLeftCircle} alt='back' />
        </button>
        <img src={producerImg} alt='producer' className='producer-banner' />
        <div className='producer-name'>{producerName}</div>
      </div>
      <div className='description'>
        {producerDescription}
        <p>{producerAddress}</p>
      </div>
    </>
  );
}
