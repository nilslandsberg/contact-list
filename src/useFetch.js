import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setData(data.contacts);
        setError(null);
      })
      .catch(err => {
        setError('Cannot access contact list.  Please contact administrator for assistance.');
      })
  }, [url]);

  return { data, error }
}

export default useFetch