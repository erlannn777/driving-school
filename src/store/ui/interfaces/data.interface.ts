export interface IModal<T = any> {
  data: T | null;
  coordinates?: { x: number; y: number };
  open: boolean;
}

export interface IUIData {
  signInForm: IModal;
  signUpForm: IModal;
}

export type IUIState = IUIData;
