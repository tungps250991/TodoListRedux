import React, { Component } from 'react';

class FilterStatus extends Component {

    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">Lọc
                    <li className="py-1 display-5 lead" >
                        Tất cả
                    </li>
                    <li className="py-1 display-5 lead" >
                        <i className="fa fa-spinner mr-2" />Đang tiến hành
                    </li>
                    <li className="py-1 display-5 lead" >
                        <i className="fa fa-anchor mr-2" />Chưa bắt đầu
                    </li>
                    <li className="py-1 display-5 lead" >
                        <i className="fa fa-check-square-o mr-2" />Hoàn thành
                    </li>
                    <li className="py-1 display-5 lead" >
                        <i className="fa fa-trash-o mr-2" />Hủy bỏ
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterStatus;