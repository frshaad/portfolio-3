import { About, Home, Layout, Project, Projects } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />}>
            <Route path=':projectId' element={<Project />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
