import React from 'react'

const Props = (props) => {
   let item = props.expItem;
   let locaiotn = props.location;
  return (
    <div>
        <p>Location <strong>{locaiotn}</strong></p>
         <ul>
            {
                // eslint-disable-next-line array-callback-return
                item.map((ele ,idx)=>{
                    return <li key={idx}>Food : {ele.food} <br /> Petrol :{ele.petrol}<br /> Movie :{ele.movie}</li>
                })
            }
         </ul>
    </div>
  )
}

export default Props