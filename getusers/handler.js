var AWS = require('aws-sdk');

let dynamoDBClientParams = {}


if (process.env.IS_OFFLINE) {
  dynamoDBClientParams = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULTACCESSKEY',  // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULTSECRET'
  }
}

const dynamodb = new AWS.DynamoDB.DocumentClient(dynamoDBClientParams)

const getUsers = async (event, context) => {

    let userId = event.pathParameters.id

    var params = {
        ExpressionAttributeValues: { ':pk': userId},
        KeyConditionExpression: " pk = :pk",
        TableName: "usersTable"
      };
  
      return dynamodb.query(params).promise().then(res => {
        console.log(res)
        return {
            "statusCode": 200,
            "body": JSON.stringify( {'user': res})
        }
      })
}

module.exports = {
    getUsers
}
