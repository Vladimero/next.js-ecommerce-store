import test, { expect } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(
    page.getByRole('heading', { name: 'This is our poodle shop' }),
  ).toBeVisible();

  await expect(page.getByRole('img', { name: '1' }).first()).toBeVisible();

  await page.getByRole('link', { name: 'Explore our diversity' }).click();
  await page.waitForURL('http://localhost:3000/items');
  await expect(page).toHaveURL('http://localhost:3000/items');

  await page
    .locator('.grid > div > .card-body > .card-actions > a > span > .btn')
    .first()
    .click();
  await page.waitForURL('http://localhost:3000/items/1');
  await expect(page).toHaveURL('http://localhost:3000/items/1');

  await page.getByTestId('product-quantity').fill('3');
  await page.keyboard.press('Enter');

  await page.getByTestId('product-add-to-cart').click();

  await page.getByRole('button', { name: 'View cart' }).click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await page.getByTestId('cart-product-remove-<product id>').click();

  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.waitForURL('http://localhost:3000/items');
  await expect(page).toHaveURL('http://localhost:3000/items');

  await page
    .locator('div:nth-child(5) > .card-body > .card-actions > a > span > .btn')
    .click();
  await page.waitForURL('http://localhost:3000/items/5');
  await expect(page).toHaveURL('http://localhost:3000/items/5');

  await page.getByTestId('product-quantity').fill('3');
  await page.keyboard.press('Enter');

  await page.getByTestId('product-add-to-cart').click();

  await page.getByRole('button', { name: 'View cart' }).click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await page.getByTestId('cart-checkout').click();
  await page.waitForURL('http://localhost:3000/checkout');
  await expect(page).toHaveURL('http://localhost:3000/checkout');

  await page.getByTestId('checkout-first-name').fill('John');
  await page.getByTestId('checkout-last-name').fill('Smith');
  await page.getByTestId('checkout-email').fill('john.smith@gmail.com');
  await page.getByTestId('checkout-address').fill('Sturzgasse 1');
  await page.getByTestId('checkout-city').fill('Vienna');
  await page.getByTestId('checkout-postal-code').fill('1140');
  await page.getByTestId('checkout-country').fill('Austria');
  await page.getByTestId('checkout-credit-card').fill('4545 4545 4545 4545');
  await page.getByTestId('checkout-expiration-date').fill('07 / 27');
  await page.getByTestId('checkout-security-code').fill('990');

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForURL('http://localhost:3000/thankYouPage');
  await expect(page).toHaveURL('http://localhost:3000/thankYouPage');

  await page.getByRole('link', { name: 'Homepage' }).click();
  await page.waitForURL('http://localhost:3000');
  await expect(page).toHaveURL('http://localhost:3000');
});
