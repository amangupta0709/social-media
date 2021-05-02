import { Route, Switch } from 'react-router-dom'
import Logo from './Logo'
import Login from './Login'
import Register from './Register'
import './auth.css'

const authroutes = (props) => {
  //const loginpath = props.match.path + '/'
  //const registerpath = props.match.path + '/register'
  return (
    <div className='container align-items-center'>
      <div className='row py-5 mt-4'>
        <Logo />
        <div className='col-md-6 col-lg-6 ml-auto'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default authroutes
