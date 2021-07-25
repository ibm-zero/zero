import { useParams } from 'react-router-dom';
import producerImg_1 from '../assets/images/producer_1.jpg';
import producerImg_2 from '../assets/images/producer_2.jpg';
import producerImg_3 from '../assets/images/producer_3.jpg';

export function Producer() {
  const params = useParams();
  const partnerId = params.id;

  let producerImg;
  switch (partnerId) {
    case '1':
      producerImg = producerImg_1;
      break;
    case '2':
      producerImg = producerImg_2;
      break;
    case '3':
      producerImg = producerImg_3;
      break;
		default:

      producerImg = producerImg_1;
	}
	
  return (
    <>
      <h1>{partnerId}</h1>
      <div>Hi</div>
      <img src={producerImg} alt='producer' />
    </>
  );
}
