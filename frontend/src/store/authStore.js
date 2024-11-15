import { create } from 'zustand';
import axios from 'axios';

// Define API URL based on environment
const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'development' ? 'http://localhost:5000/api/auth' : '/api/auth');

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  message: null,

  // Signup
  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(`${API_URL}/signup`, { email, password, name });
      set({ user: data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Error signing up', isLoading: false });
    }
  },

  // Login
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(`${API_URL}/login`, { email, password });
      set({ user: data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Error logging in', isLoading: false });
    }
  },

  // Logout
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({ user: null, isAuthenticated: false, isLoading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Error logging out', isLoading: false });
    }
  },

  // Forgot Password
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(`${API_URL}/forgot-password`, { email });
      set({ message: data.message, isLoading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Error sending reset password email', isLoading: false });
    }
  },

  // Reset Password
  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(`${API_URL}/reset-password/${token}`, { password });
      set({ message: data.message, isLoading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Error resetting password', isLoading: false });
    }
  },

  // Email Verification
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(`${API_URL}/verify-email`, { code });
      set({ user: data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || 'Error verifying email', isLoading: false });
    }
  },

  // Refresh Token (Optional)
  refreshToken: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(`${API_URL}/refresh-token`);
      set({ user: data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  // Check Authentication Status
  checkAuth: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.get(`${API_URL}/check-auth`);
      set({ user: data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  // Clear Error Message
  clearError: () => {
    set({ error: null });
  },

  // Clear Success Message
  clearMessage: () => {
    set({ message: null });
  },
}));
