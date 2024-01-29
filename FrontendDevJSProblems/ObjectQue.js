// let arr = [
//     { id:1, orders:["bag","mouse"]},
//     { id:2, orders:["bag","bag"]},
//     { id:3, orders:[]}
// ]


// /*

// {
//     bag:{
//         no.of_orders : 3
//         customers:[]
//     }
// }

// */

const arr = [
    { order_id: '0001', seller_id: 'S01', status: 'placed' },
    { order_id: '0003', seller_id: 'S02', status: 'ofd' },
    { order_id: '0002', seller_id: 'S01', status: 'dispatched' },
    { order_id: '0002', seller_id: 'S01', status: 'dispatched' },
  ];
  
  let sellers = new Set();
  let newData = {};
  
  arr.forEach((each) => {
    sellers.add(each.seller_id);
  
    if (!newData[each.seller_id]) {
      newData[each.seller_id] = {};
    }
  
    newData[each.seller_id][each.status] = [each.order_id];
  });
  
  console.log(newData);
  
  
  /* ouput
  {
      SO1:{
          placed:[0001],
          dispatched:[0002]
      },
      S02:{
          ofd:[0003]
      }
  } 
  */