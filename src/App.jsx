import ReactDOM from 'react-dom'

import WithImport from './WithImport'
import WithoutImport from './WithoutImport'

const App = () => (
  <>
  	<WithImport />
  	<WithoutImport />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
