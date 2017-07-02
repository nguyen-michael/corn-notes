
import React from 'react';

// this should work?
export default (props) => {


  return(

        <li><a href={"#" + props.elementID}>{props.name}</a></li>
  );
};



