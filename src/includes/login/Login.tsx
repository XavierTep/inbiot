"use client"

import type React from "react"

import {  useState } from "react"
import { useNavigate } from "react-router"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const users = [
    {
      username: "admin",
      password: "1234"
    },
    {
      username: "user",
      password: "1234"
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password) {
      alert("Debes ingresar un nombre de usuario y contraseña")
      return
    }

    const user = users.find(user => user.username === username && user.password === password)

    if (!user) {
      alert("Usuario o contraseña incorrectos")
      return
    }

    setIsLoading(true)

    // Simulando una petición de autenticación
    setTimeout(() => {
      setIsLoading(false)
      // Guardar estado de autenticación en localStorage
      localStorage.setItem("isAuthenticated", "true")
      // Redirigir al home después de login exitoso
      navigate("/")
    }, 1500)
  }

  return (
    <div className="flex justify-center items-center h-dvh ">
      <div className="bg-gray-100 rounded-lg shadow-2xl w-full max-w-md p-6 flex flex-col justify-center items-center space-y-6">
      <img src="/cropped-LOGO-LODEPA-sin-fondo.png" alt="Logo" className="w-36" />
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
          <p className="text-gray-600">Ingresa tus credenciales para acceder</p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Nombre de Usuario
            </label>
            <input
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md text-white font-medium cursor-pointer ${
              isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
    </div>
  )
}

