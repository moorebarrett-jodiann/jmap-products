import {useState} from 'react';

function OpenLoginButton({value, classes}) {

  return (
    <button 
      className={classes} 
      data-bs-toggle="modal" 
      data-bs-target="#loginModal"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        }}
      >{value}</button>
  )
}

export default OpenLoginButton