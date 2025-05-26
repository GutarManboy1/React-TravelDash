import React from 'react'
import Header from '~/components/Header'

const Dashboard = () => {

  const user = { name : "Gutar Manboy"};
  return (
    <main className='dashboard wrapper'>
      <Header title={`Welcome ${user?.name ?? 'Guest'} 👋🏽`}
      description="Track activity, trends and popular destinations"/>

      Dashboard Page Contents
      
    </main>
  )
}

export default Dashboard