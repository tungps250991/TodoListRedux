import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

// import Data
import listOfUsers from '../../Models/UserModel/UserModel'

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStatus: 2
        }
    }


    getLabelColor = (label) => {
        switch (label) {
            case "Frontend":
                return "#389E0D";
            case "Backend":
                return "#722ED1";
            case "API":
                return "#13C2C2";
            case "Issue":
                return "#CF1322";
            default:
                return null;
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.handleEditStatus(this.props.task.id, this.state.selectedStatus);
        })
    }

    handleClick = task => {
        this.props.handleEdit(task);
        this.props.convertAddToEdit();
    }

    render() {
        let { task, index } = this.props;

        // LABEL
        let elmLabel = task.labelArr.map((label, index) => {
            return <i
                key={index}
                className={"fa fa-circle"}
                style={{ color: this.getLabelColor(label) }}
            ></i>
        });

        // PRIORITY
        let elmPriority = null;
        let classPriority = " font-weight-bold text-center";
        switch (parseInt(task.priority, 10)) {
            case 3:
                elmPriority = "Cao"
                classPriority = "text-danger" + classPriority;
                break;
            case 2:
                elmPriority = "Trung bình"
                classPriority = "text-success" + classPriority;
                break;
            case 1:
                elmPriority = "Thấp"
                classPriority = "text-primary" + classPriority;
                break;

            default:
                break;
        }

        // Người thực hiện
        let elmImg = task.memberIDArr.map((id, index) => {
            return <img
                key={index}
                src={listOfUsers.findUser(id).avatar}
                className="user"
                alt={listOfUsers.findUser(id).id}
            />
        })

        // Tình trạng công việc
        let elmStatus;

        switch (parseInt(task.status, 10)) {
            case 1:
                elmStatus = <i className="fa fa-spinner"></i>
                break;
            case 2:
                elmStatus = <i className="fa fa-anchor"></i>
                break;
            case 3:
                elmStatus = <i className="fa fa-check-square-o"></i>
                break;
            default:
                elmStatus = <i className="fa fa-trash-o"></i>
                break;
        }


        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">
                    {elmLabel}
                </td>
                <td className={classPriority}>
                    {elmPriority}
                </td>
                <td className="text-center">
                    {elmImg}
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        data-toggle="modal"
                        data-target="#modalTask"
                        onClick={this.handleClick.bind(this, task)}
                    >Sửa</button>

                    <div className="form-group d-inline ml-2">
                        <select
                            className="form-control d-inline"
                            style={{ width: "65%" }}
                            name="selectedStatus"
                            value={task.status}
                            onChange={this.onChange}
                        >
                            <option value={1} >Đang tiến hành</option>
                            <option value={2} >Chưa bắt đầu</option>
                            <option value={3} >Hoàn thành</option>
                            <option value={4} >Hủy bỏ</option>
                        </select>
                    </div>
                </td>
                <td className="text-center">
                    {elmStatus}
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleEdit: (task) => {
            dispatch(actions.getTaskEditing(task));
        },
        convertAddToEdit: () => {
            dispatch(actions.convertAddToEdit());
        },
        handleEditStatus: (id, status) => {
            dispatch(actions.editTaskStatus(id, status));
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);