import { defineConfig } from '@kontorstack/core';

export default defineConfig({
  company: {
    name: 'Startup AI',
    domain: 'startup.ai',
    industry: 'saas',
    size: 'startup',
  },
  internal: {
    mcp: {
      tools: ['slack', 'github'],
      auth: 'token',
    },
  },
  public: {
    mcp: {
      enabled: true,
      tools: ['status'],
    },
    wellKnown: true,
  },
  governance: {
    level: 'standard',
    policies: ['basic'],
  },
  payments: {
    provider: 'stripe',
    policies: ['growth'],
  },
});
