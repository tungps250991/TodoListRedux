import React, { Component } from 'react';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import * as types from '../../Constants/actionType';

class FilterLabel extends Component {
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left">Nhãn
                    <li onClick={this.props.filterLabel.bind(this, '')}
                    >
                        Tất cả
                    </li>
                    <li
                        className="py-1 display-5 lead" onClick={this.props.filterLabel.bind(this, "Frontend")}
                    >
                        <i className="fa fa-circle mr-2" />Frontend
                    </li>
                    <li
                        className="py-1 display-5 lead" onClick={this.props.filterLabel.bind(this, "Backend")}
                    >
                        <i className="fa fa-circle mr-2" />Backend
                    </li>
                    <li
                        className="py-1 display-5 lead" onClick={this.props.filterLabel.bind(this, "API")}
                    >
                        <i className="fa fa-circle mr-2" />API
                    </li>
                    <li
                        className="py-1 display-5 lead" onClick={this.props.filterLabel.bind(this, "Issue")}
                    >
                        <i className="fa fa-circle mr-2" />Issue
                    </li>
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterLabel: (filter) => {
            dispatch(actions.filter(types.FILTER_LABEL, filter));
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterLabel);