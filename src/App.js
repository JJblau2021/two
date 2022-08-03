import { BrowserRouter } from 'react-router-dom';
import Routes from './router/index';
export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
