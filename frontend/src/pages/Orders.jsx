const Orders = () => {
  return (
    <section className="orders-section">
      <div className="container orders-container">
        <h1 className="orders-heading">Orders</h1>
        <ul className="orders-type">
          <li className="single-order-type">All Orders</li>
          <li className="single-order-type">Active</li>
          <li className="single-order-type">Completed</li>
        </ul>
        <div className="table-container">
          <table style={{ width: "100%" }}>
            <tr className="table-header">
              <th>Order No</th>
              <th>Order Date</th>
              <th>Sender Name</th>
              <th className="address-width">Pickup Address</th>
              <th className="address-width">Delivery Address</th>
              <th>Delivery Price</th>
              <th>Order Status</th>
            </tr>
            <tr>
              <td>#95859404049484940</td>
              <td>06/02/2024</td>
              <td>Olakunle Wonuola</td>
              <td className="address-width">
                No 51, Adegboyega Street, Ilupeju, lagos
              </td>
              <td className="address-width">
                No 21, Kudus Street, Lekki, Lagos
              </td>
              <td>$32</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>#95859404049484940</td>
              <td>06/02/2024</td>
              <td>Olakunle Wonuola</td>
              <td className="address-width">
                No 51, Adegboyega Street, Ilupeju, lagos
              </td>
              <td className="address-width">
                No 21, Kudus Street, Lekki, Lagos
              </td>
              <td>$32</td>
              <td>Pending</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Orders;
