import React  from 'react';

const Weather = (props) => {
    return (
        <div className="info">
            {
                <p className="info_key"> Temperature: 
                    <span className="info_value"> { props.temperature }	</span>
                </p> 
            }
            {
                <p className="info_key"> city: 
                    <span className="info_value"> { props.city }	</span>
                </p> 
            }
            {
                <p className="info_key"> country: 
                    <span className="info_value"> {props.country}	</span>
                </p> 
            }
            {
                <p className="info_key"> humidity: 
                    <span className="info_value"> {props.humidity}	</span>
                </p> 
            }
            {
                <p className="info_key"> description: 
                    <span className="info_value"> {props.description}	</span>
                </p> 
            }
            {
                <p className="info_key"> error: 
                    <span className="info_value"> {props.error}	</span>
                </p> 
            }
            
            
            
           
        </div>
    )
}

export default Weather;