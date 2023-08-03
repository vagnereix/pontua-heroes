import { marvelApi } from '@/services/api';
import { Hero } from '@/types/hero';

export async function getHeroes(
  offset: number,
  search?: string,
  limit?: number
) {
  const { data } = await marvelApi.get(`/characters`, {
    params: {
      offset: offset,
      limit: limit,
      nameStartsWith: search,
    },
  });

  const heroes: Hero[] = data.data.results.map((hero: Hero) => {
    return {
      id: hero.id,
      name: hero.name,
      description: hero.description,
      thumbnail: {
        path: hero.thumbnail.path,
        extension: hero.thumbnail.extension,
      },
    };
  });

  return { heroes, total: data.data.total as number };
}
