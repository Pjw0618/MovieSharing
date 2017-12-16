import React from 'react';

class AddPortrait extends React.Component {
    render() {
        return (
            <div className="modal fade addPortrait" id="addPortrait">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 product_content">
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AddPortrait;