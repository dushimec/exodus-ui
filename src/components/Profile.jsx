

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, ArrowLeft, Upload, Heart } from 'lucide-react';

function DestinationCard({ imageSrc, location, description, showTutor, aosAnimation }) {
  const { t } = useTranslation();
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${aosAnimation ? `aos-animate aos-init" data-aos="${aosAnimation}` : ''}`}>
      <img src={imageSrc} alt={location} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{location}</h3>
        <p className="text-gray-600">{description}</p>
        {showTutor && (
          <div className="mt-4 bg-blue-100 text-blue-800 p-2 rounded-md text-sm">
            {t('userProfile.preferences.newDestination')}
          </div>
        )}
      </div>
    </div>
  );
}

export default function UserProfileDashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('personal');
  const [profileImage, setProfileImage] = useState('/placeholder.svg?height=96&width=96');
  const [likedDestinations] = useState([
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fae0df8bf179790c2123d2aba2911ebe9447d3273945edf5a1e32b89677d6a",
      location: t('destinations.paris.name'),
      description: t('destinations.paris.description'),
      hasVisited: false
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4998b2f9e2e8f0a3e0b5d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f",
      location: t('destinations.tokyo.name'),
      description: t('destinations.tokyo.description'),
      hasVisited: true
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5998b2f9e2e8f0a3e0b5d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f8d8f",
      location: t('destinations.newYork.name'),
      description: t('destinations.newYork.description'),
      hasVisited: false
    }
  ]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const renderPersonalInfo = () => (
    <div className="bg-primary/10 rounded-lg shadow-md p-6 mb-6 " >
      <h2 className="text-2xl font-bold text-primary mb-4">{t('userProfile.personalInfo.title')}</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="relative group">
          <img src={profileImage} alt="User avatar" className="w-24 h-24 rounded-full mb-2" />
          <label htmlFor="avatar-upload" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
            <Upload className="w-8 h-8" />
            <span className="sr-only">{t('userProfile.personalInfo.uploadPhoto')}</span>
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
        <p className="text-sm text-primary/60 mt-2">{t('userProfile.personalInfo.uploadPhoto')}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-primary font-semibold mb-1">{t('userProfile.personalInfo.fullName')}</label>
          <input id="fullName" type="text" placeholder={t('userProfile.personalInfo.fullName')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="block text-primary font-semibold mb-1">{t('userProfile.personalInfo.email')}</label>
          <input id="email" type="email" placeholder={t('userProfile.personalInfo.email')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-primary font-semibold mb-1">{t('userProfile.personalInfo.phoneNumber')}</label>
          <input id="phone" type="tel" placeholder={t('userProfile.personalInfo.phoneNumber')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
      </div>
      <button className="mt-6 bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-500 transition-colors">
        {t('userProfile.personalInfo.saveChanges')}
      </button>
    </div>
  );

  const renderPreferences = () => (
    <div className="bg-primary/10 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-primary mb-4">{t('userProfile.preferences.title')}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {likedDestinations.map((destination, index) => (
          <DestinationCard
            key={index}
            imageSrc={destination.imageSrc}
            location={destination.location}
            description={destination.description}
            showTutor={!destination.hasVisited}
            aosAnimation="zoom-in"
          />
        ))}
      </div>
      <p className="text-sm text-primary/80 mt-4">{t('userProfile.preferences.description')}</p>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="bg-primary/10 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-primary mb-4">{t('userProfile.accountSettings.title')}</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="currentPassword" className="block text-primary font-semibold mb-1">{t('userProfile.accountSettings.currentPassword')}</label>
          <input id="currentPassword" type="password" placeholder={t('userProfile.accountSettings.currentPassword')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-primary font-semibold mb-1">{t('userProfile.accountSettings.newPassword')}</label>
          <input id="newPassword" type="password" placeholder={t('userProfile.accountSettings.newPassword')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-primary font-semibold mb-1">{t('userProfile.accountSettings.confirmPassword')}</label>
          <input id="confirmPassword" type="password" placeholder={t('userProfile.accountSettings.confirmPassword')} className="w-full p-2 border border-primary/30 rounded-md" />
        </div>
      </div>
      <button className="mt-6 bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors">
        {t('userProfile.accountSettings.changePassword')}
      </button>
    </div>
  );

  const renderSupport = () => (
    <div className="bg-primary/10 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-primary mb-4">{t('userProfile.support.title')}</h2>
      <p className="mb-4">{t('userProfile.support.description')}</p>
      <div className="flex items-center mb-2">
        <Mail className="text-primary mr-2" size={18} />
        <span>{t('userProfile.support.email')}</span>
      </div>
      <div className="flex items-center mb-4">
        <Phone className="text-primary mr-2" size={18} />
        <span>{t('userProfile.support.phone')}</span>
      </div>
      <div className="mb-4">
        <label htmlFor="supportMessage" className="block text-primary font-semibold mb-1">{t('userProfile.support.message')}</label>
        <textarea id="supportMessage" placeholder={t('userProfile.support.messagePlaceholder')} rows={4} className="w-full p-2 border border-primary/30 rounded-md"></textarea>
      </div>
      <button className="bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors">
        {t('userProfile.support.sendMessage')}
      </button>
      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">{t('userProfile.support.faqTitle')}</h3>
      <ul className="list-disc list-inside text-primary space-y-2">
        {t('userProfile.support.faqItems', { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 mt-16">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">{t('userProfile.title')}</h1>
      </header>

      <nav className="mb-6">
        <ul className="flex border-b border-primary/30">
          {['personal', 'preferences', 'settings', 'support'].map((tab) => (
            <li key={tab}>
              <button
                className={`px-4 py-2 font-semibold ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-primary/60 hover:text-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {t(`userProfile.tabs.${tab}`)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {activeTab === 'personal' && renderPersonalInfo()}
        {activeTab === 'preferences' && renderPreferences()}
        {activeTab === 'settings' && renderAccountSettings()}
        {activeTab === 'support' && renderSupport()}
      </main>
    </div>
  );
}

