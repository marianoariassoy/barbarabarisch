import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Informacion from './pages/informacion'
import Interpretacion from './pages/interpretacion'
import Fotos from './pages/interpretacion/Fotos'
import Traduccion from './pages/traduccion'
import Contacto from './pages/contacto'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/informacion'
        component={Informacion}
      />
      <Route
        path='/interpretacion'
        component={Interpretacion}
      />
      <Route
        path='/traduccion'
        component={Traduccion}
      />
      <Route
        path='/contacto'
        component={Contacto}
      />
      <Route
        path='/fotos'
        component={Fotos}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
