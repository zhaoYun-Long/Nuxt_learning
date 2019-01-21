import axios from 'axios'

let options = {
  timeout: 5000
}

export default axios.create(options)