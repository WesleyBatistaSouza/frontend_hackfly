import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginCadastro = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyEmail: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateFields = () => {
    const errors = [];
    if (activeTab === "cadastro" && (formData.name.length < 5 || formData.name.length > 250)) {
      errors.push("O nome completo deve ter no mínimo 5 caracteres.");
    }
    if (formData.email.length < 6 || formData.email.length > 320) {
      errors.push("O email pessoal deve ter no mínimo 6 caracteres.");
    }
    if (activeTab === "cadastro" && (formData.companyEmail.length < 6 || formData.companyEmail.length > 320)) {
      errors.push("O email empresarial deve ter no mínimo 6 caracteres.");
    }
    if (formData.password.length < 6 || formData.password.length > 100) {
      errors.push("A senha deve ter no mínimo 6 caracteres.");
    }

    if (errors.length > 0) {
      setError(errors.join(" "));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateFields()) {
      setLoading(false);
      return;
    }

    try {
      const endpoint = activeTab === "login" ? "/api/auth/login" : "/api/auth/register";
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          companyEmail: activeTab === "cadastro" ? formData.companyEmail : undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Algo deu errado. Tente novamente.");
        return;
      }

      if (activeTab === "login") {
        window.location.href = "/points";
      } else {
        alert("Cadastro realizado com sucesso!");
        setActiveTab("login");
      }
    } catch (error) {
      setError("Erro ao tentar se conectar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    alert("Funcionalidade de login com Google ainda não implementada.");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-5xl">
        <div className="hidden lg:block lg:w-1/2 rounded-l-lg relative overflow-hidden">
          <img
            src="/assets/background.png"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/30 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-white text-3xl font-bold mb-4">Bem-vindo!</h2>
              <p className="text-white/90">
                Acesse sua conta ou cadastre-se para começar a usar nossa plataforma.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8">
          <div className="flex mb-8 border-b">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2 text-center ${
                activeTab === "login"
                  ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("cadastro")}
              className={`flex-1 py-2 text-center ${
                activeTab === "cadastro"
                  ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              Cadastro
            </button>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full mb-6 flex items-center justify-center gap-2 bg-white border border-gray-300 p-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24"></svg>
            Entrar com Google
          </button>

          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">ou</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === "cadastro" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Digite seu nome completo"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Pessoal</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Digite seu email"
              />
            </div>

            {activeTab === "cadastro" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Empresarial</label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Digite seu email empresarial"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Digite sua senha"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              {loading ? "Aguarde..." : activeTab === "login" ? "Entrar" : "Cadastrar"}
            </button>
          </form>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

          {activeTab === "login" && (
            <p className="mt-6 text-center">
              Não tem uma conta?{" "}
              <button
                onClick={() => setActiveTab("cadastro")}
                className="text-blue-600 hover:text-blue-800"
              >
                Cadastre-se
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;
