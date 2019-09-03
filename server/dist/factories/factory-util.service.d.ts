export declare class FactoryUtilService {
    id(): string;
    name(): string;
    passwordHash(): string;
    date(): Date;
    randomWinner(blackId: string, whiteId: string): string;
    getWinnerColor(winnerId: string, blackId: string): string;
}
