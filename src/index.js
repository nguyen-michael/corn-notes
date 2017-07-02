
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { makeMainRoutes } from './routes';
const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
