import { formatJSONResponse } from '@libs/apiGateway';

import products from '../../db/products';
import { APIGatewayEvent } from 'aws-lambda';

const getProductsList = async (event: APIGatewayEvent) => {
  console.log(`LAMBDA EVENT: ${JSON.stringify(event)}`);

  return formatJSONResponse(products);
}

export default getProductsList;
export const main = getProductsList;
