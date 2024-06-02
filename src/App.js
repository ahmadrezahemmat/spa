import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import NotFound from './components/NotFound/NotFound'
function App(){
    return(
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/blog' element={<Blog/>}/>
             <Route path='*' element={<NotFound/>}/>

          </Routes>
       </BrowserRouter>
    )
}
export default App