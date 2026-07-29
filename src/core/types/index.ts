export type ActiveModule = 'home' | 'about' | 'equipment' | 'manpower' | 'services' | 'contact' | 'admin';

export interface ToastState {
  message: string;
  type: 'success' | 'info' | 'error';
  visible: boolean;
}
