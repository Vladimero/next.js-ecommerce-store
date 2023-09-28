import { getItemsById } from '../../../database/items';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ItemQuantityForm from './ItemQuantityForm';

export default function singleItemPage(props) {
  const item = getItemsById(Number(props.params.itemId));
  // catch the cookie from the actions.js file
  const addedQuantityCookie = getCookie('addedQuantity');
  // parse the cookie, because it was stringified in actions.js file & when cookie is undefined create an empty array
  const addedQuantities = !addedQuantityCookie
    ? []
    : parseJson(addedQuantityCookie);

  // Display only one added quantity, create a find method
  const itemQuantityToDisplay = addedQuantities.find((addedQuantity) => {
    return addedQuantity.id === item.id;
  });

  return (
    <div>
      <h1>
        {item.name} {item.price}
      </h1>
      <div>{itemQuantityToDisplay?.quantity}</div>
      <ItemQuantityForm itemId={item.id} />
    </div>
  );
}
