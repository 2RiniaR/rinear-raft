import { createClient } from "microcms-js-sdk";

const apiKeyName = "MICROCMS_API_KEY";

const apiKey = process.env[apiKeyName];
if (typeof apiKey !== "string") {
  throw TypeError(`環境変数 ${apiKeyName} が存在しません。`);
}

export const client = createClient({
  serviceDomain: "rinear",
  apiKey: apiKey
});
