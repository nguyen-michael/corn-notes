
import React from 'react';

// this should work?
export default (props) => {


  return(

   <div className="col s6 m3 noteCard">

                <div className="card small">
                    <div className="card-image">
                        <img src={this.prop.cardImage} />
                        <span className="card-title text-shadow">{props.header} - {props.subheader}</span>
                    </div>
                    <div className="card-content">
                        <p>{props.summary}</p>
                    </div>
                    <div className="card-action">
                        <a href={props.link}>See Note</a>
                    </div>
                </div>

            </div>
  );
};
