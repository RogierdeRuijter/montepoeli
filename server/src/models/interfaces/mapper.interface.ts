export interface Mapper<T> {
  convert(...args: any[]): T;
}
