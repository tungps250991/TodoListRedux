import React, { Component } from 'react';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import * as types from '../../Constants/actionType';

class FilterStatus extends Component {

    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">Lọc
                    <li className="py-1 display-5 lead" onClick={this.props.filterStatus.bind(this, -1)}>
                        Tất cả
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.props.filterStatus.bind(this, 1)}>
                        <i className="fa fa-spinner mr-2" />Đang tiến hành
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.props.filterStatus.bind(this, 2)}>
                        <i className="fa fa-anchor mr-2" />Chưa bắt đầu
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.props.filterStatus.bind(this, 3)}>
                        <i className="fa fa-check-square-o mr-2" />Hoàn thành
                    </li>
                    <li className="py-1 display-5 lead" onClick={this.props.filterStatus.bind(this, 4)}>
                        <i className="fa fa-trash-o mr-2" />Hủy bỏ
                    </li>
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterStatus: (filter) => {
            dispatch(actions.filter(types.FILTER_STATUS, filter))
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterStatus);