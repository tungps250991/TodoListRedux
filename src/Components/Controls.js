import React, { Component } from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import * as types from '../Constants/actionType';

import AddNewTask from './Controls/AddNewTask';
import InitializeTasks from './Controls/InitializeTasks';
import FilterStatus from './Controls/FilterStatus';
import FilterPriority from './Controls/FilterPriority';
import FilterLabel from './Controls/FilterLabel';

class Controls extends Component {
    onChange = event => {
        this.props.sort(event.target.value);
    }

    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="user" />
                    <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
                </div>

                <InitializeTasks />

                <AddNewTask />

                {/* Filter */}
                <div className="px-3">

                    {/* FilterStatus */}
                    <FilterStatus />

                    {/* FilterLabel */}
                    <FilterLabel />


                    {/* Filter Priority */}
                    <FilterPriority />

                    <div className="form-group text-left">
                        <label>Sắp xếp theo công việc</label>
                        <select className="form-control" onChange={this.onChange}>
                            <option value='a-z'>Từ A đến Z</option>
                            <option value='z-a'>Từ Z đến A</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (filter) => {
            dispatch(actions.filter(types.SORT, filter));
        }
    }
}

export default connect(null, mapDispatchToProps)(Controls);