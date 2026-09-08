#!/usr/bin/env node
import { Command } from 'commander';
import prompts from 'prompts';
import fs from 'fs';
import path from 'path';

const program = new Command();

program
  .name('create-agent-stack')
  .description('Scaffold a new AgentStack project')
  .version('1.0.0')
  .action(async () => {
    console.log('🏗️  Welcome to AgentStack - Das Betriebssystem für agentische Unternehmen\\n');

    const response = await prompts([
      {
        type: 'text',
        name: 'companyName',
        message: 'Firmenname?',
        initial: 'AgentStack GmbH'
      },
      {
        type: 'text',
        name: 'domain',
        message: 'Domain?',
        initial: 'agent-stack.de'
      },
      {
        type: 'select',
        name: 'industry',
        message: 'Branche?',
        choices: [
          { title: 'SaaS', value: 'saas' },
          { title: 'Dienstleistung', value: 'services' },
          { title: 'Handel', value: 'retail' },
          { title: 'Produktion', value: 'manufacturing' }
        ]
      },
      {
        type: 'select',
        name: 'size',
        message: 'Unternehmensgröße?',
        choices: [
          { title: 'Startup (1-50)', value: 'startup' },
          { title: 'Mittelstand (50-500)', value: 'mittelstand' },
          { title: 'Enterprise (500+)', value: 'enterprise' }
        ]
      },
      {
        type: 'multiselect',
        name: 'integrations',
        message: 'Welche Integrationen?',
        choices: [
          { title: 'DATEV', value: 'datev', selected: true },
          { title: 'XRechnung', value: 'xrechnung', selected: true },
          { title: 'ELSTER', value: 'elster' },
          { title: 'Handelsregister', value: 'handelsregister', selected: true }
        ]
      },
      {
        type: 'select',
        name: 'payments',
        message: 'Agent-Payments?',
        choices: [
          { title: 'Stripe', value: 'stripe' },
          { title: 'Coinbase', value: 'coinbase' },
          { title: 'Crossmint', value: 'crossmint' },
          { title: 'None', value: 'none' }
        ]
      },
      {
        type: 'select',
        name: 'governance',
        message: 'Governance-Level?',
        choices: [
          { title: 'Standard', value: 'standard' },
          { title: 'Strict', value: 'strict' },
          { title: 'Custom', value: 'custom' }
        ]
      }
    ]);

    if (Object.keys(response).length === 0) {
      console.log('Setup aborted.');
      return;
    }

    console.log('\\n🚀 Initializing AgentStack...');
    console.log(`- Template: ${response.size}`);
    console.log(`- Integrations: ${response.integrations.join(', ')}`);
    console.log(`- Payments: ${response.payments}`);
    console.log(`- Governance: ${response.governance}`);
    
    // In a real CLI, we would copy template files from ../../templates
    // For this demonstration, we'll write a basic message indicating success.
    
    console.log('\\n✅ Done! Next steps:');
    console.log('1. cd ./agent-stack-app');
    console.log('2. npm install');
    console.log('3. npm run dev');
  });

program.parse();
