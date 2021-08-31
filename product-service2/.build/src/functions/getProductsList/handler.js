import { formatJSONResponse } from '@libs/apiGateway';
import products from '../../db/products';
const getProductsList = async (event) => {
    console.log(`LAMBDA EVENT: ${JSON.stringify(event)}`);
    return formatJSONResponse(products);
};
export default getProductsList;
export const main = getProductsList;
//# sourceMappingURL=handler.js.map