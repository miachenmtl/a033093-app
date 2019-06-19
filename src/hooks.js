import { useState, useEffect } from "react";

// Thank you https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchUrl = async (url) => {
    const response = await fetch(url);
    const text = await response.text();
    let dataArray = text.split('\n');
    let data = new Float32Array(2000000);
    for (let i = 0; i < 1000000; i += 1) {
      let row = dataArray[i].split(',');
      data.set(row, 2 * i);
    }
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl(url);
  }, [url]);
  return [data, loading];
}
export { useFetch };
