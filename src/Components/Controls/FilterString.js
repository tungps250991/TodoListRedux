import React, { Component } from 'react';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import * as types from '../../Constants/actionType';

class filterString extends Component {
    onChange = event => {
        this.props.filterString(event.target.value);
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="form-group text-left my-0">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm công việc"
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterString: (filter) => {
            dispatch(actions.filter(types.FILTER_STRING, filter));
        }
    }
}

export default connect(null, mapDispatchToProps)(filterString);