
document.getElementById('busBookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    bookBus();
});

function bookBus() {
    let uname = document.getElementById('uname').value;
    let uemail = document.getElementById('uemail').value;
    let umobile = document.getElementById('umobile').value;
    let ubus = document.getElementById('ubus').value;

    console.log(uname, uemail, umobile, ubus);

    let bookingDetails = {
        user_name: uname,
        user_email: uemail,
        user_mobile: umobile,
        user_bus: ubus
    }
    if (document.getElementById('dataForm').dataset.row) {
        const row = JSON.parse(document.getElementById('dataForm').dataset.row);
        updateBookingList(row._id, bookingDetails);
    } else {
        axios.post('https://crudcrud.com/api/53dce2a3552e4ec8a32e7cc70f55800d/busCrud', bookingDetails)
            .then((res) => {
                alert("Your Booking successfull...")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    document.getElementById('uname').value = '';
    document.getElementById('uemail').value = '';
    document.getElementById('umobile').value = '';
    document.getElementById('ubus').value = '';
}

// Update bus booking list
function updateBookingList(userId, bookingDetails) {
    axios.put(`https://crudcrud.com/api/53dce2a3552e4ec8a32e7cc70f55800d/busCrud/${userId}`, bookingDetails)
        .then(response => {
            // Handle the successful response
            alert("Record Updated Successfully...")
            // Refresh the data after updating
            getBookingDetails();
        })
        .catch(error => {
            // Handle errors
            console.error('PUT Error:', error);
        });
}

// fetch bus booking list
function getBookingDetails() {
    let bookingContainers = document.getElementById('booking_datas')
    axios.get('https://crudcrud.com/api/53dce2a3552e4ec8a32e7cc70f55800d/busCrud')
        .then((res) => {
            let bookingList = ''
            res?.data.forEach(userBookingList => {
                bookingList += `
                    <tr>
                        <td>${userBookingList.user_name}</td>
                        <td>${userBookingList.user_email}</td>
                        <td>${userBookingList.user_mobile}</td>
                        <td>${userBookingList.user_bus}</td>
                        <td>
                            <button className="btn btn-danger" onclick='deleteBookings("${ele._id}")' > Delete </button>
                            <button className="btn btn-info" editBusBooking(${JSON.stringify(ele)}) > Edit </button>
                        </td>
                    </tr>
                    `;
                bookingContainers.innerHTML = bookingList
            });
            console.log(res);
        })
        .catch((err) => {

        })
}

// Edit bus booking
function editBusBooking(row) {
    document.getElementById('uname').value = row.uname;
    document.getElementById('uemail').value = row.uemail;
    document.getElementById('umobile').value = row.umobile;
    document.getElementById('ubus').value = row.user_bus;
    // Set the row data as a dataset attribute
    document.getElementById('dataForm').dataset.row = JSON.stringify(row);
}

// Delete bus booking
function deleteBookings(userId) {
    let res = confirm('Are your sure want to delete this user')
    if (res) {
        axios.delete(`https://crudcrud.com/api/53dce2a3552e4ec8a32e7cc70f55800d/busCrud/${userId}`)
            .then(response => {
                // Handle the successful response
                alert("Record Deleted Successfully...")
                // Refresh the data after deletion
                getBookingDetails();
            })
            .catch(error => {
                // Handle errors
                console.error('DELETE Error:', error);
            });
    }
}
getBookingDetails();

