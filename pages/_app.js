import React from 'react'
import App, {Container} from 'next/app'
import Header from "../components/Header"
import NoSSR from 'react-no-ssr';
import {Provider} from 'react-redux'

import {createStore} from 'redux';
import rootReducer from '../app/redux/reducers/index';
import withRedux from "next-redux-wrapper";

// initialState
const initialState = {}

// Create store
// let store =null
// if(typeof window !='undefined'){
//     store = createStore(rootReducer, initialState,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
// }else{
//     store = createStore(rootReducer, initialState);
// }

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

const makeStore = (initialState, options) => {
    if (typeof window != 'undefined') {
        return createStore(rootReducer, initialState,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    } else {
        return createStore(rootReducer, initialState);
    }
};

class Layout extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className='layout'>
                {children}
            </div>
        )
    }
}

class MyApp extends App {
    constructor(props) {
        super(props);
        if (typeof  window !== 'undefined') {
        } else {

            this.state = {
                status_ssr: true
            }
        }

    }

    render() {
        const {Component, pageProps, store} = this.props
        return (
            <Container>
                <Layout>
                    <NoSSR>
                        <Header/>
                    </NoSSR>
                    <Provider store={store}>
                        <NoSSR>
                        <Component {...pageProps}/>
                        </NoSSR>
                    </Provider>
                    <NoSSR>
                        <div><h2>This is footer</h2></div>
                    </NoSSR>
                </Layout>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);