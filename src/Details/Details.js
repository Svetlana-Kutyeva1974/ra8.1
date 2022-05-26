import React from 'react'
import PropTypes from 'prop-types'
import './Details.css'

import useFetchRequest from '../hook/useFetchRequest';

function Details({ userId, url }) {
  const [{data: user , loading, errorMessage}] = useFetchRequest(url,{});

  let id, name, avatar, details, city, company, position; 
  ({id, name, avatar, ...details} = user);

  const entries = Object.entries(details);
  for (const [key, value] of entries) {
    console.log('key value\n', key, value);
    ({city, company, position} = value);
  }

  if(loading){
    return<div>Loading info...</div>
  }

  if(errorMessage){
    <div>{errorMessage.text}</div>
  }
  
  return (
    <div id={id} className='details-item'>
      <img src={avatar} alt={`${name}`} />
      <div className='block-item'>
      <div className='itemContent'><h3>{`${name}`}</h3></div>
      <div className='itemContent'>{`City: ${city}`}</div>
      <div className='itemContent'>{`Company: ${company}`}</div>
      <div className='itemContent'>{`Position: ${position}`}</div>
      </div>
    </div>
  )
}

Details.propTypes = {
  userId: PropTypes.number,
  url: PropTypes.string.isRequired
}

export default Details;