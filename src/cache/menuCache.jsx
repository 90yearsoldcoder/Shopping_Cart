import { createContext, useContext, useState, useEffect } from "react";
import { fetchData } from "../data/API";
import PropTypes from "prop-types";

//create context
const menuContext = createContext();

//define context provider
export const MenuCacheProvider = ({ children }) => {
  const [menuCache, setMenuCache] = useState();

  //pre-download featured Menu
  useEffect(() => {
    let mounted = true;
    const fetch = async () => {
      const data = await fetchData(
        "https://restaurant.com/filter/featured/true"
      );
      if (mounted)
        setMenuCache((preCache) => ({ ...preCache, featured: data }));
    };

    fetch();

    return () => {
      mounted = false;
    };
  }, [setMenuCache]);

  async function updateMenuCache_byCate(cate) {
    if (cate in menuCache) return;
    const data = await fetchData(`https://restaurant.com/filter/type/${cate}`);
    //Be careful, the setState in React is async
    setMenuCache((preCache) => {
      const updatedCache = { ...preCache, [cate]: data }; // Use [cate] to use the value of cate as the key
      //console.log(updatedCache); // Logs the new state after the update
      return updatedCache;
    });
  }

  async function updateMenuCache_bySearch(name) {
    const data =
      name === ""
        ? {}
        : await fetchData(`https://restaurant.com/search/${name}`);
    setMenuCache((preCache) => {
      const updatedCache = { ...preCache, search: data }; // Use [cate] to use the value of cate as the key
      //console.log(updatedCache); // Logs the new state after the update
      return updatedCache;
    });
  }

  return (
    <menuContext.Provider
      value={{ menuCache, updateMenuCache_byCate, updateMenuCache_bySearch }}
    >
      {children}
    </menuContext.Provider>
  );
};

MenuCacheProvider.propTypes = {
  children: PropTypes.node, // 'node' covers anything that can be rendered: numbers, strings, elements, or an array containing these types.
};

//hook to use the context data
export const useMenuCache = () => {
  const context = useContext(menuContext);
  if (context === null) {
    throw new Error("useMenuCache must be used within a MenuCacheProvider");
  }
  return context;
};
