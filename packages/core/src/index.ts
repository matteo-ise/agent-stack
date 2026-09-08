import { z } from 'zod';

export const CompanyConfigSchema = z.object({
  name: z.string(),
  domain: z.string(),
  industry: z.string(),
  size: z.enum(['startup', 'mittelstand', 'enterprise']),
});

export const InternalMcpConfigSchema = z.object({
  tools: z.array(z.string()),
  auth: z.string().optional(),
});

export const PublicMcpConfigSchema = z.object({
  enabled: z.boolean(),
  tools: z.array(z.string()),
  rateLimit: z.object({
    requests: z.number(),
    window: z.string(),
  }).optional(),
});

export const GovernanceConfigSchema = z.object({
  level: z.enum(['standard', 'strict', 'custom']),
  policies: z.array(z.string()),
  escalation: z.object({
    channel: z.string(),
    webhook: z.string(),
  }).optional(),
});

export const PaymentsConfigSchema = z.object({
  provider: z.enum(['stripe', 'coinbase', 'crossmint', 'none']),
  policies: z.array(z.string()),
});

export const KontorStackConfigSchema = z.object({
  company: CompanyConfigSchema,
  internal: z.object({ mcp: InternalMcpConfigSchema }),
  public: z.object({ mcp: PublicMcpConfigSchema, wellKnown: z.boolean().optional() }),
  governance: GovernanceConfigSchema,
  payments: PaymentsConfigSchema,
});

export type KontorStackConfig = z.infer<typeof KontorStackConfigSchema>;

/**
 * Defines a KontorStack configuration with full type safety.
 */
export function defineConfig(config: KontorStackConfig): KontorStackConfig {
  return KontorStackConfigSchema.parse(config);
}
