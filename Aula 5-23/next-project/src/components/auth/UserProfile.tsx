"use client";
import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/me");

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Erro ao carregar perfil");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className="text-center">A carregar perfil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="p-3 bg-red-100 text-red-700 rounded-md">{error}</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className="text-center">Utilizador não encontrado</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Perfil do Utilizador
      </h2>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-500">ID</p>
          <p className="font-medium">{user.id}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
