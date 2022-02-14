import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, usePagination } from 'react-table';
import './Table.css';

function Table({ body, head, checkedArr, checkCount, setUsers, setCheckedArr, setCheckCount }) {
  const data = useMemo(() => ( [...body] ), [body]);
  const columns = useMemo(() => ( [...head] ), [head]);
  const navigate = useNavigate();

  const handleCheckbox = useCallback((e, pos) => {
    if(e.target.checked) {
      setCheckCount(checkCount + 1);
    } else {
      if(checkCount === 1) {
        setCheckedArr((prev) => prev);
        return;
      } else {
        setCheckCount(checkCount - 1);
      }
      e.target.checked = false;
    }
    let newState = checkedArr.map((item, index) => {
      return (index === pos ? !item : item);
    });
    setCheckedArr(newState);
  }, [checkCount, checkedArr, setCheckCount, setCheckedArr]);

  const navigateUser = useCallback((user) => {
    navigate(`/user/${user.id}`);
  }, []);

  const deleteRow = useCallback((user) => {
    // console.log(user);
    let newUsers = data.filter((item) => item.id !== user.id);
    setUsers(newUsers);
  }, [data]);

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: 'Checkbox',
          Header: 'Checkbox',
          Cell: ({ row }) => (
            <input type="checkbox" value={checkedArr[row.values.id - 1]} checked={checkedArr[row.values.id - 1]} onChange={(e) => handleCheckbox(e, row.values.id - 1)} name="user-checkbox" />
          )
        },
        columns.find((column) => column.id === 'id'),
        {
          id: 'Details',
          Header: 'Details',
          Cell: ({ row }) => (
            <a className="user-nav" onClick={() => navigateUser(row.values)}>Подробнее</a>
          )
        },
        // [...columns],
        columns.find((column) => column.id === 'username'),
        columns.find((column) => column.id === 'email'),
        columns.find((column) => column.id === 'website'),
        {
          id: 'Delete',
          Header: 'Delete',
          Cell: ({ row }) => (
            <img className="del-img" onClick={() => deleteRow(row.values)} src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/128/close_red.png" alt="" />
          )
        }
      ]
    });
  };

  const {
    getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, 
    prepareRow, canNextPage, pageOptions, state, canPreviousPage, setPageSize 
  } = useTable({
    columns,
    data,
  }, tableHooks, useSortBy, usePagination);

  const { pageIndex } = state;

  useEffect(() => {
    setPageSize(5);

    return () => { };
  }, []);

  return (
    <div className="users-table">
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((group) => (
            <tr {...group.getHeaderGroupProps()}>
              {group.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? <span> &darr;</span> : <span> &uarr;</span>) : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination-buttons">
        <p>Page {pageIndex + 1} of {pageOptions.length}</p>
        <button style={{marginRight: '0.8rem'}} onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
      </div>
    </div>
  );
}

export default memo(Table);