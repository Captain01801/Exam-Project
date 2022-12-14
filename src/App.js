import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Hobbies from './components/Hobbies'
import Gaming from './components/Gaming'
import Cooking from './components/Cooking'
import { ErrorBoundary } from 'react-error-boundary'
// import ErrorFallback from './components/ErrorFallBack'
import ErrorHandler from './components/ErrorHandler'
import { Profile } from './components/Profile'
import { AuthProvider } from './components/Auth'
import { RequireAuth } from './components/RequireAuth'
import { Login } from './components/Login'

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <ErrorBoundary FallbackComponent={ErrorHandler}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='hobbies' element={<Hobbies />}>
              <Route path='gaming' element={<Gaming />} />
              <Route path='cooking' element={<Cooking />} />
            </Route>
            <Route
              path='profile'
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path='login' element={<Login />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </AuthProvider>
    </>
  )
}

export default App