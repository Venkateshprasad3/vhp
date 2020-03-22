import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Display,Route } from './DisplayjsonComponent';

class AppRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route path='/Display' render={ props => <Display {...props} />} />
            </BrowserRouter>
        )
    }
}
export default AppRouter;