/**
 * Contrato de integración para la consulta de estado de una PQR.
 *
 * ProShare debe definir la URL, método, parámetros, autenticación y forma de
 * interpretar la respuesta antes de asignar una implementación a este cliente.
 */
export type PqrsStatusResult =
  | { kind: "success"; data: unknown }
  | { kind: "not-found" };

export type PqrsStatusClient = (
  radicado: string,
) => Promise<PqrsStatusResult>;

// Pendiente de conectar con las especificaciones oficiales de ProShare.
export const pqrsStatusClient: PqrsStatusClient | null = null;
