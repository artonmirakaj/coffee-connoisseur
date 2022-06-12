import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'

const DynamicRoute = () => {
  const router = useRouter()
  const query = router.query;
  console.log(query);
  return (
    <div>
      <Head>
        <title>query: {query}</title>
      </Head>
      Dynamic Route
    </div>
  )
}

export default DynamicRoute