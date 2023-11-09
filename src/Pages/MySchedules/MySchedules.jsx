import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../AxiosInstance/instance";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [works, setWorks] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/bookings?u=${user?.email}`).then((res) => {
      setBookings(res.data);
    });

    axiosInstance.get(`/bookings?p=${user?.email}`).then((res) => {
      const pendingWorks = res.data.filter(
        (work) => work?.status !== "completed"
      );
      setWorks(pendingWorks);
      setLoader(false);
    });
  }, [user]);

  const handleStatus = (id, e) => {
    e.preventDefault();
    const status = e.target.value;
    const update = { status };
    console.log(update, id);
    axiosInstance.patch(`/bookings/${id}`, update).then((res) => {
      if (res.data.modifiedCount === 1) {
        const pendingWorks = [...works];
        pendingWorks.forEach((work) => {
          if (work?._id === id) {
            work.status = status;
          }
        });
        setWorks(pendingWorks.filter((work) => work?.status !== "completed"));
      }
    });
  };

  if (loader) {
    return (
      <div className="my-28 text-center">
        <span className="loading loading-spinner text-secondary loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>GoTravel | My-Schedules</title>
      </Helmet>
      {/* my bookings section */}
      <div className="my-10">
        <h3 className="text-center text-2xl font-bold text-pink-500">
          Your Bookings: {bookings.length}
        </h3>
        {bookings.length !== 0 ? (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Purchased Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* each row */}
                  {bookings.map((booking) => (
                    <tr key={booking._id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={booking.img}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{booking.service}</div>
                            <div className="text-sm opacity-50">
                              Provider email: {booking.provider}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{booking.price}</td>
                      <td>{booking.address}</td>
                      <td>{booking.takingDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h3 className="my-5 text-center text-2xl font-bold">
            Currently you have no bookings
          </h3>
        )}
      </div>
      <div className="my-10">
        <h3 className="text-center text-2xl font-bold text-pink-500">
          Your Pending Works: {works.length}
        </h3>
        {works.length !== 0 ? (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Your Service</th>
                    <th>Price</th>
                    <th>User Address</th>
                    <th>Purchased Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* each row */}
                  {works.map((work) => (
                    <tr key={work._id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={work.img}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{work.service}</div>
                            <div className="text-sm opacity-50">
                              User email: {work.user}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{work.price}</td>
                      <td>{work.address}</td>
                      <td>{work.takingDate}</td>
                      <td>
                        <select
                          onChange={(e) => handleStatus(work._id, e)}
                          defaultValue={work?.status ? work.status : "pending"}
                          className="select select-secondary lg:w-3/4 w-full"
                        >
                          <option value="pending">Pending</option>
                          <option value="progress">In Progress</option>
                          <option value="completed">completed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h3 className="my-5 text-center text-2xl font-bold">
            Currently you have no works
          </h3>
        )}
      </div>
    </>
  );
};

export default MySchedules;
