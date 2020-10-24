import React from 'react';

const loadingHOC = (WrappedComponent, loadingMessage) => {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {loading: true};
        }

        changeLoadingState = (loading) => {
            this.setState({loading: loading})
        }

        getLoadingStatus = () => {
            return this.state.loading;
        }

        render() {
            return (<div>
                {this.state.loading && <h1>{loadingMessage}</h1>}
                <WrappedComponent {...this.props} 
                getLoadingStatus={this.getLoadingStatus}
                changeLoadingIndicator={this.changeLoadingState} />
            </div>)
        }
    }
}

export default loadingHOC;