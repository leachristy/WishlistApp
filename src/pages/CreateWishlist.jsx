import React, { useState } from "react";

export const CreateWishlist = () => {
  const [page, setPage] = useState(0);

  return <>{page === 0 && <div>Page 1</div>}</>;
};
