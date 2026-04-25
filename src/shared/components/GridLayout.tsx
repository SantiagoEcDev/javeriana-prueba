import React from "react";
import EmptyError from "./EmptyError";
import { ProgramCardSkeleton } from "./ProgramCardSkeleton";

type Props = {
  isLoading: boolean;
  isError: boolean | string | null;
  children: React.ReactNode;
  search?: string;
  clearSearch?: () => void;
  errorTitle?: string;
};

const GridLayout = ({
  isLoading,
  isError,
  children,
  search,
  clearSearch,
  errorTitle = "Programa no encontrado",
}: Props) => {
  const hasError = Boolean(isError);

  return (
    <div className="mx-auto px-4 py-8 md:px-6">
      {hasError ? (
        <EmptyError title={errorTitle} search={search} clearSearch={clearSearch} />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <ProgramCardSkeleton key={index} />
              ))
            : children}
        </div>
      )}
    </div>
  );
};

export default GridLayout;