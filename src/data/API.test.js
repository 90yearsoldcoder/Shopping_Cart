// sum.test.js
import { expect, it, describe } from "vitest";
import { fetchData } from "./API";
import { data as backendData } from "./data";
import { Error } from "../settings/apiSetting";

describe("fetchData", () => {
  it("returns expected data", async () => {
    const data = await fetchData("https://restaurant.com/filter/type/Dishes");
    expect(data).toEqual(backendData);
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
    const data = await fetchData("https://restaurant.com/filter/type/Dishes");
    expect(data).toEqual(backendData);
  });
});
