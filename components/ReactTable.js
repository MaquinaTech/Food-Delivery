import React, {useState, useMemo} from 'react'
import { useTable, useSortBy, usePagination, useFilters, useGlobalFilter, useAsyncDebounce, useExpanded } from 'react-table'
// A great library for fuzzy filtering/sorting items
import matchSorter from 'match-sorter'
import Link from 'next/link'
import { useRouter } from 'next/router'

//Styles
import styles from '../styles/ReactTable.module.scss';


// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Búsqueda global:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} resultados...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Total ${count} resultados...`}
    />
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

// Our table component
function Table({ columns, data, rowUrl, options }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  //Filtros preseleccionados
  // Obtener los valores de los filtros de la URL y crear un array de objetos { id, value }
  const router = new useRouter();
  const filtersFromUrl = Object.keys(router.query).map((key) => ({
    id: key,
    value: router.query[key]
  }));

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { expanded },
    state: { pageIndex, pageSize },
    

  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        filters: filtersFromUrl ? filtersFromUrl : null,
      },
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    
    useFilters, // useFilters!
    
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    useExpanded,
    usePagination
  )

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  //const firstPageRows = rows.slice(0, 10)

  //Construimos url para mandar filtros seleccionados y recuperarlos mas tarde
  const filters = useMemo(() => {
    return state.filters;
  }, [state.filters]);

  const buildLinkUrl = (rowData) => {
    const { id } = rowData.original;
    const url = `${rowUrl}${id}`;
    const params = new URLSearchParams();
    filters.forEach((filter) => {
      params.append(filter.id, filter.value);
    });
    const query = params.toString();
    return `${url}?${query}`;
  };

  return (
    <>
      <table className={styles.reactTable} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <td key={column.id}>
                <div className={styles.reactTable__header}>
                  
                <div className={styles.reactTable__filter__sort} style={{ paddingTop: "10px" }} {...(options.sortable && column.getHeaderProps(column.getSortByToggleProps()))}>
                    {/* Render the columns filter UI */}
                    <div className={styles.reactTable__filter__head}>{column.render('Header')}</div>
          
                    {/* Add a sort indicator */}
                    {options.sortable &&
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <img src="/order_desc.svg" alt="Orden descendente" />
                        ) : (
                          <img src="/order_asc.svg" alt="Orden ascendente" />
                        )
                      ) : (
                        <img src="/order_base.svg" alt="Sin ordenar" />
                      )}
                    </span>
                    }
                  </div>
                    {options.columnFilters &&
                    <div className={styles.reactTable__filter}>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>

                    }
                </div>
              </td>
            ))}
          </tr>
          
          ))}
          { options.globalFilter ?  
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
                borderBottom: "1px solid black", 
                borderRight: "1px solid black",
                borderColor: "#efefef",
                paddingTop:"15px",
              }}
            >
              
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>: <></>}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return  <td {...cell.getCellProps({})}>
                          {options.childrenUrl ?
                           <Link href={buildLinkUrl(row)}>
                              <p>
                                {cell.render('Cell')} 
                              </p>
                            </Link>
                            :
                            <p>
                              {cell.render('Cell')} 
                            </p>
                          }
                          </td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className={styles.reactTable__pagination}>


        {/* descomentar para ver que esta filtrando
        <div>
          <pre>
            <code>{JSON.stringify(state.filters, null, 2)}</code>
          </pre>
        </div>*/}
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {canPreviousPage &&
            <img width="10px" src="/left-arrow2.png"/>
            }
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {canPreviousPage &&
            <img width="10px" src="/left-arrow.png"/>
            }
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {canNextPage &&
            <img width="10px" src="/right-arrow.png"/>
            }
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {canNextPage &&
            <img width="10px" src="/right-arrow2.png"/>
            }
          </button>{' '}
          <span>
            Página{' '}
            <strong>
              {pageIndex + 1} de {pageOptions.length}
            </strong>{' '}
          </span>
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>
          
          
        </div>
      </div>
    </>
  )
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'

function ReactTable(props) {
  
  const columns = React.useMemo(
    () => props.columns
  )

  return (
    props.data ? 
      <Table columns={columns} data={props.data} rowUrl={props.rowUrl} options={props.options} />
      :
      <h1>No hay elementos disponibles</h1>
    
  )
}

export default ReactTable;
