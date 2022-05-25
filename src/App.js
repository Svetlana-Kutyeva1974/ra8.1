//import React, {useState, useEffect} from 'react';
import React from 'react';
import List from './List/List';
import PropTypes from 'prop-types';

export default function App() {
    return (
        <>
        <List url={process.env.REACT_APP_NOTES_URL} />
        </>
    );
}

List.propTypes = {
    url: PropTypes.string
  }
