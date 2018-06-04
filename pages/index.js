import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();
import NoSsr from 'react-no-ssr';
import $ from 'jquery';
import isBot from 'isbot';

import {addTodo} from "../app/redux/actions/actions";
import {removeTodo} from "../app/redux/actions/actions";

class Index extends React.Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            data_prop: 'minhngoc'
        }
    }
    // getInitialProps running on server render
    static async getInitialProps({req,store}){
        store.dispatch(addTodo({store_reduxt:'demo_data'}));
        // store.dispatch(removeTodo({store_reduxt:''}));
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        // console.log('user-agent:'+isBot(userAgent));
        return { userAgent:'sdf',data_prop:'sdsd' };
    }
    componentDidMount(){
        console.log(publicRuntimeConfig.domain_api);
        if(window){
            $('.home').css('color','blue');
        }

    }

    render() {
        return (
            <div className="home">
                This is page Home {this.state.data_prop}
            </div>
        )
    }

}

export default Index