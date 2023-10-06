import { getItemsById } from '../../../database/items';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ItemQuantityForm from './ItemQuantityForm';

export default async function singleItemPage(props) {
  const item = await getItemsById(Number(props.params.itemId));
  // catch the cookie from the actions.js file
  const addedQuantityCookie = getCookie('cart');
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
      <h1>{item.name}</h1>
      <div>
        <p>
          <span>{item.description}</span>
        </p>
      </div>
      <div>
        <p>
          <span data-test-id="product-price">Price: {item.price}€</span>
        </p>
      </div>
      <div>Added quantity: {itemQuantityToDisplay?.quantity}</div>
      <br />
      <ItemQuantityForm itemId={item.id} />
    </div>
  );
}
