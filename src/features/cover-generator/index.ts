// Feature Module: Cover Generator - Barrel Export

// Domain
export { AssignmentCover } from './domain/entities/AssignmentCover';
export { Template } from './domain/value-objects/Template';
export type { TemplateType } from './domain/value-objects/Template';

// Domain Use Cases
export { GenerateCoverUseCase } from './domain/usecases/GenerateCoverUseCase';
export type { CoverData } from './domain/usecases/GenerateCoverUseCase';

// Domain Repositories (Interfaces)
export type { IPdfGenerator } from './domain/repositories/IPdfGenerator';
export type { IStorageService } from './domain/repositories/IStorageService';

// Data Layer (client-safe only)
export { LocalStorageService } from './data/repositories/LocalStorageService';
// Note: PdfLibAdapter is not exported to avoid bundling server-only code in client

// Presentation
export { CoverGeneratorController } from './presentation/CoverGeneratorController';
export type { GenerateCoverResponse } from './presentation/CoverGeneratorController';
export {
  CoverPreview,
  GenerateButton,
  InputField,
  SelectField,
} from './presentation/components';
