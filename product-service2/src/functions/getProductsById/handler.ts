import { formatJSONResponse } from '@libs/apiGateway';

import products from '../../db/products';
import { APIGatewayEvent } from 'aws-lambda/trigger/api-gateway-proxy';

const getProductsById = async (event: APIGatewayEvent) => {
  console.log(`LOG LAMBDA getProductsById: ${JSON.stringify(event)}`);
  const { productId } = event.pathParameters!;
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Headers": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: "Product not found"
    }
  }

  return formatJSONResponse(product);
}

export default getProductsById;
export const main = getProductsById;
