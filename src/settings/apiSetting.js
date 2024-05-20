// Keywords for API request
export const APIroutes = {
  All: [],
  filter: ["filter_by", "value"],
  detail: ["id"],
  search: ["name"],
};

// Handler for each API
export const handler = {
  error: ({ query }) => {
    return query["error"];
  },
  All: ({ data }) => {
    return data;
  },
  filter: ({ query, data }) => {
    let res = {};
    for (const [key, value] of Object.entries(data))
      if (value[query["filter_by"]] === query["value"]) {
        // eslint-disable-next-line no-unused-vars
        const { Desc, ...rest } = value;
        res[key] = rest;
      }
    return res;
  },
  detail: ({ query, data }) => {
    return data[query["id"]];
  },
  search: ({ query, data }) => {
    let res = {};
    let query_name = query["name"].toLowerCase();
    for (const [key, value] of Object.entries(data))
      if (value["name"].toLowerCase().includes(query_name)) {
        // eslint-disable-next-line no-unused-vars
        const { Desc, ...rest } = value;
        res[key] = rest;
      }
    return res;
  },
};

export const Error = (msg) => {
  return { error: msg };
};
