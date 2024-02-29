import DeleteUser from "./DeleteUser"
 
const UserDetails = ()=>{
    return(<>    
    <button>Add</button>
            <table border={1} width={400}>
                <tr>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Qty</td>
                    <td>Price</td>
                </tr>
            </table>
            <DeleteUser />
    </>)
}

export default UserDetails