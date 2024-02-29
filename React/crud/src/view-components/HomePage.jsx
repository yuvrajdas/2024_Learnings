import { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';
const HomePage = ()=>{
       const [swalProps, setSwalProps] = useState({});
    return(<>
        <div>
            <button onClick={() => {
                setSwalProps({
                    show: true,
                    title: 'Basic Usage',
                    text: 'Hello World',
                });
            }}>
                Open
            </button>

            <SweetAlert2 {...swalProps} />
        </div>
    </>)
}

export default HomePage