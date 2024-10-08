// 'use client'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { Metadata } from 'next'
// import HeavyComponent from './components/HeavyComponent'
// import { useState } from 'react'
import dynamic from 'next/dynamic'
// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>
//   })
// import _ from 'lodash'

export default async function Home() {
  const session = await getServerSession(authOptions)

  // const [isVisible, setIsVisible] = useState(false)

  return (
    <main>
      <h1 className="font-poppins">Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <button onClick={() => setIsVisible(true)}>Show</button> */}
      {/* {isVisible && <HeavyComponent />} */}

      {/* <button onClick={async () => {
        const _ = (await import('lodash')).default;

        const users = [
          { name: 'c' },
          { name: 'b' },
          { name: 'a' },
        ];

        const sorted = _.orderBy(users, ['name'])

      }}>Show</button> */}

    </main>
  )
}

// export const metadata: Metadata= {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
//   openGraph: {
//     title: 'Create Next App',
//     description: 'Generated by Create Next App',
//   }
// }


// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('')

//   return {
//     title: product.title,
//     description: product.description,
//   }
// }
