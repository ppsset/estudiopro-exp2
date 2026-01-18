export function logInfo(message: string, meta?: Record<string, unknown>) {
  console.info(`[DesignHub] ${message}`, meta ?? {});
}

export function logError(message: string, meta?: Record<string, unknown>) {
  console.error(`[DesignHub] ${message}`, meta ?? {});
}
