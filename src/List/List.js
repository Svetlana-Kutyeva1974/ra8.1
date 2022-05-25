import PropTypes from 'prop-types';
import React, {useState } from 'react';
import Details from '../Details/Details';
import './List.css';
import useFetchRequest from '../hook/useFetchRequest';

function List({ url }) {
  console.log('url ---', url);

  //const [list, setList] = useState([]);

  //const [isLoading, setIsLoading] = useState();
  //const [errorMessage, setErrorMessage] = useState(null);
  const [userId, setUserId] = useState();

  const [{data: list, loading, errorMessage}] = useFetchRequest(url,[]);
    console.log('useFetchRequest ---', list,  loading, errorMessage);
  //setList(data);
  console.log('list ---', list);
  /*useEffect(() => {
    setLoading(true);
    return fetch(`${url}users.json`)
      .then((response) => response.json())
      .then((result) => {
        setList(result);
        setErrorMessage(null);
      })
      .catch((e) => {
        setErrorMessage({ state: true, text: e.message });
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 1000);
      });
  
  */

  /*useEffect(() => {
    setIsLoading(true);
    const timerId = setTimeout(async () => {
      try {
        const response = await fetch(`${url}users.json`);
        if (!response.ok) {
          // throw new Error(response.statusText);
          setErrorMessage({ state: true, text: response.statusText });
        }
        const list = await response.json();
        setList(list);
        setErrorMessage(null);
        setIsLoading(false);

        } 
      catch (e) {
        console.error(e);
      }
      finally {
        setIsLoading(false);
      }
      }, 5 * 1000);
    return () => clearTimeout(timerId);
  },[url]);
*/

  function handlerClick(id) {
    setUserId(id);
    console.log('id ---', id);
  }

  //const clockList = clocks.map((item) => <Clock className='clock' key={item.id} onDelete={onDelete} time={item} />)

 function loadedList(){
  return (
      <ul className='clock-list'>
      {list.map(o => <li className='' key={o.id} onClick={() => handlerClick(o.id)}>{o.name}</li>)}
      </ul>
  )
  }

  return (
    <div className='details-list'>
      {(!loading && !errorMessage) ? loadedList() : <div>Loading ...</div>}
      {errorMessage && <div>{errorMessage.text}</div>}
      {userId && <Details url={url} id={userId} />}
    </div>
  )

}

List.propTypes = {
  url: PropTypes.array
}

export default List
