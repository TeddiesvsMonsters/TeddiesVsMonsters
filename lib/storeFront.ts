import { config } from '@/config'

export async function storeFront(query: string, variables = {}) {
  if (config.SHOPIFY_API_URL && config.SHOPIFY_ACCESS_TOKEN) {
    const response = await fetch(config.SHOPIFY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': config.SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    })
    return await response.json()
  }
}
