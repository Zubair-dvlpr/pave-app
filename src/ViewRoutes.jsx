import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'

import ErrorPage from './pages/ErrorPage.jsx/index.jsx'
import Home from './pages/Home/index.jsx'



const ViewRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={
          <DefaultLayout >
           <Home />
          </DefaultLayout>
        }
        />
        
        <Route path='*' element={
          <DefaultLayout >
            <ErrorPage />
          </DefaultLayout>
        }
        />
      </Routes>
    </React.Fragment>
  )
}

export default ViewRoutes