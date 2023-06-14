import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
export default function Home () {
  const id = 'pre-rendering'
  const title = '预加载'

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>OPEN AI</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <li className={utilStyles.listItem} key={id}>
        <Link href={`/posts/${id}`}>
          {title}
        </Link>
        <br />
      </li>
      <Link href='/posts/first-post'>我的第一个页面</Link>
    </Layout>
  )
}