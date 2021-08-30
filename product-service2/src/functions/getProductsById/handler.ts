import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import products from '../../db/products';
import schema from './schema';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(`LOG LAMBDA getProductsById`);
  const { productId } = event.pathParameters;
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Headers": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: "Product not found"
    }
  }

  return formatJSONResponse({ data: product });
}

export const main = middyfy(getProductsById);
