import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCat } from '../../redux/actions';

import './styles.css';

export default function RelatedCats() {
  const dispatch = useDispatch();
  const { cats } = useSelector(state => state.cats);

  function selectNewCat(cat) {
    dispatch(selectCat(cat));
  }

  return (
    <div className="related-cats-container">
      <h1>SEE MORE CATS</h1>
      <div className="related-cats-imgs-container">
        {/* Here, we avoid using the index as key for mapped elements.
         * Index as keys may cause bugs in some situations and it is
         * considered an anti-pattern on ReactJS.
         */}
        {cats.map(cat => (
          <div key={cat.id} className="related-cat-img">
            <img
              src={cat.url}
              alt="other cat"
              onClick={() => selectNewCat(cat)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
