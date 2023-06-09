import { useSearchActions } from "@yext/search-headless-react";
import {
  AppliedFilters,
  ResultsCount,
  SearchBar,
  StandardCard,
  VerticalResults,
  LocationBias,
  NumericalFacets,
  Pagination,
} from "@yext/search-ui-react";
import { useLayoutEffect } from "react";
import { CustomCard } from "../components/CustomCard";

export function ProductsPage() {
  const searchActions = useSearchActions();
  useLayoutEffect(() => {
    searchActions.setVertical("documents");
    searchActions.executeVerticalQuery();
  });

  return (
    <div>
      <SearchBar />
      <div className="flex">
        <div className="w-56 shrink-0 mr-5">
          <NumericalFacets />
        </div>
        <div className="flex-grow">
          <div className="flex items-baseline">
            <ResultsCount />
            <AppliedFilters />
          </div>
          <VerticalResults CardComponent={StandardCard} />
          <Pagination />
          <LocationBias />
        </div>
      </div>
    </div>
  );
}
