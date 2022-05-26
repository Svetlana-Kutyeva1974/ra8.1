import { useEffect, useState } from 'react';

export default function useFetchRequest(url, initialData) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    //console.log('передали в fetch ---', url, initialData);
    useEffect(() => {
      setLoading(true);
      const timerId = setTimeout(async () => {
        try {
          const response = await fetch(url);
          console.log('response----!!!!!fetch ---', response);
          if (!response.ok) {
            setErrorMessage({ state: true, text: response.statusText });
          }    
          const data = await response.json();
          //console.log('response2----!!!!!fetch ---', response);
          //console.log('data fetch ---\n', data);
          setData(data);
          setErrorMessage(null);
          //setLoading(false);
          } catch (e) {
            console.error(e);
          } finally {
            setLoading(false);
          }
      }, 1000);
      return () => clearTimeout(timerId);
      },[url, data.id]);

  console.log('return fetcha ---', data, loading, errorMessage);
  return [{data, loading, errorMessage}];
}