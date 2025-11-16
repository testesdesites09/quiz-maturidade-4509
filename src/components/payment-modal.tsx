'use client';

import { X, CreditCard, Smartphone, Barcode, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { saveSettings } from '@/lib/storage';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
}

export function PaymentModal({ isOpen, onClose, onPaymentComplete }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'pix' | 'card' | 'boleto' | 'paypal' | 'digital'>('pix');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simular processamento de pagamento
    setTimeout(() => {
      saveSettings({ paymentStatus: 'completed' });
      setIsProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#2C2C2C] rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#2C5F6F] dark:bg-[#1A3A44] p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Finalizar Pagamento</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <p className="text-white/80 mt-2">Escolha sua forma de pagamento</p>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-6">
          {/* Valor */}
          <div className="bg-[#F5F1E8] dark:bg-[#1A1A1A] p-6 rounded-xl text-center border-2 border-[#2C5F6F]/20">
            <p className="text-sm text-[#4A4A4A] dark:text-gray-400 mb-2">Valor do Relatório Completo</p>
            <p className="text-4xl font-bold text-[#2C5F6F] dark:text-[#5A7C5A]">R$ 47,00</p>
            <p className="text-xs text-[#8B7355] dark:text-gray-500 mt-2">Pagamento único • Acesso imediato</p>
          </div>

          {/* Métodos de Pagamento */}
          <div className="space-y-3">
            <button
              onClick={() => setSelectedMethod('pix')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                selectedMethod === 'pix'
                  ? 'border-[#2C5F6F] bg-[#2C5F6F]/5 dark:bg-[#2C5F6F]/10'
                  : 'border-gray-200 dark:border-gray-700 hover:border-[#2C5F6F]/50'
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-[#32BCAD] flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-[#2C5F6F] dark:text-white">PIX</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Aprovação instantânea</p>
              </div>
            </button>

            <button
              onClick={() => setSelectedMethod('card')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                selectedMethod === 'card'
                  ? 'border-[#2C5F6F] bg-[#2C5F6F]/5 dark:bg-[#2C5F6F]/10'
                  : 'border-gray-200 dark:border-gray-700 hover:border-[#2C5F6F]/50'
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-[#5A7C5A] flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-[#2C5F6F] dark:text-white">Cartão de Crédito</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Parcelamento disponível</p>
              </div>
            </button>

            <button
              onClick={() => setSelectedMethod('boleto')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                selectedMethod === 'boleto'
                  ? 'border-[#2C5F6F] bg-[#2C5F6F]/5 dark:bg-[#2C5F6F]/10'
                  : 'border-gray-200 dark:border-gray-700 hover:border-[#2C5F6F]/50'
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-[#8B7355] flex items-center justify-center">
                <Barcode className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-[#2C5F6F] dark:text-white">Boleto Bancário</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Compensação em 1-2 dias</p>
              </div>
            </button>

            <button
              onClick={() => setSelectedMethod('digital')}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                selectedMethod === 'digital'
                  ? 'border-[#2C5F6F] bg-[#2C5F6F]/5 dark:bg-[#2C5F6F]/10'
                  : 'border-gray-200 dark:border-gray-700 hover:border-[#2C5F6F]/50'
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-[#2C5F6F] flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-[#2C5F6F] dark:text-white">Carteiras Digitais</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">PayPal, Apple Pay, Google Pay</p>
              </div>
            </button>
          </div>

          {/* QR Code PIX (mock) */}
          {selectedMethod === 'pix' && (
            <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl border-2 border-[#32BCAD]/30 text-center">
              <div className="w-48 h-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <p className="text-sm text-gray-500">QR Code PIX</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Escaneie o código ou copie a chave PIX</p>
              <button className="mt-3 px-4 py-2 bg-[#32BCAD] text-white rounded-lg text-sm hover:bg-[#2AA89A] transition-colors">
                Copiar Chave PIX
              </button>
            </div>
          )}

          {/* Botão de Pagamento */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full py-4 bg-[#2C5F6F] hover:bg-[#1A3A44] text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isProcessing ? 'Processando...' : 'Confirmar Pagamento'}
          </button>

          {/* Segurança */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Pagamento 100% seguro e criptografado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
