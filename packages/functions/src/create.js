import * as uuid from "uuid";
import AWS from "aws-sdk";
import {Table} from "sst/node/table";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export async function main(event) {
    //Request body is passed in as JSON encoded string in event.body
    const data = JSON.parse(event.body);

    const params = {
        //access DynamoDB table; Table.Notes is name of Table construct 
        TableName: Table.Notes.tableName,
        Item: {
            //The attributes of the item to be created
            userId: "123", // id of the author, hardcoded but will authenticate later
            noteId: uuid.v1(), // unique uuid
            content: data.content, //Parsed from request body
            attachment: data.attachment, //Parsed from request body
            createdAt: Date.now(), // Current Unix timestamp
        },
    };
    try {
        await dynamoDB.put(params).params();
        return{
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch (e) {
        return{
            statusCode: 500,
            body: JSON.stringify({error:e.message}),
        };
    }
}