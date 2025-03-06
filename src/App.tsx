"use client"

import type React from "react"

import { Route, Routes, Navigate } from "react-router"
import { useEffect, useState } from "react"
import "./App.css"

import Navbar from "./includes/navbar/Navbar"
// import Footer from "./includes/footer/Footer"
import Submenu from "./includes/SubMenu/SubMenu"
import Login from "./includes/login/Login"

import Home from "./pages/Home"

function Alertas() {
  return (
    <div>
      <h1>No discponible</h1>
    </div>
  )
}

// Componente para proteger rutas
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <Navbar />
      <div className="h-dvh">{children}</div>
      {/* <Footer /> */}
    </>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular verificación de autenticación
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/alertas"
        element={
          <ProtectedRoute>
            <Alertas />
          </ProtectedRoute>
        }
      />
      <Route
        path="/submenu/:id"
        element={
          <ProtectedRoute>
            <Submenu />
          </ProtectedRoute>
        }
      />
      <Route
        path="/submenu/parametros/:id"
        element={
          <ProtectedRoute>
            <Submenu />
          </ProtectedRoute>
        }
      />

      {/* Redirigir cualquier otra ruta a login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

