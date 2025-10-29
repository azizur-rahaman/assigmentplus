// Application Port: Storage Service Interface

/**
 * Output port for storage operations
 * This interface defines what the domain needs from the storage layer
 */
export interface IStorageService {
  save<T>(key: string, value: T): void;
  get<T>(key: string): T | null;
  remove(key: string): void;
  clear(): void;
}
