// Rotas da autenticação - acessíveis quando o usuário não estiver logado (telas de login e cadastro)

import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  const user = localStorage.getItem("@zandamovies:user");

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

    </Routes>
  );
}