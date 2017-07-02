import React, { Component } from "react";
import ListElement from "./scrollSpyListElement";

//can decide to pass in list elements to dynamically generate the side nav
class ScrollSpy extends Component {
    constructor(props) {

        super(props);
    }

    renderList() {
       
        return this.props.listElements.map((listEl, index) => (
            <div >
                <ListElement elementID={listEl.id} name={listEl.name}
                key={index}/>
            </div>
        ));
    }

    render() {
        return (

             <div className="col hide-on-small-only m3 l2">
                    <div className="toc-wrapper pinned" style={styles.wrapperStyle}>
                        <a href="#" data-activates="slide-out" className="button-collapse btn"><i className="material-icons">menu</i></a>

                        <div style={styles.listDivStyle}>

                            <ul className="section table-of-contents">
                              {this.renderList()}
                            </ul>
                        </div>

                        <div className="fixed-action-btn horizontal">
                            <a className="btn-floating btn-large red">
                                <i className="large material-icons">mode_edit</i>
                            </a>
                            <ul>
                                <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                                <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                                <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                                <li><a className="btn-floating blue button-collapse" data-activates="slide-out"><i className="material-icons">menu</i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

const styles = {
    wrapperStyle: {
        top: 25
    },
    listDivStyle: {
        height: 1
    }
};

module.exports = ScrollSpy;



