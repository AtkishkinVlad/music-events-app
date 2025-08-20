import { Artist, client } from "@/shared/api";
import { createContext } from "@/shared/hooks";

interface ApiProviderContext {
  artistService: Artist;
}

const artistService = new Artist(client, process.env.API_Key ?? "");

const { Provider } = createContext<ApiProviderContext>({
  artistService,
});

export { Provider };
