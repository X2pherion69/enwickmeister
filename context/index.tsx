"use client";

import {
  FC,
  ReactNode,
  createContext,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface AppContextProps {
  children: ReactNode;
}

type SelectedSection = {
  index: number;
  id: string;
};

interface ContextProps {
  selectedSection: SelectedSection;
  setSelectSection: Dispatch<SetStateAction<SelectedSection>>;
}

const Context = createContext<ContextProps>({
  selectedSection: { id: "", index: 0 },
  setSelectSection: () => {},
});

export const useAppCtx = () => useContext(Context);

export const AppContext: FC<AppContextProps> = ({ children }) => {
  const [selectedSection, setSelectSection] = useState<SelectedSection>({
    id: "",
    index: 0,
  });
  const ctxValue: ContextProps = useMemo(
    () => ({
      selectedSection,
      setSelectSection,
    }),
    [selectedSection]
  );
  return <Context.Provider value={ctxValue}>{children}</Context.Provider>;
};
