import { getItemsById } from '../../../database/items';
// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';
import ItemQuantityForm from './ItemQuantityForm';

export default function singleItemPage(props) {
  const item = getItemsById(Number(props.params.itemId));

  return (
    <div>
      <h1>
        {item.name} {item.price}
      </h1>
      <ItemQuantityForm />
    </div>
  );
}
