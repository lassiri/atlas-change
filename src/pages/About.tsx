import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">من نحن – ATLAS CHANGE</h1>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800 text-center">
          شغفنا هو تقديم خدمة صرف عملات آمنة، سريعة، وشفافة
        </h2>
        
        <div className="space-y-8 text-lg text-gray-700">
          <p>
            نحن شركة ATLAS CHANGE، متخصصة في صرف العملات الأجنبية بخبرة تمتد لسنوات في السوق المالية. 
            نهدف إلى تقديم أفضل تجربة لعملائنا من خلال أسعار صرف دقيقة، خدمات موثوقة، 
            وفريق يتحدث لغات متعددة لخدمة الجميع من مختلف الجنسيات.
          </p>
          
          <p>
            نحن نؤمن بأن الثقة هي الأساس في التعاملات المالية، لذا نلتزم بالشفافية التامة 
            ونوفر كل المعلومات التي يحتاجها عملاؤنا لاتخاذ قراراتهم بكل وضوح واطمئنان.
          </p>
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">قيمنا الأساسية</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>الشفافية في كل تعاملاتنا</li>
            <li>الدقة في تنفيذ العمليات</li>
            <li>خدمة عملاء متميزة</li>
            <li>أسعار منافسة وعادلة</li>
            <li>احترام وقت العميل</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;