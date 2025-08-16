import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import axiosInstance from "../api/axiosInstance";

const ViewAllCustomers = () => {
  const [allEmployee, setAllEmployee] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveAllUser();
      if (allUsers) {
        setAllEmployee(allUsers.users);
      }
    };

    getAllUsers();
  }, []);

  const retrieveAllUser = async () => {
    const response = await axiosInstance.get(
      "/api/user/fetch/role-wise?role=Customer",
    );
    console.log(response.data);
    return response.data;
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-2 shadow-lg"
        style={{
          height: "48rem",
        }}
      >
        <div
          className="card-header custom-bg-text text-center bg-color text-white"
          style={{
            borderRadius: "7px",
            height: "50px",
            margin:"10px 17px",
            backgroundColor:"#103e75"
          }}
        >
          <h2>All Students</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-primary table-striped-columns text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {allEmployee.map((employee) => {
                  return (
                    <tr>
                      <td>
                        <b>{employee.firstName}</b>
                      </td>
                      <td>
                        <b>{employee.lastName}</b>
                      </td>
                      <td>
                        <b>{employee.emailId}</b>
                      </td>
                      <td>
                        <b>{employee.phoneNo}</b>
                      </td>
                      <td>
                        <b>
                          {employee.address.street +
                            ", " +
                            employee.address.city +
                            ", " +
                            employee.address.pincode}
                        </b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllCustomers;
