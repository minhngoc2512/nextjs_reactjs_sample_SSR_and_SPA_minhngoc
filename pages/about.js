import React from "react";

class About extends React.Component {
    static async getInitialProps({req}){
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        console.log('Page about:'+Math.random());
        return { userAgent:'sdf',data_prop:'sdsd' };
    }
    render() {
        return (
            <div>
                <div>
                    <h1>This is page about!!!!!!!!</h1>
                </div>
            </div>
        );
    }
}
export default About;
