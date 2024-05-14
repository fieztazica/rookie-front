"use client";

import dataProviderNestjsQuery, {
  GraphQLClient,
  liveProvider as liveProviderNestjsQuery,
} from "@refinedev/nestjs-query";
import { createClient } from "graphql-ws";

const API_URL = "http://localhost:7000/graphql";
const WS_URL = "wss://localhost:7000/graphql";

const gqlClient = new GraphQLClient(API_URL);
const wsClient = createClient({ url: WS_URL });

export const dataProvider = dataProviderNestjsQuery(gqlClient);
export const liveProvider = liveProviderNestjsQuery(wsClient);
