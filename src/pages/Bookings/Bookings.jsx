import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `https://car-doctor-server-pink-pi.vercel.app/bookings?email=${user.email}`;

  const url = `/bookings?email=${user.email}`;

  useEffect(() => {
    // fetch(url, {credentials: 'include'})
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));

    axiosSecure.get(url).then((res) => setBookings(res.data));
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://car-doctor-server-pink-pi.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);

            setBookings(remaining);
          }
        });
    }
  };

  return (
    <div className="mb-20 mt-20">
      <h2 className="text-5xl">Your Bookings: {bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              ></BookingRow>
            ))}
          </tbody>

          
        </table>
      </div>
    </div>
  );
};

export default Bookings;
