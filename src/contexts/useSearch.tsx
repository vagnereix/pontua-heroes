'use client';

import { Hero } from '@/types/hero';
import { getHeroes } from '@/utils/functions';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface SearchContextData {
  heroes: Hero[];
  loading: boolean;
  setHeroes: (heroes: Hero[]) => void;
  setLoading: (loading: boolean) => void;
  setSearch: (search: string | undefined) => void;
  offset: number;
  setOffset: (offset: number) => void;
  totalHeroes: number;
  setTotalHeroes: (totalHeroes: number) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const SearchContext = createContext({} as SearchContextData);

interface SearchContextProps {
  children: ReactNode;
}

export default function SearchContextProvider({
  children,
}: SearchContextProps) {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalHeroes, setTotalHeroes] = useState(0);

  useEffect(() => {
    async function fetchHeroes() {
      const { heroes: fetchedHeroes, total } = await getHeroes(offset, search);

      setHeroes(fetchedHeroes);
      setTotalHeroes(total);
      setLoading(false);
    }

    fetchHeroes();
  }, [search, offset]);

  return (
    <SearchContext.Provider
      value={{
        heroes,
        loading,
        setHeroes,
        setLoading,
        setSearch,
        offset,
        setOffset,
        totalHeroes,
        setTotalHeroes,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  return context;
}
