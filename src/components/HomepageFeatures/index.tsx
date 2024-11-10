// @ts-ignore
import React from 'react';
// @ts-ignore
import clsx from 'clsx';
// @ts-ignore
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'All TPC information in one place',
    Svg: require('@site/static/img/undraw_aircraft_re_m05i.svg').default,
    description: (
      <>
        No more looking around for information for The Pilot Club Resources! We have brought all of our information here!
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_coding_re_iv62.svg').default,
    description: (
      <>
        Focus on flying in your simulator and not worrying about trying to find information!
      </>
    ),
  },
  {
    title: 'Everything you need to get started',
    Svg: require('@site/static/img/undraw_community_re_cyrm.svg').default,
    description: (
      <>
          Everything you need to integrate with our public APIs is here. From documentation to code samples, we've got you covered.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
