import React, { useEffect } from 'react';
import product from '../IMAGE/product.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation



function Products() {
  const { t } = useTranslation(); // Initialize translation
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out' });
  }, []);
  const productImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5b17956ea7e7d5b7f13492beb1487a3851f8866b158364fba423bf3822dd81c?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5460f161ef75e2537bf128369dbc2ceab3d346f0a8f20be9af61d4767c616f74?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e9c60934b70911e6c16883e2b9804a8a421c55f0c3b725549fb2eeadd1d6d4d?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e950925c4952501a920745f9dbfecf21267e5d05f71ff37abe98696b0b62d9e2?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 4" },
    // Add more product images as needed
    

{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9176ff3abb57e6e3c41797c8b8c5a2b822b75e816a3354c5617687f2ce26f58c?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 5" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa61c0bdc47483f94672c29b824dfe72d9961f636285313669c2f9d72d811d86?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 6" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f36e70858b66b1c24dddddab7cbb3a4fcace60937fd03b59cf08e5b8e51cf20?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 7" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/68bf1fe9057e3f6450add1a3ecece223827bac7ef8886b916348728eacc95d06?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 8" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/47c3b553d4761c185e6d7580b1bafd93e4bb137424b90423b654c4f127038f87?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 9" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6ca93c115130b1d41be8ab8c95f1a60ffc2fcd1afd7f3dcad2c2ee8311cc0fd?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 10" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0b3f6c16094ba87dac11ce2607696e2c2590a95fe198c63a05b2f682923a381?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 11" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8faeb7a4c0d534bbc670626f1e99a452c73114c117cdeb15f4664a2f9273ff2?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 12" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2bb6ff5034b654a2e17795f9d1a21b55a2b65864b4604a801e96db41adb057f?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 13" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c179bae3d474b62c569a5bf165e6804645e2dc824bebdbf4983577ea3e71dd1?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 14" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba9e91d364e24ca1d4c09d016cb875346970bef2ae51e05c6c906ba980345d2d?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 15" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/224779ca0c33d5ac5041993b4d0c488b7e2d32813bc9925b674ca55612af692c?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 16" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f0b91f1b0cb7e567574153789c9782b527eedfc2551b5f56122c33660a37f9b?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 17" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b48846c2f9193c11fe93b7587e7d1f22fa5d5ca4bc9f2927e240da7f25cc7c4c?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 18" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc66ca6e7ae4cad8cec6d0ea5b6b91bd269502e004af737468ede46e2a43d934?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 19" },
{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3ddaddd1cc3027ae2a8b10d0731565ff286c205a11e2cee2ef8ef4dccffd76c?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f", alt: "Product 20" },
  ];

  return (
    <section className="min-h-screen bg-[#F8F8F8]">
           <div className="flex relative flex-col items-center self-stretch px-5 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-10 pb-12 w-full text-white min-h-[400px]"
        data-aos="zoom-out">
        <img
          loading="lazy"
          src={product}
          className="object-cover absolute inset-0 size-full"
          alt="hero-img"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-10 md:px-20 md:pt-24">
          <div className="px-2 py-4 text-2xl mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
          {t('products.title')}
          </div>
          <div className="mt-12 sm:mt-15 flex flex-row justify-center">
          {t('products.subtitle')}
          </div>
        </div>
      </div>
    
 

      <div className='bg-sky-500 text-white py-4 px-8 rounded-full text-center mx-auto max-w-xs mt-10' >
      {t('products.discription')}
</div>

      <div className="p-2 grid mt-10  gap-2 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {productImages.map((product, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={product.src}
              alt={product.alt}
              className="w-[200px] h-[200px] object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;


