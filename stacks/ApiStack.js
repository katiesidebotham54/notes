import {Api, use} from "sst/constructs"
import {StorageStack} from "./StorageStack"

//creating new stack for API which references table resource from StorageStack
//creating API using SST's Api construct
//binding DB table to API using bind prop, allowing API to access table
//first route POST/notes used to create a note
//printing URL of API with stack.addOutputs, make API public for other stacks to reference
export function ApiStack({stack, app}) {
    const {table} = use(StorageStack);
    //Create the API
    const api = new Api(stack, "Api", {
        defaults: {
            function: {
                bind: [table],
            },
        },
        routes: {
            "POST /notes": "packages/functions/src/create.main",
        },
    });

    //Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    });

    //Return the API resource
    return{
        api,
    };
}

