import { data } from "./data.js";
import { Error, APIroutes, handler } from "../settings/apiSetting.js";

//This is a fake network. fakeCache
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

function parseURL(url) {
  const path = new URL(url).pathname; // Extract the path from the URL
  const segments = path.split("/").filter((part) => part); // Split and remove empty segments

  if (segments.length === 0)
    return { action: "error", error: Error("No Action in the request") };
  if (!APIroutes[segments[0]])
    return { action: "error", error: Error("Wrong Action") };
  if (segments.length - 1 != APIroutes[segments[0]].length)
    return { action: "error", error: Error("Cannot parse parameters") };

  let req = { action: segments[0] };
  for (let i = 1; i < segments.length; i++)
    req[APIroutes[segments[0]][i - 1]] = segments[i];

  return req;
}

export async function fetchData(request) {
  await fakeNetwork(request);
  const query = parseURL(request);
  const res = handler[query["action"]]({ data: data, query: query });
  return res;
}
