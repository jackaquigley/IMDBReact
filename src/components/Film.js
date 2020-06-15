import React from 'react'

const Film = (props) => {
  return (
    <div>
    <li> <a href={props.film.url}>{props.film.name}</a> </li>
    </div>
  )
}

export default Film;
