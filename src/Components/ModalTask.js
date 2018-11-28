import React, { Component } from 'react';
import randomID from 'random-id';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class ModalTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            labelArr: [],
            priority: 1,
            memberIDArr: [],
            status: 2,
            description: ''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.props.isAddNewTask) {
            this.setState({
                id: randomID(5)
            }, () => {
                this.props.handleAddTask(this.state);
            })
        } else {
            this.props.handleEditTask(this.state);
        }

    }

    onReset = () => {
        this.setState({
            id: '',
            name: '',
            labelArr: [],
            priority: 1,
            memberIDArr: [],
            status: 2,
            description: ''
        })
    }

    // componentDidUpdate = (prevProps) => {
    //     let { id, name, labelArr, priority, memberIDArr, status, description } = this.props.taskEditing
    //     if (this.props.taskEditing !== prevProps.taskEditing) {
    //         this.setState({
    //             id, name, labelArr, priority, memberIDArr, status, description
    //         })
    //     }
    // }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.taskEditing && !nextProps.isAddNewTask) {
            let { taskEditing } = nextProps;
            this.setState(taskEditing)
        } else {
            this.onReset();
        }
    }

    render() {
        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">
                                {this.props.isAddNewTask ? "Thêm công việc" : "Sửa công việc"}
                            </h4>
                            <button type="button" className="close" data-dismiss="modal">
                                ×
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit} >
                            {/* Modal body */}
                            <div className="modal-body">

                                <div className="form-group">
                                    <label>Tên công việc:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        onChange={this.onChange}
                                        value={this.state.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mô tả:</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        name="description"
                                        onChange={this.onChange}
                                        value={this.state.description}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Độ ưu tiên:</label>
                                    <select
                                        className="form-control"
                                        name="priority"
                                        onChange={this.onChange}
                                        value={this.state.priority}
                                    >
                                        <option value="1" >Thấp</option>
                                        <option value="2" >Trung bình</option>
                                        <option value="3" >Cao</option>
                                    </select>
                                </div>

                                <CheckboxGroup
                                    checkboxDepth={2} // This is needed to optimize the checkbox group
                                    name="memberIDArr"
                                    value={this.state.memberIDArr}
                                    onChange={this.membersChanged}
                                    className="mt-2"
                                >
                                    <label>Người thực hiện:</label><br />
                                    <label><Checkbox value="user_2" className="ml-3" /> Phó Nghĩa Văn</label>
                                    <label><Checkbox value="user_3" className="ml-3" /> Nguyễn Tiến Minh Tuấn</label>
                                    <label><Checkbox value="user_4" className="ml-3" /> Đặng Trung Hiếu</label>
                                    <label><Checkbox value="user_5" className="ml-3" /> Trương Tấn Khải</label>
                                </CheckboxGroup>

                                <CheckboxGroup
                                    checkboxDepth={2} // This is needed to optimize the checkbox group
                                    name="labelArr"
                                    value={this.state.labelArr}
                                    onChange={this.labelsChanged}
                                    className="mt-2"
                                >
                                    <label>Nhãn: </label><br />
                                    <label><Checkbox value="Frontend" className="ml-3" />Frontend </label>
                                    <label><Checkbox value="Backend" className="ml-3" />Backend </label>
                                    <label><Checkbox value="API" className="ml-3" />API </label>
                                    <label><Checkbox value="Issue" className="ml-3" />Issue </label>
                                </CheckboxGroup>


                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className={`btn btn-${this.props.isAddNewTask ? "success" : "warning"}`}
                                >
                                    {this.props.isAddNewTask ? "Thêm công việc" : "Sửa công việc"}
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-danger ml-2"
                                    data-dismiss="modal"
                                >
                                    Đóng
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }

    membersChanged = (newMembers) => {
        this.setState({
            memberIDArr: newMembers
        });
    }
    labelsChanged = (newLabels) => {
        this.setState({
            labelArr: newLabels
        });
    }
}

const mapStateToProps = (state) => {
    return {
        taskEditing: state.taskEditing,
        isAddNewTask: state.isAddNewTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTask: (newTask) => {
            dispatch(actions.addTask(newTask));
        },
        handleEditTask: (taskEditing) => {
            dispatch(actions.editTask(taskEditing));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTask);