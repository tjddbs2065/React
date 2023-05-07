import React, {useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";


class DetailC extends React.Component{

    componentDidMount(){
    }
    render(){
        const {location} = this.props;
        console.log(location);
        if(!(location.state === null)){
            return <span>{location.state.title}</span>;
        }
        else{
            console.log('failed');
            return null;
        }
    }
}

function Detail(props){
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(location.state === null){
            console.log("execute");
            navigate('/');
        }
    },[location, navigate]);

    return <DetailC location={location} navigate={navigate}/>;
}

export default Detail;