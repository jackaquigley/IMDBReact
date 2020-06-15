import React, {Fragment} from 'react';
import Film from './Film.js'

const FilmList = (props) => {
  const filmNodes = props.films.map((film) =>{
    return <Film film={film} />
  })

  return (
  <Fragment>
  <ul> {filmNodes} </ul>
  </Fragment>
)

}

export default FilmList;
