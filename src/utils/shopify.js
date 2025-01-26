// Shopify utility functions
export const SHOPIFY_ENDPOINT = import.meta.env.VITE_SHOPIFY_STOREFRONT_URL;
export const SHOPIFY_ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN;

export async function createShopifyCheckout(cartItems) {
  const lineItems = cartItems.map(item => ({
    variantId: item.variantId,
    quantity: item.quantity,
    customAttributes: [
      { key: 'size', value: item.selectedSize },
      { key: 'color', value: item.selectedColor.name }
    ]
  }));

  const mutation = `
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          message
          field
        }
      }
    }
  `;

  const response = await fetch(SHOPIFY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN
    },
    body: JSON.stringify({
      query: mutation,
      variables: {
        input: {
          lineItems,
          allowPartialAddresses: true
        }
      }
    })
  });

  const { data } = await response.json();
  return data.checkoutCreate.checkout;
}
