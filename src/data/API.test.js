// sum.test.js
import { expect, it, describe } from "vitest";
import { fetchData } from "./API";
import { data as backendData } from "./data";
import { Error } from "../settings/apiSetting";

describe("fetchData", () => {
  it("returns expected data", async () => {
    const data = await fetchData("https://restaurant.com/filter/type/Dishes");

    let flag = true;

    for (let key in data) {
      if (data[key]["type"] != "Dishes") {
        flag = false;
        break;
      }
    }

    expect(flag).toBe(true);
  });

  it("returns error when no specific request", async () => {
    const data = await fetchData("https://restaurant.com");
    expect(data).toEqual(Error("No Action in the request"));
  });

  it("returns error when the request query is illegal", async () => {
    const data = await fetchData("https://restaurant.com/kkkk");
    expect(data).toHaveProperty("error");
  });

  it("returns error when the parameters are missing", async () => {
    const data = await fetchData("https://restaurant.com/filter/");
    expect(data).toHaveProperty("error");
  });

  it("returns error when the parameters are too many", async () => {
    const data = await fetchData(
      "https://restaurant.com/filter/types/oooo/pppp"
    );
    expect(data).toHaveProperty("error");
  });

  it("returns all data", async () => {
    const data = await fetchData("https://restaurant.com/All");
    expect(data).toEqual(backendData);
  });

  it("only featured data, in simple style", async () => {
    const data = await fetchData("https://restaurant.com/filter/featured/true");

    //console.log(data);
    let flag = true;

    for (let key in data) {
      if (data[key]["featured"] != "true") {
        flag = false;
        break;
      }
    }

    expect(flag).toBe(true);
  });

  it("get detail of an Item with id 1", async () => {
    const data = await fetchData("https://restaurant.com/detail/1");

    expect(data).toEqual(backendData[1]);
  });

  it("search items by name", async () => {
    const data = await fetchData("https://restaurant.com/search/chicken");

    let flag = true;

    for (let key in data) {
      //console.log(data[key]["name"]);
      if (data[key]["name"].toLowerCase().includes("chicken") != true) {
        flag = false;
        break;
      }
    }

    expect(flag).toBe(true);
  });
});
