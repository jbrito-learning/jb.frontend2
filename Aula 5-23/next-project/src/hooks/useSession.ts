import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export interface User {
  id: string;
  email: string;
}

export interface SessionState {
  isLoggedIn: boolean;
  user: User | null;
  isLoading: boolean;
}

export interface SessionContextValue extends SessionState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export function useSession(): SessionContextValue {
  const [session, setSession] = useState<SessionState>({
    isLoggedIn: false,
    user: null,
    isLoading: true,
  });
  const pathname = usePathname();
  const router = useRouter();

  const refresh = useCallback(async () => {
    try {
      setSession((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch("/api/me");

      if (response.ok) {
        const user = await response.json();
        setSession({
          isLoggedIn: true,
          user,
          isLoading: false,
        });
      } else {
        setSession({
          isLoggedIn: false,
          user: null,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setSession({
        isLoggedIn: false,
        user: null,
        isLoading: false,
      });
    }
  }, []);

  // Check session on mount and when pathname changes
  useEffect(() => {
    refresh();
  }, [pathname, refresh]);

  // Listen for auth status changes via custom event
  useEffect(() => {
    const handleAuthChange = () => {
      refresh();
    };

    window.addEventListener("authChange", handleAuthChange);
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, [refresh]);

  const login = async (email: string, password: string) => {
    try {
      setSession((prev) => ({ ...prev, isLoading: true }));

      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Trigger refresh to update session state
      await refresh();

      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event("authChange"));

      // Navigate to user page
      router.refresh();
      router.push("/user");
    } catch (error) {
      setSession((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const logout = async () => {
    try {
      setSession((prev) => ({ ...prev, isLoading: true }));

      const response = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      setSession({
        isLoggedIn: false,
        user: null,
        isLoading: false,
      });

      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event("authChange"));

      // Navigate to home page
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
      setSession((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return {
    ...session,
    login,
    logout,
    refresh,
  };
}
