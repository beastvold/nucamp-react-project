import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites.js';

class Main extends Component {
    // State data for the Main app includes an array of campsite objects (soon to
    //  be pulled more officially from a database) and whether a campsite has been
    //  selected.
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
        };
    }

    // This shows the high level display. Different components are rendered for
    //  the sake of encapsulation:
    //      ReactStrap Navbar
    //      Our Directory component - a responsive display of campsite images and titles
    //      Our CampsiteInfo component - more detail of a selected campsite with comments 
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;