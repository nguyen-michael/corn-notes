import React, { Component } from "react";
import ListElement from "./scrollSpyListElement";

//can decide to pass in list elements to dynamically generate the side nav
class ScrollSpy extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }


    renderList() {

        return this.props.listElements.map((listEl, index) => (
            <div >
                <ListElement elementID={listEl.id} name={listEl.name}
                    key={index} />
            </div>
        ));
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        return (

            <div className="col hide-on-small-only m3 l2">
                <div className="toc-wrapper pinned" style={styles.wrapperStyle}>
                    <a href="/allnotes" className="btn"><i className="material-icons">menu</i></a>
                    {/* Logout Button */}
                    <a  className="btn" onClick={this.logout}><i className="material-icons">settings_power</i></a>

                    <div style={styles.listDivStyle}>

                        <ul className="section table-of-contents">
                            {this.renderList()}
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

export default ScrollSpy;



