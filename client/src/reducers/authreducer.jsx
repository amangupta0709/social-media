import generateError from '../validators/formvalidator'

const authreducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      const [name, value] = action.data
      const newstate = { ...state, [name]: value }

      return newstate
    }
    case 'CHECK': {
      const [formstate, name] = action.data
      const error = generateError(formstate, name)
      const newstate = { ...state, [name]: error }

      return newstate
    }
    default:
      return state
  }
}

export default authreducer
