export const APIroutes = {
  All: [],
  filter: ["filter_by", "value"],
};

export const handler = {
  error: ({ query }) => {
    return query["error"];
  },
  All: ({ data }) => {
    return data;
  },
  filter: ({ query, data }) => {
    return data.filter((item) => item[query["filter_by"]] === query["value"]);
  },
};

export const Error = (msg) => {
  return { error: msg };
};
