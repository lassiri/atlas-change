import React from 'react';
import { Building2, Globe2, Shield, Timer } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">ATLAS CHANGE – خبراء صرف العملات</h1>
          <p className="text-xl text-center text-blue-100">أفضل الأسعار، أسرع الخدمات، وأكثر من مجرد تحويل</p>
        </div>
      </header>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">خدماتنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Globe2 className="w-12 h-12 text-blue-600" />}
              title="صرف العملات الأجنبية"
              description="تحويل العملات العالمية (USD, EUR, GBP, وغيرها) بأسعار دقيقة ومحدثة يوميًا"
            />
            <ServiceCard
              icon={<Timer className="w-12 h-12 text-blue-600" />}
              title="تحديثات يومية لأسعار الصرف"
              description="نعرض لك آخر أسعار السوق لحظة بلحظة"
            />
            <ServiceCard
              icon={<Shield className="w-12 h-12 text-blue-600" />}
              title="حجز العملات مسبقًا"
              description="احجز المبلغ الذي تحتاجه واستلمه بالسعر المتفق عليه"
            />
            <ServiceCard
              icon={<Building2 className="w-12 h-12 text-blue-600" />}
              title="خدمة عملاء احترافية"
              description="فريقنا يتحدث لغات متعددة وجاهز لمساعدتك دائمًا"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">لماذا نحن؟</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="أسعار شفافة ومنافسة" />
          <FeatureCard title="سرعة تنفيذ" />
          <FeatureCard title="أمان كامل في العمليات" />
          <FeatureCard title="خبرة في التعامل مع العملاء من مختلف الجنسيات" />
          <FeatureCard title="موقع يسهل الوصول إليه" />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ title }: { title: string }) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
      <p className="text-lg font-semibold text-blue-900">{title}</p>
    </div>
  );
}

export default Home;