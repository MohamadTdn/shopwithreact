import Index from './pages/Index/Index'
import Blog from './pages/Blog/Blog'
import ProductInfo from './pages/ProductInfo/ProductInfo'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Products from './pages/Products/Products'

const routes = [
  {path: '/', element: <Index/>},
  {path: '/blog', element: <Blog/>},
  {path: '/productInfo/:id', element: <ProductInfo/>},
  {path: '/login', element: <Login/>},
  {path: '/register', element: <Register/>},
  {path: '/products', element: <Products/>}
]

export default routes