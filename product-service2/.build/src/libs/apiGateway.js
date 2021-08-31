export const formatJSONResponse = (response) => {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(response)
    };
};
//# sourceMappingURL=apiGateway.js.map