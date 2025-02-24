import { useEffect, useState } from "react";
import "./App.css";

import React from "react";

const InfiniteScrolling = ({ products, isLoading }) => {
  if (!products?.length) {
    return <>Not available</>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
      }}
    >
      {products.map((p, index) => {
        return (
          <div
            style={{
              padding: "10px",
              border: "2px solid aqua",
            }}
            key={index}
          >
            <p>{p.title}</p>
            <p>{p.price}</p>
          </div>
        );
      })}
      {isLoading && <div style={{ fontWeight: "bold", padding: "20px", textAlign: "center", backgroundColor: "#f0f0f0" }}>Loading....</div>}
    </div>
  );
};

function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const throttle = (callback, delay) => {
    let lastCall = 0;
    return () => {
      const now = Date.now();
      if (now - lastCall < delay) return;
      callback();
      lastCall = now;
    };
  };

  const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const fetchData = async (skip = 0, limit = 10) => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
      );
      const response = await data.json();
      // Add a small delay to make loading more visible
      await new Promise(resolve => setTimeout(resolve, 500));
      setApiData((prevData) => [...prevData, ...response.products]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 10) {
      fetchData(apiData.length, 10);
    }
  };

  const throttleScroll = throttle(handleScroll, 100);

  useEffect(() => {
    setIsLoading(true);
    fetchData(0, 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, [throttleScroll]);
  return (
    <>
      <div className="App">
        <h1>Infinite Scrolling</h1>
        <InfiniteScrolling products={apiData} isLoading={isLoading} />
      </div>
    </>
  );
}

export default App;
