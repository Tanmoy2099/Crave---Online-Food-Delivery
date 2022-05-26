import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useStore } from './Store/store'
import { AuthProvider } from './contexts/AuthContext'

import LoadingSpinner from './components/Layout/UI/Spinner/LoadingSpinner'

const UserProfile = lazy(() => import('./PrivateRoute/UserProfile'))
const Navbar = lazy(() => import('./components/Layout/Navbar/Navbar'))
const Header = lazy(() => import('./components/Layout/Header/Header'))
const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'))
const Footer = lazy(() => import('./components/Layout/Footer/Footer'))
const YourOrder = lazy(() => import('./components/OrderRoute/YourOrder'))
const Sweets = lazy(() => import('./components/Layout/FoodCategories/Sweets'))
const FastFood = lazy(() => import('./components/Layout/FoodCategories/FastFood'))
const MainSection = lazy(() => import('./components/Layout/MainSection/MainSection'))
const Vegetarian = lazy(() => import('./components/Layout/FoodCategories/Vegetarian'))
const AllTypeFood = lazy(() => import('./components/Layout/FoodCategories/AllTypeFood'))
const NonVegetarian = lazy(() => import('./components/Layout/FoodCategories/NonVegetarian'))



const App = () => {

  const { isLoggedIn } = useStore()[0]
  return <>
    <AuthProvider>
      <Suspense fallback={
        <div className='centered'><LoadingSpinner /> </div>}>
        <Navbar />

        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/your-orders' element={<Navigate to='/your-orders/all-food' />} />

          {isLoggedIn ? <Route path='/user-profile' element={<Navigate to='/user-profile/:userProfile' />} />
            : <Route path='/user-profile/*' element={<Navigate to='/home' />} />}

          {isLoggedIn && <Route path='/user-profile/*' element={<UserProfile />} >
            <Route path=':userProfile' element={<UserProfile />} />
          </Route>}
          
          <Route path='/home' element={<><Header /><MainSection /></>} />
          <Route path='/your-orders/*' element={<YourOrder />}>
            <Route path={`all-category`} element={<AllTypeFood />} />
            <Route path={`non-veg`} element={<NonVegetarian />} />
            <Route path={`veg`} element={<Vegetarian />} />
            <Route path={`fast-food`} element={<FastFood />} />
            <Route path={`sweets`} element={<Sweets />} />
          </Route>
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </AuthProvider>
  </>
}

export default App
