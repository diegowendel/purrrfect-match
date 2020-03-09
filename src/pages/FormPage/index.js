import React from 'react';
import CatForm from '../../components/CatForm';
import CatFormBanner from '../../components/CatFormBanner';

import './styles.css';

export default function FormPage() {
  return (
    <div className="form-page-container">
      <CatFormBanner />
      <CatForm />
    </div>
  );
}
