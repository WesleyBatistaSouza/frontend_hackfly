import { useState } from 'react';
import { Eye, EyeOff, Building2, MapPin, Star, Image, Info, Building } from 'lucide-react';

const HotelRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    hotelChain: '',
    stars: '3',
    latitude: '',
    longitude: '',
    description: '',
    address: '',
    district: '',
    city: '',
    state: '',
    country: '',
    password: '',
    cnpj: '',
    amenities: []
  });

  const [errors, setErrors] = useState({});

  const amenitiesOptions = [
    'Wi-Fi', 'Piscina', 'Academia', 'Restaurante', 
    'Estacionamento', 'Ar Condicionado', 'Room Service'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAmenitiesChange = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3 || formData.name.length > 255) {
      newErrors.name = "O nome do hotel é obrigatório e deve ter no mínimo 3 caracteres.";
    }
    if (formData.hotelChain && formData.hotelChain.length > 200) {
      newErrors.hotelChain = "O nome da rede hoteleira não pode exceder 200 caracteres.";
    }
    if (!formData.password || formData.password.length < 6 || formData.password.length > 100) {
      newErrors.password = "A senha deve ter no mínimo 6 caracteres.";
    }
    if (!formData.cnpj || formData.cnpj.length !== 18) {
      newErrors.cnpj = "O CNPJ é obrigatório e deve ter 18 caracteres.";
    }
    if (!formData.address || formData.address.length < 5 || formData.address.length > 255) {
      newErrors.address = "O endereço é obrigatório e deve ter no mínimo 5 caracteres.";
    }
    if (!formData.city || formData.city.length < 3 || formData.city.length > 255) {
      newErrors.city = "A cidade é obrigatória e deve ter no mínimo 3 caracteres.";
    }
    if (!formData.state || formData.state.length < 2 || formData.state.length > 255) {
      newErrors.state = "O estado é obrigatório e deve ter no mínimo 2 caracteres.";
    }
    if (!formData.latitude || !formData.longitude) {
      newErrors.coordinates = "Latitude e Longitude são obrigatórios.";
    }
    if (!formData.description || formData.description.length < 1 || formData.description.length > 500) {
      newErrors.description = "A descrição deve ter entre 5 e 500 caracteres.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex">
      <div className="hidden lg:block w-1/2 relative">
        <img 
          src="/assets/background2.jpg" 
          alt="Hotel registration" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 min-h-screen overflow-y-auto bg-white p-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Cadastro de Hotel</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Nome do Hotel</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite o nome do hotel"
                  maxLength={255}
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Rede Hoteleira</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type="text"
                  name="hotelChain"
                  value={formData.hotelChain}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite o nome da rede hoteleira (opcional)"
                  maxLength={255}
                />
              </div>
              {errors.hotelChain && <p className="text-red-500 text-xs">{errors.hotelChain}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Estrelas</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Star className="h-5 w-5 text-blue-400" />
                  </div>
                  <select
                    name="stars"
                    value={formData.stars}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} estrelas</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">CNPJ</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-blue-400" />
                  </div>
                  <input
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="XX.XXX.XXX/XXXX-XX"
                    maxLength={18}
                  />
                </div>
                {errors.cnpj && <p className="text-red-500 text-xs">{errors.cnpj}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Endereço</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Endereço completo"
                  maxLength={255}
                />
              </div>
              {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Cidade</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Cidade"
                />
                {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Estado</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Estado"
                />
                {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Latitude</label>
                <input
                  type="text"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Latitude"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Longitude</label>
                <input
                  type="text"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Longitude"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Descrição</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 pt-2 pointer-events-none">
                  <Info className="h-5 w-5 text-blue-400" />
                </div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Descrição do hotel"
                  rows={3}
                />
              </div>
              {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Eye className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite sua senha"
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
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Comodidades</label>
              <div className="grid grid-cols-2 gap-2">
                {amenitiesOptions.map(amenity => (
                  <label key={amenity} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenitiesChange(amenity)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Imagem Principal</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Image className="w-8 h-8 mb-2 text-gray-500" />
                    <p className="text-sm text-gray-500">Clique para fazer upload</p>
                  </div>
                  <input type="file" className="hidden" accept="image/*" />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cadastrar Hotel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelRegistration;
