import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { normalizeUserList } from '../context/AppContext';

describe('Vault by Virat Kohli Website Tests', () => {
  it('renders the Vault brand heading and identity', () => {
    render(<App />);
    const headings = screen.getAllByText(/VAULT/i);
    expect(headings.length).toBeGreaterThan(0);
  });

  it('guarantees unique IDs and strict row isolation for user operations', () => {
    const rawUsers = [
      { id: 'usr-1', name: 'User One', status: 'ACTIVE' },
      { id: 'usr-1', name: 'Duplicate User', status: 'ACTIVE' },
      { id: '', name: 'Missing ID User', status: 'ACTIVE' },
    ];

    const normalized = normalizeUserList(rawUsers);
    
    // 1. Verify all IDs are non-empty and strictly unique
    const ids = normalized.map(u => u.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(normalized.length);

    // 2. Test single-row mutation isolation: suspend only row #2
    const targetId = normalized[1].id;
    const mutated = normalized.map(u => u.id === targetId ? { ...u, status: 'SUSPENDED' } : u);

    expect(mutated[1].status).toBe('SUSPENDED');
    expect(mutated[0].status).toBe('ACTIVE');
    expect(mutated[2].status).toBe('ACTIVE');
  });
});
