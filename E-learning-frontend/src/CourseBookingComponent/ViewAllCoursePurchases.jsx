import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const ViewAllCoursePurchases = () => {
  const [bookings, setBookings] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));

  let navigate = useNavigate();

  useEffect(() => {
    const getAllBookings = async () => {
      const bookingsRes = await retrieveAllBooking();
      if (bookingsRes) {
        setBookings(bookingsRes.bookings);
      }
    };

    getAllBookings();
  }, []);

  const retrieveAllBooking = async () => {
    const response = await axiosInstance.get("/api/course/booking/fetch/all");
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
          height: "45rem",
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
          <h2>All Purchased Courses</h2>
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
                  <th scope="col">Purchase Id</th>
                  <th scope="col">Thumbnail</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Student</th>
                  <th scope="col">Price</th>
                  <th scope="col">Purchase Time</th>
                  <th scope="col">Payment Id</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => {
                  return (
                    <tr>
                      <td>
                        <b>{booking.bookingId}</b>
                      </td>
                      <td>
                        <img
                          src={
                            "http://localhost:8080/api/course/" +
                            booking.course.thumbnail
                          }
                          class="img-fluid"
                          alt="thumbnail"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{booking.course.name}</b>
                      </td>
                      <td>
                        <Link
                          to={`/mentor/${booking.course.mentor.id}/course/all`}
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          <b>
                            {booking.course.mentor.firstName +
                              " " +
                              booking.course.mentor.lastName}
                          </b>
                        </Link>
                      </td>
                      <td>
                        <b>
                          {booking.customer.firstName +
                            " " +
                            booking.customer.lastName}
                        </b>
                      </td>
                      <td>
                        <b>{booking.amount}</b>
                      </td>
                      <td>
                        <b>{formatDateFromEpoch(booking.bookingTime)}</b>
                      </td>
                      <td>
                        <b>{booking.payment.paymentId}</b>
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

export default ViewAllCoursePurchases;
