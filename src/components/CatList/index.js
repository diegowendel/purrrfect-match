import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCat } from '../../redux/actions';

import cat from '../../assets/img/cat.png';
import catLoading from '../../assets/svg/cat_loading.svg';

import './styles.css';

function CatItem({ cat, handleClick }) {
  const breed = cat.breeds[0];

  return (
    <li onClick={() => handleClick(cat)}>
      <div className="cat-avatar">
        <img src={cat.url} alt="Cat" />
      </div>
      <div className="cat-line-info">
        <h3>{breed.name}</h3>
        <p>
          <b>Origin:</b> {breed.origin}
        </p>
        <p>
          <b>Life span:</b> {breed.life_span} years
        </p>
        <p>
          <b>Weight:</b> {breed.weight.metric} kg
        </p>
      </div>
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
        {loading ? (
          <div className="cat-list-body-loader">
            <img src={catLoading} alt="loading" />
          </div>
        ) : cats.length > 0 ? (
          <ul>
            {/* Here, we avoid using the index as key for mapped elements.
             * Index as keys may cause bugs in some situations and it is
             * considered an anti-pattern on ReactJS.
             */}
            {cats.map(cat => (
              <CatItem
                key={cat.id}
                cat={cat}
                handleClick={navigateToViewPage}
              />
            ))}
          </ul>
        ) : (
          <div className="cat-list-body-empty">
            <img src={cat} alt="empty list" />
            <h2>Let's start searching for some kitties!</h2>
          </div>
        )}
      </div>
    </main>
  );
}
