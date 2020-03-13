import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCat } from '../../redux/actions';

import './styles.css';

function CatItem({ cat, handleClick }) {
  const breed = cat.breeds[0];

  return (
    <li onClick={() => handleClick(cat)}>
      <div className="cat-avatar">
        <img src={cat.url} alt="Cat" />
      </div>
      <h3>{breed.name}</h3>
      <span>
        <b>Origin:</b> {breed.origin}
      </span>
      <span>
        <b>Life span:</b> {breed.life_span} years
      </span>
      <span>
        <b>Weight:</b> {breed.weight.metric} kg
      </span>
    </li>
  );
}

export default function CatList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cats, loading } = useSelector(state => state.cats);

  function navigateToViewPage(cat) {
    dispatch(selectCat(cat));
    history.push('/view');
  }

  return (
    <main className="cat-list-container">
      <div className="cat-list-header">
        <h2>CAT LIST</h2>
      </div>
      <div className="cat-list-body">
        <ul>
          {/* Here, we avoid using the index as key for mapped elements.
           * Index as keys may cause bugs in some situations and it is
           * considered an anti-pattern on ReactJS.
           */}
          {cats.map(cat => (
            <CatItem key={cat.id} cat={cat} handleClick={navigateToViewPage} />
          ))}
        </ul>
      </div>
    </main>
  );
}
