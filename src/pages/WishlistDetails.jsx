import React, { useEffect, useState } from "react";

export const WishlistDetails = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchListData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/list");
        const data = await response.json();
        console.log(data);
        setListData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchListData();
  }, []);
  return (
    <div>
      <p>Created At: {listData[0]?.created_at}</p>
      <p>Created By: {listData[0]?.created_by}</p>
      <p>ID: {listData[0]?.id}</p>
      <p>List Description: {listData[0]?.list_description}</p>
      <p>List Name: {listData[0]?.list_name}</p>
      <br /> <br />
      <p>Created At: {listData[1]?.created_at}</p>
      <p>Created By: {listData[1]?.created_by}</p>
      <p>ID: {listData[1]?.id}</p>
      <p>List Description: {listData[1]?.list_description}</p>
      <p>List Name: {listData[1]?.list_name}</p>
    </div>
  );
};
