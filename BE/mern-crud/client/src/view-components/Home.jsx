import React, { useEffect, useState } from "react";

const Home = () => {
    const [rowId, setRowId] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editableRowData, setEditableRowData] = useState({ id: '', fname: '', email: '', mobile: '' });
    const [addRowData, setAddRowData] = useState({ fname: '', email: '', mobile: '' });

    const editRow = (id) => {
        setRowId(id);
        setIsEdit(!isEdit);
        // Set the editable row data based on the row ID
        const rowToEdit = apiData.find(row => row.id === id);
        if (rowToEdit) {
            setEditableRowData(rowToEdit);
        }
    }

    const fetchData = async () => {
        let res = await fetch('http://127.0.0.1:4000/users');
        let resData = await res.json();
        setApiData(resData.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        // Update the editableRowData state
        setEditableRowData(prevData => ({
            ...prevData,
            [name]: value
        }));


    }

    const saveHandler = (e) => {
        const { name, value } = e.target;
        setAddRowData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const deleteRow = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:4000/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },

            });
            if (response.ok) {
                fetchData();
                setRowId(0);
            } else {
                console.error('Failed to update data');
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }
    const update = async () => {
        // Make an API call to update the data
        try {
            const response = await fetch(`http://127.0.0.1:4000/user/${editableRowData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editableRowData)
            });
            if (response.ok) {
                // If update is successful, refetch data
                fetchData();
                setIsEdit(false);
                setEditableRowData({ id: '', fname: '', email: '', mobile: '' });
                setRowId(0);
            } else {
                console.error('Failed to update data');
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }
    const showForm = () => {
        setIsFormVisible(!isFormVisible)
    }
    const saveRecord = async () => {
        if (addRowData.fname === '' || addRowData.email === '' || addRowData.mobile === '') {
            return;
        }
        try {
            const response = await fetch(`http://127.0.0.1:4000/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addRowData)
            });
            if (response.status === 201) {
                alert("asave")
                // If update is successful, refetch data
                setAddRowData({ id: '', fname: '', email: '', mobile: '' });
                setIsFormVisible(false)
                fetchData();
            } else {
                console.error('Failed to update data');
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between">
                <div>
                    <button onClick={showForm}>Add</button>&nbsp;
                    <button onClick={()=>fetchData()}>Refresh</button>
                </div>
                {isFormVisible &&
                    <div>
                        <input type="text" placeholder="Full name" required name="fname" value={addRowData.fname} onChange={(e) => saveHandler(e)} />&nbsp;
                        <input type="email" placeholder="Email" required name="email" value={addRowData.email} onChange={(e) => saveHandler(e)} />&nbsp;
                        <input type="text" placeholder="mobile" required name="mobile" value={addRowData.mobile} onChange={(e) => saveHandler(e)} />&nbsp;
                        <button onClick={saveRecord}>Save</button>
                    </div>
                }
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData?.map((ele, idx) => (
                            (<tr key={ele.id}>
                                <th scope="row">{idx + 1}</th>
                                <td>
                                    <input
                                        type="text"
                                        name="fname"
                                        value={ele.id === rowId ? editableRowData.fname : ele.fname}
                                        onChange={(e) => inputHandler(e)}
                                        className={`${isEdit && rowId === ele.id ? '' : 'input_style'}`}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        name="email"
                                        value={ele.id === rowId ? editableRowData.email : ele.email}
                                        onChange={(e) => inputHandler(e)}
                                        className={`${isEdit && rowId === ele.id ? '' : 'input_style'}`}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={ele.id === rowId ? editableRowData.mobile : ele.mobile}
                                        onChange={(e) => inputHandler(e)}
                                        className={`${isEdit && rowId === ele.id ? '' : 'input_style'}`}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => deleteRow(ele.id)}>D</button>&nbsp;
                                    <button onClick={() => editRow(ele.id)}>
                                        {isEdit && rowId === ele.id ? 'C' : 'E'}
                                    </button>&nbsp;
                                    {isEdit && rowId === ele.id && <button onClick={update}>S</button>}
                                </td>
                            </tr>)
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Home;
