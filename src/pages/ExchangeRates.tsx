import React from 'react';

function ExchangeRates() {
  const currentDate = new Date().toLocaleDateString('ar-MA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">أسعار الصرف اليومية</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        تحديث يومي لأسعار صرف العملات الأجنبية في ATLAS CHANGE
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-blue-50">
            <p className="text-lg text-blue-900">
              <span className="font-semibold">آخر تحديث:</span> {currentDate}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              (تُحدث الأسعار بشكل يومي حسب السوق)
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-right">العملة</th>
                  <th className="px-6 py-4 text-center">الشراء</th>
                  <th className="px-6 py-4 text-center">البيع</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <ExchangeRow currency="الدولار الأمريكي (USD)" buy="10.20" sell="10.40" />
                <ExchangeRow currency="اليورو (EUR)" buy="11.00" sell="11.25" />
                <ExchangeRow currency="الجنيه الإسترليني (GBP)" buy="12.90" sell="13.20" />
                <ExchangeRow currency="الدرهم الإماراتي (AED)" buy="2.75" sell="2.85" />
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-blue-50">
            <p className="text-sm text-gray-600">
              📝 ملاحظة: الأسعار قابلة للتغيير خلال اليوم حسب تقلبات السوق. يرجى الاتصال بنا لتأكيد السعر قبل تنفيذ أي عملية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExchangeRow({ currency, buy, sell }: { currency: string; buy: string; sell: string }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 text-right">{currency}</td>
      <td className="px-6 py-4 text-center">{buy} MAD</td>
      <td className="px-6 py-4 text-center">{sell} MAD</td>
    </tr>
  );
}

export default ExchangeRates;