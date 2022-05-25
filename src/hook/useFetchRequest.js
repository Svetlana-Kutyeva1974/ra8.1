//import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function useFetchRequest(url, initialData) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    //const [list, setList] = useState([]);

    const [errorMessage, setErrorMessage] = useState(null);
    //const [userId, setUserId] = useState();
    console.log('передали в fetch ---', url, initialData);
useEffect(() => {
    setLoading(true);
    const timerId = setTimeout(async () => {
      try {
        const response = await fetch(`${url}users.json`);
        console.log('response----!!!!!fetch ---', response);
        if (!response.ok) {
          // throw new Error(response.statusText);
          setErrorMessage({ state: true, text: response.statusText });
        }
        
        const data = await response.json();
        console.log('response2----!!!!!fetch ---', response);
        console.log('data fetch ---\n', data);
        setData(data);// это своя data
        setErrorMessage(null);
        setLoading(false);

        } 
      catch (e) {
        console.error(e);
      }
      finally {
        setLoading(false);
      }
      }, 1000);
    return () => clearTimeout(timerId);
  },[url]);

  console.log('return fetcha ---', data, loading, errorMessage);
  return [{data, loading, errorMessage}];
  }