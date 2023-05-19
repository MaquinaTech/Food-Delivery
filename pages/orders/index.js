import React, { useEffect } from 'react';
import { getOrders } from '../../components/auxiliar';
import  ReactTable from '../../components/ReactTable';
import styles from '../../styles/ReactTable.module.scss';

const Orders = () => {
  const [orders, setOrders] = React.useState([]);

  //Get orders
  useEffect(() => {
    const token = localStorage.getItem('token');
    const getOrdersList = async () => {
      try {
        const { data } = await getOrders(token);
        setOrders(data);
      } catch (error) {
        toast.error('Ocurrió un error al intentar obtener los pedidos');
      }
    };
    getOrdersList();
  }, []);

  function customFilter(filter, row) {
    const rowValue = row.original.value[filter.id];
    if (Array.isArray(rowValue) && rowValue.includes(filter.value)) {
      return true;
    }
    return rowValue === filter.value;
  }


  const columns = 
    [
      {
        Header: 'Id',
        accessor: 'id',
        Cell: ({ row }) => 
          <>
            {row.original.key.id}
          </>
      },
      
      {
        Header: 'Platos',
        accessor: 'description',
        filter: 'equals',
        filterFunction: customFilter, 
        Cell: ({ row }) => 

        <React.Fragment>
          {row.original.value ? row.original.value.map((item, index) => {
            return (
              <div key={index}>
                <b>{item.name}</b>
                <p>{item.description}</p>
              </div>
            )
          }) : "-"}
        </React.Fragment>
      },
      {
        Header: 'Total €',
        accessor: 'totalPrice',
        Cell: ({ row }) => {
          const items = row.original.value;
          if (items) {
            const totalPrice = items.reduce((total, item) => total + item.price, 0);
            return <p>{totalPrice}</p>;
          } else {
            return "-";
          }
        }
      }
      
  
    ];

  const optionsTable = {
    globalFilter: false,
    columnFilters: true,
    sortable: true,
    childrenUrl: false,
    csvDownload:false,
  };



  return (
    <div className={styles.reactTable}>
      <h1>Tus pedidos</h1>
      <h2>Aquí podrás consultar tus pedidos</h2>
      <ReactTable data={orders} columns={columns} rowUrl="" options={optionsTable}/>
    </div>
  );
};

export default Orders;
