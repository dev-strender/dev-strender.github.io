import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Series',
    Svg: require('../../static/img/series.svg').default,
    description: (
      <>
        시리즈에는 연재할만한 시리즈물들을 정리해놓습니다.
        <br />

        <Link
            className="button button--secondary button--md"
            to="/docs/intro">
            Go to Series
          </Link>
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('../../static/img/blog.svg').default,
    description: (
      <>
        블로그에는 정돈되지 않은 글들을 정리해놓습니다.
        <br />

        <Link
            className="button button--secondary button--md"
            to="/blog">
            Go to Blog
          </Link>
      </>
    ),
  },  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
