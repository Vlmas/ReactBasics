import React, { useCallback, useEffect, useMemo, useState } from "react";
import Table from "../table/Table";
import { columns } from "../../columns";
import axios from "axios";
import './Main.css';

const url = 'https://jsonplaceholder.typicode.com';

function Main() {
  const head = [...columns];
  const [users, setUsers] = useState([]);
  const puppet = useMemo(() => new Array(Math.max(9, users.length - 1)).fill(false));
  const [checkedArr, setCheckedArr] = useState([true, ...puppet]);
  const [checkCount, setCheckCount] = useState(1);

  const obtainUser = (id) => {
    return users.find((user) => user.id === id);
  };

  const getUsers = useCallback(async () => {
    return await axios.get(`${url}/users`)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        alert('Error occured! Check the console for details.');
      });
  }, []);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        alert('Error occured! Check the console for details.');
      });
  }, [getUsers]);

  return (
    <main className="main-content">
      <div className="content">
        <h2 className="fw-600">Таблица Пользователей</h2>

        <Table body={users} head={head} setUsers={setUsers} checkedArr={checkedArr} checkCount={checkCount} setCheckedArr={setCheckedArr} setCheckCount={setCheckCount} />
      </div>
    </main>
  );
}

export default Main;