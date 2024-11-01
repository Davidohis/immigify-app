import { LegacyRef, ReactElement, ReactNode } from "react";

export type ChildrenProps = {
  children?: ReactNode;
  component?: ReactElement;
};

export type ModalProps = {
  showModal: boolean;
  modalBodyClassName?: string;
  preventOverlayClick?: boolean;
  title?: string | ReactNode;
  closeText?: string | ReactNode;
  position?: "right" | "center";
  setShowModal: (val: ((val: boolean) => boolean) | boolean) => void;
  roleID?: string;
  wallet_type?: string;
  transaction_id?: string;
  tenorID?: string;
  isLoading?: boolean;
  isSuccess?: boolean;
  mutate?: (e: object) => void;
  adminID?: string;
  roleCode?: string;
  tutorId?: string;
};

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export interface ButtonCompProps {
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  ref?: LegacyRef<HTMLButtonElement>;
  plain?: boolean;
  styles?: {
    boxShadow: string
  };
}

export interface AppContextType {
  currentStep: number;
  setCurrentStep: (e: number) => void;
  showAgent: boolean;
  setShowAgent: (e: boolean) => void;
  questions: {
    key: number;
    question: string;
    answer: string;
    options: string[];
  }[];
  setQuestions: (e: []) => void;
}
