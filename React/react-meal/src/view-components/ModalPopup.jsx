import React, { useContext } from "react";
import { Slide, Modal } from '@mui/material';
import '../css/ModalPopup.css';
import Button from "../generic-components/Button";
import { DataContext } from "../App";

const ModalPopup = ({ show, myCartDetails, close }) => {
    const {DeleteAddedProductFromToCart} = useContext(DataContext)
    return (<>
        <Modal
            open={show}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropProps={{ timeout: 500 }}
        >
            <Slide direction="down" in={show}>
                <div className='modal'>
                    <h4>Cart Details</h4>
                    <div className="cart-item-details">
                        <table border={'1px'}>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty.</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                            {myCartDetails.myCart.map((item) => {
                               return( <tr style={{ borderBottom: '1px solid red' }} key={item.foodId}>
                                    <td>{item.foodName}</td>
                                    <td>$ {item.price}</td>
                                    <td>x {item.quantity}</td>
                                    <td>$ {item.sub_total}</td>
                                    <td className="delete"><img onClick={()=>DeleteAddedProductFromToCart(item)} src="./icons/delete.svg" alt="delete_icon" /></td>
                                </tr>)
                            })}

                        </table>
                    </div>
                    <div>Grand Total <strong>$ {myCartDetails.totolAmount}</strong></div>
                    <div className="modal-action-btns">
                        <Button btnText="Place Order" actionType={close} />
                        <Button btnText="Close" actionType={close} />
                    </div>
                </div>
            </Slide>
        </Modal>
    </>)
}

export default ModalPopup;