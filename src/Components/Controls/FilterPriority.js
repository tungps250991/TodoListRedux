import React, { Component } from 'react';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import * as types from '../../Constants/actionType';

class FilterPriority extends Component {

    onChange = event => {
        // console.log(event.target.value)
        this.props.filterPriority(event.target.value);
    }

    render() {
        return (
            <div className="form-group text-left">
                <label htmlFor="sel1">Độ ưu tiên</label>
                <select
                    className="form-control"
                    name="priority"
                    onChange={this.onChange}
                >
                    <option value={-1} className="font-weight-bold">Tất cả</option>
                    <option value={1} className="text-info font-weight-bold">Thấp</option>
                    <option value={2} className="text-success font-weight-bold">Trung bình</option>
                    <option value={3} className="text-danger font-weight-bold">Cao</option>
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterPriority: (filter) => {
            dispatch(actions.filter(types.FILTER_PRIORTY, filter));
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterPriority);