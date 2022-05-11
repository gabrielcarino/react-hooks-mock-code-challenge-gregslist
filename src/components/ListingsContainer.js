import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  const cardContainer = listings.map(listing => <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />)

  return (
    <main>
      <ul className="cards">
        {cardContainer}
      </ul>
    </main>
  );
}

export default ListingsContainer;
