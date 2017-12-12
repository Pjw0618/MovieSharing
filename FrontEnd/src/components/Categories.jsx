import React from 'react';
var CategoryList = [];// get all categories

class Category extends React.Component {
    render() {
        return (
            <div className="dropdown navbar-brand js-scroll-trigger">
                <a href="#" id="drop1" data-toggle="dropdown" className="dropdown-toggle" role="button">Category 
                    <b className="caret"></b>
                </a>
                <ul role="menu" className="dropdown-menu text-center" aria-labelledby="drop1">
                    <li role="presentation"><a href="#" role="menuitem">Category1</a></li>
                    <li role="presentation"><a href="#" role="menuitem">Category2</a></li>
                    <li role="presentation"><a href="#" role="menuitem">Category3</a></li>
                    <li role="presentation"><a href="#" role="menuitem">Category4</a></li>
                </ul>
            </div>
        )
    }
}
export default Category;