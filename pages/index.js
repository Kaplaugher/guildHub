import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db } from '../firebase';

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-theme-bg overflow-hidden">
      <Head>
        <title>Guild Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      <main className="flex">
        {/* side */}
        <Sidebar />
        {/* feed */}
        <Feed posts={posts} />
        {/* widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // get users
  const session = await getSession(context);
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
