import { defineConfig } from '@agent-stack/core';

export default defineConfig({
  company: {
    name: 'Mittelstand GmbH',
    domain: 'mittelstand.de',
    industry: 'manufacturing',
    size: 'mittelstand',
  },
  internal: {
    mcp: {
      tools: ['datev', 'xrechnung', 'confluence'],
      auth: 'oauth2',
    },
  },
  public: {
    mcp: {
      enabled: true,
      tools: ['product_catalog', 'order'],
      rateLimit: { requests: 100, window: '1m' },
    },
    wellKnown: true,
  },
  governance: {
    level: 'standard',
    policies: ['financial-controls', 'dsgvo'],
    escalation: {
      channel: 'slack',
      webhook: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
    },
  },
  payments: {
    provider: 'stripe',
    policies: ['conservative'],
  },
});
