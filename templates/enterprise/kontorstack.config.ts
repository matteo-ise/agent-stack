import { defineConfig } from '@agent-stack/core';

export default defineConfig({
  company: {
    name: 'Enterprise Corp',
    domain: 'enterprise.com',
    industry: 'services',
    size: 'enterprise',
  },
  internal: {
    mcp: {
      tools: ['datev', 'xrechnung', 'confluence', 'sap', 'jira'],
      auth: 'saml',
    },
  },
  public: {
    mcp: {
      enabled: true,
      tools: ['product_catalog', 'order', 'invoice', 'support'],
      rateLimit: { requests: 1000, window: '1m' },
    },
    wellKnown: true,
  },
  governance: {
    level: 'strict',
    policies: ['financial-controls', 'dsgvo', 'iso27001', 'custom-enterprise'],
    escalation: {
      channel: 'slack',
      webhook: 'https://hooks.slack.com/...',
    },
  },
  payments: {
    provider: 'stripe',
    policies: ['strict-audit'],
  },
});
