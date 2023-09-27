import { getGoodsById } from '../../../database/products';
// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';
import PoodleGoodQuantity from './PoodleGoodQuantity';

export default function singleProductsPage(props) {
  const poodleGood = getGoodsById(Number(props.params.poodleGoodId));

  return (
    <div>
      <h1>
        {poodleGood.name} {poodleGood.price}
      </h1>
      <PoodleGoodQuantity />
    </div>
  );
}
