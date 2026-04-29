import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useToggle } from '../src/hooks/useToggle';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import App from '../src/App';
import React from 'react';

describe('Custom Hooks Assignment', () => {

  describe('useToggle Hook (2 marks)', () => {
    it('should toggle boolean state correctly', () => {
      const { result } = renderHook(() => useToggle(false));
      expect(result.current[0]).toBe(false);
      act(() => {
        result.current[1]();
      });
      expect(result.current[0]).toBe(true);
    });
  });

  describe('useLocalStorage Hook (4 marks)', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    it('should initialize with value from localStorage if exists (2 marks)', () => {
      window.localStorage.setItem('test_key', JSON.stringify('Stored Value'));
      const { result } = renderHook(() => useLocalStorage('test_key', 'Default'));
      expect(result.current[0]).toBe('Stored Value');
    });

    it('should update localStorage when state changes (2 marks)', () => {
      const { result } = renderHook(() => useLocalStorage('user_name', 'Alice'));
      act(() => {
        result.current[1]('Bob');
      });
      expect(window.localStorage.getItem('user_name')).toBe(JSON.stringify('Bob'));
    });
  });

  describe('App Integration (4 marks)', () => {
    it('should change container class when theme button is clicked (2 marks)', () => {
      const { container } = render(<App />);
      const button = screen.getByRole('button');
      const appDiv = container.querySelector('#app-container');
      
      expect(appDiv).toHaveClass('light');
      fireEvent.click(button);
      expect(appDiv).toHaveClass('dark');
    });

    it('should sync input with useLocalStorage (2 marks)', () => {
      render(<App />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'JohnDoe' } });
      
      expect(screen.getByText('JohnDoe')).toBeInTheDocument();
      expect(window.localStorage.getItem('user_name')).toBe(JSON.stringify('JohnDoe'));
    });
  });
});