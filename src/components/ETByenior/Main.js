import Majors from './majors.json';
import { Redirect, useLocation } from 'react-router-dom';

const majorsData = Majors; 


const Main = (props) => {

    const location = useLocation();
    const stdName = location.state.name;
    const stdID = location.state.stdID;
    const major = majorsData.find((major) => major.mjId === stdID.substring(3, 6))

    if(!props.authorized){
        return <Redirect to='/'/>
    }


    return(
        <div>
            {stdName} รหัสนักศึกษา {stdID} สาขา {major.mjName}
        </div>
    )
}

export default Main;