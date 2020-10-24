import React from 'react';

function logProps(WrappedComponent){

    return class extends React.Component {

        componentDidUpdate(prevProps) {
            console.log('prev props: ',prevProps)
            console.log('current props: ',this.props);
        }
 
        render(){ 
            return(
                <WrappedComponent {...this.props}/>
            )
        }
    }
}

export default logProps;