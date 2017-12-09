import React from 'react';
import { Button } from 'react-bootstrap';
var CategoryList = [];// get all categories

class Category extends React.Component {
    render() {
        return (
            <div className="dropdown navbar-brand js-scroll-trigger">
                <a href="#" id="drop1" data-toggle="dropdown" className="dropdown-toggle" role="button">Category 
                    <b className="caret"></b>
                </a>
                <ul role="menu" className="dropdown-menu" aria-labelledby="drop1">
                    <li role="presentation"><a href="#" role="menuitem">Grones</a></li>
                    <li role="presentation"><a href="#" role="menuitem">Nach</a></li>
                    <li role="presentation"><a href="#" role="menuitem">Zpu</a></li>
                <li role="presentation"><a href="#" role="menuitem">Madnass</a></li>
                </ul>
            </div>
        )
    }
}
export default Category;