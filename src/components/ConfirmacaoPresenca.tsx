"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Users, Phone, User, Heart } from 'lucide-react';
import { ConfirmationData } from '@/types';

interface FormErrors {
  name?: string;
  phone?: string;
}

const ConfirmacaoPresenca = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState<ConfirmationData>({
    name: '',
    adults: 1,
    children: 0,
    toddlers: 0,
    phone: '',
    attending: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }
    
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Formato: (11) 99999-9999';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    let processedValue: string | boolean = value;
    
    if (name === 'phone') {
      processedValue = formatPhone(value);
    } else if (name === 'attending') {
      processedValue = value === 'true';
    }
    
    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCounterChange = (field: 'adults' | 'children' | 'toddlers', amount: number) => {
    setFormData((prev) => ({ ...prev, [field]: Math.max(0, prev[field] + amount) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitMessage('');
    setErrors({});

    try {
      const response = await fetch('/api/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitMessage(
          formData.attending 
            ? 'Presença confirmada com sucesso! Estamos ansiosos para celebrar com você! 🎉' 
            : 'Obrigado por nos informar. Sentiremos sua falta! 💕'
        );
        setIsSuccess(true);
        setFormData({
          name: '',
          adults: 1,
          children: 0,
          toddlers: 0,
          phone: '',
          attending: true,
        });
      } else {
        throw new Error(result.message || 'Ocorreu um erro ao enviar o formulário.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setSubmitMessage(`Erro: ${error.message}`);
      } else {
        setSubmitMessage('Ocorreu um erro inesperado. Tente novamente.');
      }
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasMounted) {
    return (
      <section id="presenca" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center mb-8 sm:mb-12">
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
              Confirme sua Presença
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Carregando formulário...
            </p>
          </div>
          <div className="max-w-lg mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl border border-gray-100 animate-pulse">
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-gray-200 rounded"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-12 bg-primary/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="presenca" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center mb-8 sm:mb-12">
          <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
            Confirme sua Presença
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Sua presença tornará nosso dia ainda mais especial! Por favor, confirme até{' '}
            <span className="font-semibold text-primary">31 de Janeiro de 2026</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl border border-gray-100">
          <div className="mb-6">
            <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2" />
              Nome Completo
            </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1 flex items-center">
                <XCircle className="w-3 h-3 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-4">
              <Users className="w-4 h-4 mr-2" />
              Quantas pessoas virão? (incluindo você)
            </label>
            <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-600 mb-2">Adultos (+12)</label>
                <div className="flex items-center justify-center max-w-32 mx-auto">
                  <button 
                    type="button" 
                    onClick={() => handleCounterChange('adults', -1)}
                    disabled={formData.adults <= 1}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-gray-50 font-medium text-lg">
                    {formData.adults}
                  </span>
                  <button 
                    type="button" 
                    onClick={() => handleCounterChange('adults', 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-lg hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-center">
                <label className="block text-sm font-medium text-gray-600 mb-2">Crianças (6-11)</label>
                <div className="flex items-center justify-center max-w-32 mx-auto">
                  <button 
                    type="button" 
                    onClick={() => handleCounterChange('children', -1)}
                    disabled={formData.children <= 0}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-gray-50 font-medium text-lg">
                    {formData.children}
                  </span>
                  <button 
                    type="button" 
                    onClick={() => handleCounterChange('children', 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-lg hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="text-center sm:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">Pequeninos (0-5)</label>
                <div className="flex items-center justify-center max-w-32 mx-auto">
                  <button 
                    type="button" 
                    onClick={() => handleCounterChange('toddlers', -1)}
                    disabled={formData.toddlers <= 0}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-gray-50 font-medium text-lg">
                    {formData.toddlers}
                  </span>
                  <button 
                    type="button" 
                    onClick={() => handleCounterChange('toddlers', 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-lg hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 mr-2" />
              Telefone com DDD
            </label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              value={formData.phone} 
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="(11) 99999-9999"
              maxLength={15}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1 flex items-center">
                <XCircle className="w-3 h-3 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Você irá ao nosso casamento?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.attending === true ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input 
                  type="radio" 
                  name="attending" 
                  value="true" 
                  checked={formData.attending === true} 
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    formData.attending === true ? 'border-green-500 bg-green-500' : 'border-gray-300'
                  }`}>
                    {formData.attending === true && <div className="w-2 h-2 rounded-full bg-white mx-auto mt-0.5" />}
                  </div>
                  <span className="font-medium">🎉 Sim, estarei lá!</span>
                </div>
              </label>
              
              <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.attending === false ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input 
                  type="radio" 
                  name="attending" 
                  value="false" 
                  checked={formData.attending === false} 
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    formData.attending === false ? 'border-red-500 bg-red-500' : 'border-gray-300'
                  }`}>
                    {formData.attending === false && <div className="w-2 h-2 rounded-full bg-white mx-auto mt-0.5" />}
                  </div>
                  <span className="font-medium">😔 Não poderei comparecer</span>
                </div>
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Enviando confirmação...
              </>
            ) : (
              <>
                <Heart className="w-5 h-5 mr-2" />
                Confirmar Presença
              </>
            )}
          </button>

          {submitMessage && (
            <div className={`mt-6 p-4 rounded-lg flex items-start ${
              isSuccess ? 'bg-green-100 border border-green-200 text-green-800' : 'bg-red-100 border border-red-200 text-red-800'
            }`}>
              {isSuccess ? 
                <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" /> : 
                <XCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
              }
              <p className="font-medium">{submitMessage}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ConfirmacaoPresenca;