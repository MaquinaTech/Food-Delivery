import React, { useEffect } from 'react';
import { getOrders } from '../../components/auxiliar';
import  ReactTable from '../../components/ReactTable';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
            return <p>{totalPrice + " €"}</p>;
          } else {
            return "-";
          }
        }
      }
      
  
    ];

  const optionsTable = {
    globalFilter: false,
    columnFilters: false,
    sortable: true,
    childrenUrl: false,
    csvDownload:false,
  };



  return (
    <div className={styles.reactTable}>
      <div className={styles.reactTable__back}>
        <Link href="/list-restaurants">
          <img src="/back.svg" alt="back"/>  Ir a búsqueda
        </Link>
      </div>
      <h1>Tus pedidos</h1>
      <h2>Aquí podrás consultar tus pedidos</h2>
      <ReactTable data={orders} columns={columns} rowUrl="" options={optionsTable}/>
    </div>
  );
};

export default Orders;
