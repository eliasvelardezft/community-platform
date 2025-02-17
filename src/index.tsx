import * as ReactDOM from 'react-dom'
import { initErrorHandler } from './common/Error/handler'
import { App, useCommonStores } from './App'

initErrorHandler()

export { useCommonStores }

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

// Clean up any old service workers
if (navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
}
