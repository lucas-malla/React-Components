import React from 'react';
import image from '../assets/images/logo-DH.png';
import { Link, Route, Switch } from 'react-router-dom';

import GenresInDb from './GenresInDb';
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import Error from './Error404';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Genres</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Then Movies</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Content</span></Link>
                </li>

                {/*<!-- Chart -->*/}
                
                <li className="nav-item">
                    <Link className="nav-link" to="Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Chart Descripción</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route path='/Chart' exact={true} component={Chart}/>
                <Route path='/ContentRowMovies' exact={true} component={ContentRowMovies}/>
                <Route path='/LastMovieInDb' exact={true} component={LastMovieInDb}/>
                <Route path='/GenresInDb' exact={true} component={GenresInDb}/>
                <Route path='/' exact={true} component={ContentWrapper}/>
                <Route exact={true} component={Error}/>
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;