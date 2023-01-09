import React, { useEffect, useState } from 'react'

const useFetch = (url = "", options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch(url).then(response=>response.json()).then(data=>{
        setData(data)
    })
  },[url])
  return { data, error };
};

export default useFetch;
