import React from "react";
import { Slide, Modal } from '@mui/material';
import '../css/ModalPopup.css';
import Button from "../generic-components/Button";
const ModalPopup = (props) => {
    return (<>
        <Modal
            open={props.show}
            onClose={props.close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropProps={{ timeout: 500 }}
        >
            <Slide direction="down" in={props.show}>
                <div className='modal'>
                    <h4>Cart Details</h4>
                    <div className="cart-item-details">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty.</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                        <tr style={{borderBottom:'1px solid red'}}>
                            <td>IPhone</td>
                            <td>1252</td>
                            <td>x 1</td>
                            <td>1252</td>
                            <td>Delete</td>
                        </tr>
                    </table>
                    </div>
                    <div className="modal-action-btns">
                        <Button btnText="Place Order" actionType={props.close} />
                        <Button btnText="Close" actionType={props.close} />
                    </div>
                </div>
            </Slide>
        </Modal>
    </>)
}

export default ModalPopup;