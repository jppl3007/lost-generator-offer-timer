
import React from 'react';
import { CheckCircle, Zap, Shield, Truck, Star, ArrowRight } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import UnitCounter from '../components/UnitCounter';
import { Button } from '@/components/ui/button';

const Index = () => {
  const handlePurchase = () => {
    // Aqui você adicionaria a lógica de compra
    console.log('Redirecionando para checkout...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <img 
            src="/lovable-uploads/c719e6c2-03ce-4711-94c6-6833c2d43367.png" 
            alt="O Gerador Perdido" 
            className="h-16 md:h-20"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block mb-4 font-semibold animate-bounce">
            🎉 PARABÉNS! VOCÊ FOI SELECIONADO!
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Oferta <span className="text-orange-600">EXCLUSIVA</span> para<br />
            Compradores do Manual
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Como você já investiu no conhecimento, agora oferecemos uma oportunidade única: 
            receba seu <strong>Gerador Perdido já montado</strong> por um preço ainda menor!
          </p>
        </div>

        {/* Timer e Estoque */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <CountdownTimer />
          <UnitCounter />
        </div>

        {/* Urgência */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="text-lg font-bold text-red-800">ATENÇÃO: Esta oferta expira em 5 minutos!</h3>
              <p className="text-red-700">
                Apenas <strong>3 unidades</strong> disponíveis para compradores selecionados. 
                Não perca esta oportunidade única!
              </p>
            </div>
          </div>
        </div>

        {/* Benefícios */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Por que escolher o Gerador Perdido Montado?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Testado e Aprovado</h3>
              <p className="text-gray-600 text-sm">Cada unidade é montada e testada por nossos especialistas</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600 text-sm">Receba em casa em até 7 dias úteis, pronto para usar</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Garantia Total</h3>
              <p className="text-gray-600 text-sm">30 dias de garantia ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6">O que dizem nossos clientes:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-2">
                "Comprei o manual e depois consegui essa oferta. Melhor decisão! 
                Recebi em casa funcionando perfeitamente."
              </p>
              <p className="text-xs text-gray-500">- João Silva, São Paulo</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-2">
                "Economizei tempo e ainda paguei menos. O gerador chegou perfeito 
                e já está gerando energia!"
              </p>
              <p className="text-xs text-gray-500">- Maria Santos, Rio de Janeiro</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-lg text-white mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Última Chance!
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Garante já sua unidade do Gerador Perdido montado por apenas R$ 397
              (R$ 100 MENOS que o manual!)
            </p>
            <Button 
              onClick={handlePurchase}
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-xl px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              QUERO MINHA UNIDADE MONTADA AGORA
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-sm mt-4 opacity-80">
              ✅ Pagamento 100% Seguro | ✅ Entrega Garantida | ✅ 30 dias de Garantia
            </p>
          </div>
          
          <p className="text-gray-500 text-sm">
            Esta é uma oferta limitada e exclusiva para compradores do manual. 
            Não será repetida.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            © 2024 O Gerador Perdido. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
