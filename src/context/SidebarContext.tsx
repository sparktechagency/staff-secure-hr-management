"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define types for the context state
interface SidebarContextType {
  isCollapsed: boolean;
  handleToggleCollapse: () => void;
}

// Create the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Define the provider component
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  // Ensure localStorage is only accessed on the client side
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    // Only access localStorage in the browser environment
    if (typeof window !== "undefined") {
      const storedIsCollapsed = localStorage.getItem("staffIsCollapsed");
      setIsCollapsed(storedIsCollapsed === "true");
    }
  }, []); // Run only once when the component mounts

  const handleToggleCollapse = () => {
    const newCollapseState = !isCollapsed;
    setIsCollapsed(newCollapseState); // Update state

    // Store the new state in localStorage as a string ("true" or "false")
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "staffIsCollapsed",
        newCollapseState ? "true" : "false"
      );
    }
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, handleToggleCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};
