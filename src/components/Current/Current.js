import React from 'react';
import {Link} from 'react-router-dom';
import './Current.css';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
function Current(){
    return(
        <div className="Buybody">
            <h1 className="title">Current Vehicles</h1>
            <div className="quotes">
                <Link to={{
                        pathname :"/currentvehicle/display",
                        aboutProps:{
                            type : "scooter"
                        }
                    }}>
                    <div className="card">
                        <div className="box box1">
                            <DirectionsBikeIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">SCOOTER</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
                <Link to={{
                    pathname :"/currentvehicle/display",
                    aboutProps:{
                        type : "bike"
                        }
                    }}>
                    <div className="card">
                        <div className="box box2">
                            <MotorcycleIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">BIKE</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
                <Link to={{
                        pathname :"/currentvehicle/display",
                        aboutProps:{
                            type : "car"
                        }
                    }}>
                    <div className="card">
                        <div className="box box3">
                            <DriveEtaIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">CAR</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
                <Link to={{
                        pathname :"/currentvehicle/display",
                        aboutProps:{
                            type : "truck"
                        }
                    }}>
                    <div className="card">
                        <div className="box box4">
                            <LocalShippingIcon style={{ fontSize: 70 }}/>
                            <h1 className="vehicleName">TRUCK</h1>
                        </div>
                        <div className="bg"></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Current;