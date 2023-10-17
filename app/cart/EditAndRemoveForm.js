'use client';

import { removeSingleItemFromCookies } from './actions';

export default function EditAndRemoveForm(props) {
  return (
    <form>
      <button
        className="btn btn-xs btn-outline"
        data-test-id={`cart-product-remove-${props.itemId}`}
        formAction={async () => await removeSingleItemFromCookies(props.itemId)}
      >
        Remove
      </button>
    </form>
  );
}
