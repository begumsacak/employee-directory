import React from "react";
//import "./style.css";

function EmployeeTable(props) {
    return (
        <div className="table">
            <table className="table">
                <thead className="bg-info text-white">
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(props.employees)}
                    {/* checking for the array length first before using it */}
                    {props.employees ? props.employees.map(employee => {
                        return (
                            <tr>
                                <td><img src= {employee.picture.medium}/> </td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        )
                    }) : (<tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                        )}


                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;
