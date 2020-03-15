import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from '../ProgressBar';
import CatFact from '../CatFact';

import { Pie } from 'react-chartjs-2';

import './styles.css';

export default function FormPage() {
  const { stats } = useSelector(state => state.cats);

  return stats ? (
    <section className="cat-view-info-container">
      <h1>{stats.breed.name}</h1>
      <h3>About</h3>
      <div className="cat-view-breed-info">
        <p>
          <b>Origin:</b> {stats.breed.origin}
        </p>
        <p>
          <b>Life span:</b> {stats.breed.life_span} years
        </p>
        <p>
          <b>Weight:</b> {stats.breed.weight.metric} kg
        </p>
        <p>
          <b>Temperament:</b> {stats.breed.temperament}
        </p>
        <p className="cat-info-description">
          <b>Description:</b> {stats.breed.description}
        </p>
      </div>
      <div className="cat-view-medical-record">
        <a
          className="link-climatempo"
          href={stats.breed.wikipedia_url}
          target="_blank"
          rel="noopener noreferrer">
          View more information
        </a>
      </div>
      <div className="cat-view-additional-info">
        <div className="cat-info-progress">
          <h3>Personality</h3>
          <div className="cat-info-progress-bars">
            <ProgressBar
              personalityTrait="Adaptability"
              level={stats.breed.adaptability}
            />
            <ProgressBar
              personalityTrait="Child friendly"
              level={stats.breed.child_friendly}
            />
            <ProgressBar
              personalityTrait="Health issues"
              level={stats.breed.health_issues}
            />
          </div>
        </div>
        <div className="cat-info-legend">
          <div className="cat-info-average">
            <h3>Average Day</h3>
            <div>
              <CatFact
                color="#5452F6"
                factName="Affection"
                factPercentage={stats.affection}
              />
              <CatFact
                color="#00A3FF"
                factName="Energetic"
                factPercentage={stats.energy}
              />
              <CatFact
                color="#B4D9FF"
                factName="Grooming"
                factPercentage={stats.grooming}
              />
              <CatFact
                color="#3876F3"
                factName="Vocalisation"
                factPercentage={stats.vocalisation}
              />
            </div>
          </div>
          <div className="cat-info-chart">
            <Pie
              data={{
                labels: ['Affection', 'Energetic', 'Grooming', 'Vocalisation'],
                datasets: [
                  {
                    backgroundColor: [
                      '#5452F6',
                      '#00A3FF',
                      '#B4D9FF',
                      '#3876F3',
                    ],
                    data: [
                      stats.affection,
                      stats.energy,
                      stats.grooming,
                      stats.vocalisation,
                    ],
                  },
                ],
              }}
              width={100}
              height={100}
              options={{
                maintainAspectRatio: false,
                legend: {
                  display: false,
                },
                tooltips: {
                  callbacks: {
                    label: function(tooltipItem, data) {
                      return ` ${data['labels'][tooltipItem['index']]}: ${
                        data['datasets'][0]['data'][tooltipItem['index']]
                      }%`;
                    },
                  },
                  enabled: true,
                },
                layout: {
                  padding: {
                    right: 30,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  ) : (
    ''
  );
}
