// Application Port: PDF Generator Interface

import { AssignmentCover } from '../../domain/entities/AssignmentCover';
import { Template } from '../../domain/value-objects/Template';

/**
 * Output port for PDF generation
 * This interface defines what the domain needs from the infrastructure layer
 */
export interface IPdfGenerator {
  generate(cover: AssignmentCover, template: Template): Promise<Uint8Array>;
}
