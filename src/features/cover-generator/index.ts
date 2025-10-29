// Feature Module: Cover Generator - Barrel Export

// Domain
export { AssignmentCover } from './domain/entities/AssignmentCover';
export { Template } from './domain/value-objects/Template';
export type { TemplateType } from './domain/value-objects/Template';

// Application
export { GenerateCoverUseCase } from './application/use-cases/GenerateCoverUseCase';
export type { CoverData } from './application/use-cases/GenerateCoverUseCase';
export type { IPdfGenerator } from './application/ports/IPdfGenerator';
export type { IStorageService } from './application/ports/IStorageService';

// Infrastructure (client-safe only)
export { LocalStorageService } from './infrastructure/services/LocalStorageService';
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
