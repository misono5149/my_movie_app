import React from "react";

class Detail extends React.Component{
    componentDidMount(){ //second
        const { location, history } = this.props;
        if(location.state === undefined){ // doesn't have state
            history.push("/"); //go back home
        }
    }
    
    render(){ //first
        const {location} = this.props;
        if(location.state){
            return(
                <span>{location.state.title}</span>
            )
        }
        else{
            return null;
        }
       
    }
}
export default Detail;