import React from 'react'
import { initFlowbite } from 'flowbite'
import { ThemeProvider } from './Components/context/ThemeContext'
import { useRoutes } from 'react-router'
import routes from './routes'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Layout from './Components/Layout/Layout'
import './App.css'

export default function App() {

  const router = useRoutes(routes)

  return (
    <>
      <ThemeProvider>
        <ScrollToTop />
        <Layout>
          <div>
            {router}
          </div>
        </Layout>
      </ThemeProvider>
    </>
  )
}
