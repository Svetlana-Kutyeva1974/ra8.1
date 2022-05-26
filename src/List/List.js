import PropTypes from 'prop-types';
import React, {useState } from 'react';
import Details from '../Details/Details';
import './List.css';
import useFetchRequest from '../hook/useFetchRequest';

function List({ url }) {
  const [userId, setUserId] = useState();
  const [{data: list, loading, errorMessage}] = useFetchRequest(`${url}users.json`,[]);

  //console.log('useFetchRequest ---', list,  loading, errorMessage);

  function handlerClick(id) {
    setUserId(id);
    console.log('id ---', id);
  }


  function loadedList(){
    return (
      <ul className='list'>
        {list.map(o => <li className='item-list' key={o.id} onClick={() => handlerClick(o.id)}>{o.name}</li>)}
      </ul>
    )
  }

  return (
    <div className='details-list'>
      {(!loading && !errorMessage) ? loadedList() : <div>Loading ...</div>}
      {errorMessage && <div>{errorMessage.text}</div>}
      {userId && <Details id={userId} url={`${url}${userId}.json`} />}
    </div>
  )

}

List.propTypes = {
  url: PropTypes.string.isRequired
}

export default List;
