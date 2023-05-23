import { useState } from "react";

export default function useQuery() {
  const [searchQuery, setSearchQuery] = useState("");

  return { searchQuery, setSearchQuery };
}
