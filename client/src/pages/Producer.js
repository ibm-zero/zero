import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import producerImg_1 from '../assets/images/producer_1.jpg';
import producerImg_2 from '../assets/images/producer_2.jpg';
import producerImg_3 from '../assets/images/producer_3.jpg';
import producerImg_4 from '../assets/images/producer_4.jpg';
import arrowLeftCircle from '../assets/images/back-btn.png';

import '../styles/producer.scss';
import { Product } from '../components/Product';

export function Producer() {
  const history = useHistory();
  const params = useParams();
  const partnerId = params.id;

  let producerName;
  let producerImg;
  let producerDescription;
  let producerAddress;
  const productList = [
    {
      productName: 'Pear',
      productPrice: 2.25,
      unit: 'Kg',
      imgUrl:
        'https://cdn.discordapp.com/attachments/865297431926931527/868900570071728148/unknown.png',
    },
    {
      productName: 'Potato',
      productPrice: 0.9,
      unit: 'Kg',
      imgUrl:
        'https://cdn.discordapp.com/attachments/865297431926931527/868900504577654864/unknown.png',
    },
    {
      productName: 'Peach',
      productPrice: 1.85,
      unit: 'Kg',
      imgUrl:
        'https://cdn.discordapp.com/attachments/865297431926931527/868897723129167892/unknown.png',
    },
    {
      productName: 'Avocado',
      productPrice: 1.5,
      unit: 'Un',
      imgUrl:
        'https://cdn.discordapp.com/attachments/865297431926931527/868912847743225856/unknown.png',
    },
  ];
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
        <div>{producerDescription}</div>
        <p>{producerAddress}</p>
      </div>
      <div className='products-container'>
        {productList && productList.map((item) => <Product item={item} />)}
      </div>
    </>
  );
}
