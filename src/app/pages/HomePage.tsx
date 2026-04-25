import { useCallback, useMemo, useState } from "react";
import ProgramCard from "../../features/programs/components/ProgramCard";
import type { Program } from "../../features/programs/types/program.typs";
import { AdvancedFilter } from "../../shared/components/AdvancedFilter";
import GridLayout from "../../shared/components/GridLayout";
import { Pagination } from "../../shared/components/Pagination";
import { ProgramDetailModal } from "../../shared/components/ProgramDetailModal";
import { useAdvancedFilter } from "../../shared/hooks/useAdvancedFilter";
import { useFetch } from "../../shared/hooks/useFetch";
import MainLayout from "../layout/MainLayout";
import { LeadForm } from "../../features/leads/components";
import { HomeHero } from "../../features/programs/HomeHero";
import { PROGRAMS_FALLBACK } from "../../features/programs/mocks/programs.mock";

const PROGRAMS_API = "https://my.api.mockaroo.com/programs.json?key=6459ae60";

export default function HomePage() {
  const { data, loading } = useFetch<Program[]>(
    PROGRAMS_API,
    PROGRAMS_FALLBACK,
  );
  const programs = data ?? PROGRAMS_FALLBACK;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    Program["category"] | "all"
  >("all");
  const [page, setPage] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const itemsPerPage = 4;

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
    setPage(1);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategory(value === "" ? "all" : (value as Program["category"]));
    setPage(1);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setSelectedCategory("all");
    setPage(1);
  }, []);

  const handleViewDetails = useCallback((program: Program) => {
    setSelectedProgram(program);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProgram(null);
  }, []);

  const { filteredItems: filteredPrograms } = useAdvancedFilter<
    Program,
    Program["category"]
  >({
    items: programs,
    searchTerm,
    selectedCategory,
    getSearchValue: (program) => program.title,
    getCategory: (program) => program.category,
  });

  const programOptions = useMemo(
    () =>
      programs.map((program) => ({
        label: program.title,
        value: program.title,
      })),
    [programs],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPrograms.length / itemsPerPage),
  );

  const currentPage = Math.min(page, totalPages);

  const visiblePrograms = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredPrograms.slice(start, end);
  }, [filteredPrograms, currentPage]);

  return (
    <MainLayout>
      <HomeHero />

      <section id="programs" className="scroll-mt-28 mt-10">
        <div className="mb-4 flex flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-(--accent)">
            Oferta actual
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-(--text-primary)">
            Programas Académicos
          </h2>
          <p className="max-w-2xl text-sm text-(--text-secondary)">
            Explora las carreras y posgrados activos para captar nuevos leads
            con información clara y actualizada.
          </p>
        </div>

        <AdvancedFilter
          searchValue={searchTerm}
          onSearchChange={handleSearch}
          categoryValue={selectedCategory}
          onCategoryChange={handleCategoryChange}
          searchPlaceholder="Buscar programa por nombre..."
        />

        <GridLayout
          isLoading={loading}
          isError={!loading && filteredPrograms.length === 0}
          search={searchTerm}
          clearSearch={clearSearch}
          errorTitle="No encontramos programas"
        >
          {visiblePrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onViewDetails={handleViewDetails}
            />
          ))}
        </GridLayout>

        {!loading && filteredPrograms.length > itemsPerPage ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        ) : null}
      </section>

      <section id="enrollment" className="scroll-mt-28">
        <LeadForm
          programOptions={programOptions}
          selectedProgram={selectedProgram?.title}
        />
      </section>

      <ProgramDetailModal
        program={selectedProgram}
        isOpen={selectedProgram !== null}
        onClose={handleCloseModal}
      />
    </MainLayout>
  );
}
