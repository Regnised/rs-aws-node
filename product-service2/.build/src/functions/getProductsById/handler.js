import { formatJSONResponse } from '@libs/apiGateway';
import products from '../../db/products';
const getProductsById = async (event) => {
    console.log(`LOG LAMBDA getProductsById: ${JSON.stringify(event)}`);
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
        };
    }
    return formatJSONResponse(product);
};
export default getProductsById;
export const main = getProductsById;
//# sourceMappingURL=handler.js.map