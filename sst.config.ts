import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { FrontendStack } from "./stacks/FrontendStack";
import {ApiStack} from "./stacks/ApiStack"


export default {
  config(_input) {
    return {
      name: "notes",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack)
    .stack(ApiStack)
    .stack(FrontendStack)
  },
} satisfies SSTConfig;