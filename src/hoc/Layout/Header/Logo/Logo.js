import React from 'react';

const logo = (props) => {
    return (
      props.options.required ?         
      (
      <a href="/" className="logo">
      
      <span className="logo-mini"><b>{props.options.content.mini[0]}</b>{[props.options.content.mini[1],props.options.content.mini[2]].join('')}</span>
 
      <span className="logo-lg"><b>{props.options.content.large[0]}</b>{props.options.content.large[1]}</span>
      </a>
      )
    :null
   )
}
 
export default logo;