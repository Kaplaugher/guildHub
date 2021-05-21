import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guild Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      <main>
        {/* side */}
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
}
