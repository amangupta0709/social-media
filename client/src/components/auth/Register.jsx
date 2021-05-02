import { useReducer } from 'react'
import { Link } from 'react-router-dom'
import './auth.css'
import authreducer from '../../reducers/authreducer'
import Error from './Error'

const defaultState = {
  username: '',
  email: '',
  password: '',
  password2: '',
}

const Register = () => {
  const [formstate, dispatchState] = useReducer(authreducer, defaultState)
  const [errors, dispatchErrors] = useReducer(authreducer, defaultState)

  return (
    <form>
      <h1>Sign Up</h1>
      <div className='mb-3'>
        <label htmlFor='inputusername' className='form-label'>
          Username
        </label>
        <input
          type='text'
          className={`form-control ${errors.username !== '' ? 'invalid' : ''}`}
          id='inputusername'
          name='username'
          onChange={(e) =>
            dispatchState({
              type: 'UPDATE',
              data: [e.target.name, e.target.value],
            })
          }
          onBlur={(e) => {
            dispatchErrors({
              type: 'CHECK',
              data: [formstate, e.target.name],
            })
          }}
        />
        <Error error={errors.username} />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputemail' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className={`form-control ${errors.email !== '' ? 'invalid' : ''}`}
          id='inputemail'
          name='email'
          onChange={(e) =>
            dispatchState({
              type: 'UPDATE',
              data: [e.target.name, e.target.value],
            })
          }
          onBlur={(e) => {
            dispatchErrors({
              type: 'CHECK',
              data: [formstate, e.target.name],
            })
          }}
        />
        <Error error={errors.email} />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputpassword' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className={`form-control ${errors.password !== '' ? 'invalid' : ''}`}
          id='inputpassword'
          name='password'
          onChange={(e) =>
            dispatchState({
              type: 'UPDATE',
              data: [e.target.name, e.target.value],
            })
          }
          onBlur={(e) => {
            dispatchErrors({
              type: 'CHECK',
              data: [formstate, e.target.name],
            })
          }}
        />
        <Error error={errors.password} />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputpassword2' className='form-label'>
          Confirm Password
        </label>
        <input
          type='password'
          className={`form-control ${errors.password2 !== '' ? 'invalid' : ''}`}
          id='inputpassword2'
          name='password2'
          onChange={(e) =>
            dispatchState({
              type: 'UPDATE',
              data: [e.target.name, e.target.value],
            })
          }
          onBlur={(e) => {
            dispatchErrors({
              type: 'CHECK',
              data: [formstate, e.target.name],
            })
          }}
        />
        <Error error={errors.password2} />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
      <div className='w-100 mt-3'>
        <p className='text-muted font-weight-bold'>
          Already Registered?{' '}
          <Link to='/' className='text-primary ml-2'>
            Login
          </Link>
        </p>
      </div>
    </form>
  )
}

export default Register
