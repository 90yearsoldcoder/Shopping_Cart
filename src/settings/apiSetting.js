export const APIroutes = {
  All: [],
  filter: ["filter_by", "value"],
  detail: ["id"],
};

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
};

export const Error = (msg) => {
  return { error: msg };
};
