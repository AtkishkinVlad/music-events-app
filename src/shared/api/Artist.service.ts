import type { paths } from "./schema";
import type { Client } from "openapi-fetch";

export class Artist {
    constructor(private client: Client<paths>, private appId: string) {
        this.client = client;
        this.appId = appId;
    }
    
    getArtist(artistName: string) {
        return this.client.GET("/artists/{artistname}", {
            params: {
                path: {
                    artistname: artistName
                },
                query: {
                    app_id: this.appId
                },
            }
        })
    }
}