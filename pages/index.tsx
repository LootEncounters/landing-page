import Link from 'next/link';
import Layout from '@components/Layout';
import styles from '@styles/pages/Home.module.scss';

// Types
import type { ReactElement } from 'react';

const Home: NextPage = () => {

  const quicklinks: Record<string, string>[] = [
    { name: 'Loot OpenSea', url: 'https://opensea.io/collection/lootproject' },
    { name: 'Characters OpenSea', url: 'https://opensea.io/collection/characters-for-loot' },
    { name: 'Twitter', url: 'https://twitter.com/lootencounters' },
    { name: 'Discord', url: 'https://discord.gg/w4UwKBrGdV' }
  ];

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          <h1>Encounters</h1>

          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                </li>
              )
            })}
          </ul>

          <p>Encounters is based on loot project and its derivatives, namely Characters. With plans to further include additonal derivatives as time goes on. The team came together through the loot project discord. We're excited to launch something soon that we're hoping the community will enjoy.</p>
          <br />
          <p>If you would like to see what the team is up to, follow along on Twitter or join come join us in Discord, both linked above.</p>

          <h2>Coming Soon!</h2>
        </div>
      </div>
    </Layout>

  )
}

export default Home
