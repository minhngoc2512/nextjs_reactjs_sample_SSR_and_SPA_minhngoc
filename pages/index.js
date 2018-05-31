import React from 'react'


class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            data_prop: 'minhngoc'
        }
    }
    // getInitialProps running on server render
    static async getInitialProps({req}){
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        console.log(userAgent);
        return { userAgent };
    }
    componentWillMount(){
        
    }

    render() {
        return (
            <div>
                This is page Home {this.state.data_prop}
            </div>
        )
    }

}

export default Index