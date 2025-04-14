import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">تواصل معنا</h1>
      <p className="text-xl text-center text-gray-600 mb-12">
        هل لديك سؤال؟ أو ترغب بمعرفة سعر صرف معين؟ يسعدنا تواصلك معنا!
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <ContactItem
            icon={<MapPin className="w-6 h-6" />}
            title="عنوان المكتب"
            info="[أدخل العنوان الكامل هنا]"
          />
          <ContactItem
            icon={<Phone className="w-6 h-6" />}
            title="رقم الهاتف"
            info="[أدخل الرقم]"
          />
          <ContactItem
            icon={<Mail className="w-6 h-6" />}
            title="البريد الإلكتروني"
            info="email@atlaschange.com"
          />
          <ContactItem
            icon={<Clock className="w-6 h-6" />}
            title="ساعات العمل"
            info="من الإثنين إلى السبت - من الساعة 9:00 صباحًا إلى 7:00 مساءً"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-900">ارسل لنا رسالة</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">الاسم</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">الرسالة</label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, info }: { icon: React.ReactNode; title: string; info: string }) {
  return (
    <div className="flex items-start space-x-4 rtl:space-x-reverse">
      <div className="bg-blue-100 p-3 rounded-full">
        {React.cloneElement(icon as React.ReactElement, { className: 'text-blue-600' })}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-blue-900 mb-1">{title}</h3>
        <p className="text-gray-600">{info}</p>
      </div>
    </div>
  );
}

export default Contact;