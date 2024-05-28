import { createContext, useContext, useState } from "react";
import { fetchData } from "../data/API";
import PropTypes from "prop-types";

// create context
const detailCacheContext = createContext();

//define context provider
export const DetailCacheProvider = ({ children }) => {
  const [detailCache, setDetailCache] = useState({});

  async function updateDetail(id) {
    if (id in detailCache) return;

    const data = await fetchData(`https://restaurant.com/detail/${id}`);
    setDetailCache((preCache) => {
      const updatedCache = { ...preCache, [id]: data }; // Use [cate] to use the value of cate as the key
      //console.log(updatedCache); // Logs the new state after the update
      return updatedCache;
    });
  }

  return (
    <detailCacheContext.Provider value={{ detailCache, updateDetail }}>
      {children}
    </detailCacheContext.Provider>
  );
};

DetailCacheProvider.propTypes = {
  children: PropTypes.node, // 'node' covers anything that can be rendered: numbers, strings, elements, or an array containing these types.
};

export const useDetailCache = () => {
  const context = useContext(detailCacheContext);
  if (context === null) {
    throw new Error("useMenuCache must be used within a DetailCacheProvider");
  }
  return context;
};
