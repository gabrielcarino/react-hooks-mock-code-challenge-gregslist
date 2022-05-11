import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [updatedListings, setUpdatedListiings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(listingsArray => {
        setListings(listingsArray)
        setUpdatedListiings(listingsArray)
      })
  }, []);

  function handleSearch(search) {
    const searchListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    if (search !== "") setUpdatedListiings(searchListings)
    else setUpdatedListiings(listings)
  };

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedListings = listings.filter(listing => listing.id !== id)
        setUpdatedListiings(updatedListings)
      })
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer listings={updatedListings} onDelete={handleDelete} />
    </div>
  );
}

export default App;
