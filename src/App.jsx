import { HashRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen.jsx'
import Navbar from './components/Navbar.jsx'
import HeroCard from './components/HeroCard.jsx'
import CatalogRow from './components/CatalogRow.jsx'
import DetailView from './components/DetailView.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'
import { items, rows } from './data/mockData.js'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCard item={items[0]} />
        {rows.map((row) => (
          <CatalogRow key={row.title} title={row.title} items={row.items} />
        ))}
      </main>
    </>
  )
}

function Detail() {
  return (
    <>
      <Navbar />
      <DetailView />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <SplashScreen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/player/:id" element={<VideoPlayer />} />
      </Routes>
    </HashRouter>
  )
}
