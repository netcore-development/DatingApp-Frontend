import React, { Fragment } from 'react';
import Navigation from '../components/Navigation/Navigation';

const Layout = () => {
    return ( 
        <Fragment>
            <Navigation></Navigation>
            <main className="container">
                <div>Componentes hijos</div>
            </main>
        </Fragment>
     );
}
 
export default Layout;