export interface Factory<T> {
    create(): T;
    createMany(amount: number): T[];
}
