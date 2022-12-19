import About from './about'
import Contact from './contact'
import Content from './content'
import MainText from './main_text'
import Navbar from './navbar'
import Comments from './pages/api/page'
import Skills from './skills'

export default function Home() {
  return (
    <>
      <div className='bg-violet-300'>
        <Navbar/>
        <MainText/>
        <Content/>
        <About/>
        <Skills/>
        <Contact/>
      </div>
    </>
  )
}
