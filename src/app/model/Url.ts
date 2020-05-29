export class Url {
    longUrl: string;
    shortUrl?: string;
    copied: boolean;

    constructor(longUrl) {
        this.longUrl = longUrl;
        this.copied = false;
    }
}