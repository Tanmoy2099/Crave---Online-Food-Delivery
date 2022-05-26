
import ReactDOM from 'react-dom/client'
import { } from "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


import callStoreFunctionsInIndex from './Store/callStoreFunctionsInIndex'
callStoreFunctionsInIndex()


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
