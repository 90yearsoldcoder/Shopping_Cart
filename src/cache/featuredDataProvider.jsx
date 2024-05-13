import React, { useState, useEffect, useContext } from "react";
import { fetchData } from "../data/API";
import PropTypes from "prop-types";

const Context = React.createContext();

export const FeaturedDataProvider = ({ children }) => {
  const [featuredData, setFeaturedData] = useState({});

  useEffect(() => {
    let mounted = true;
    const fetch = async () => {
      const data = await fetchData(
        "https://restaurant.com/filter/featured/true"
      );
      if (mounted) setFeaturedData(data);
    };

    fetch();

    return () => {
      mounted = false;
    };
  }, []);

  return <Context.Provider value={featuredData}>{children}</Context.Provider>;
};

FeaturedDataProvider.propTypes = {
  children: PropTypes.node, // 'node' covers anything that can be rendered: numbers, strings, elements, or an array containing these types.
};

export const useFeaturedProducts = () => {
  const context = useContext(Context);
  if (context === null) {
    throw new Error(
      "useFeaturedProducts must be used within a FeaturedDataProvider"
    );
  }
  return context;
};
