import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginCadastro = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyEmail: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.email && formData.password) {
      console.log('Form submitted:', formData);
      navigate('/hotels');
    } else {
      alert('Preencha todos os campos obrigátorios!')
    }

  };

  const handleGoogleLogin = () => {
    console.log('Login com Google');
    navigate('/hotels')
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 text-center ${
                activeTab === 'login'
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                  : 'text-gray-500'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('cadastro')}
              className={`flex-1 py-2 text-center ${
                activeTab === 'cadastro'
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                  : 'text-gray-500'
              }`}
            >
              Cadastro
            </button>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full mb-6 flex items-center justify-center gap-2 bg-white border border-gray-300 p-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Entrar com Google
          </button>

          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">ou</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === 'cadastro' && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Nome Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-blue-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Digite seu nome completo"
                    maxLength={255}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email Pessoal
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite seu email pessoal"
                  maxLength={255}
                />
              </div>
            </div>

            {activeTab === 'cadastro' && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email Empresarial
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-blue-400" />
                  </div>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Digite seu email empresarial"
                    maxLength={255}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite sua senha"
                  maxLength={255}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {activeTab === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>
          </form>

          {activeTab === 'login' && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setActiveTab('cadastro')}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Criar uma conta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;