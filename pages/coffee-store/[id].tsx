import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {
  const router = useRouter()
  console.log('router: ', router);
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">
        <a>back To Home</a>
      </Link>
    </div>
  )
}

export default CoffeeStore