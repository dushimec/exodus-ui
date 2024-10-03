import React from 'react';

function Products() {
  const productImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5b17956ea7e7d5b7f13492beb1487a3851f8866b158364fba423bf3822dd81c?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.87", width: "204px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5460f161ef75e2537bf128369dbc2ceab3d346f0a8f20be9af61d4767c616f74?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e9c60934b70911e6c16883e2b9804a8a421c55f0c3b725549fb2eeadd1d6d4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e950925c4952501a920745f9dbfecf21267e5d05f71ff37abe98696b0b62d9e2?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9176ff3abb57e6e3c41797c8b8c5a2b822b75e816a3354c5617687f2ce26f58c?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa61c0bdc47483f94672c29b824dfe72d9961f636285313669c2f9d72d811d86?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.87", width: "204px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f36e70858b66b1c24dddddab7cbb3a4fcace60937fd03b59cf08e5b8e51cf20?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/68bf1fe9057e3f6450add1a3ecece223827bac7ef8886b916348728eacc95d06?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/47c3b553d4761c185e6d7580b1bafd93e4bb137424b90423b654c4f127038f87?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6ca93c115130b1d41be8ab8c95f1a60ffc2fcd1afd7f3dcad2c2ee8311cc0fd?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0b3f6c16094ba87dac11ce2607696e2c2590a95fe198c63a05b2f682923a381?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.87", width: "204px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8faeb7a4c0d534bbc670626f1e99a452c73114c117cdeb15f4664a2f9273ff2?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2bb6ff5034b654a2e17795f9d1a21b55a2b65864b4604a801e96db41adb057f?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c179bae3d474b62c569a5bf165e6804645e2dc824bebdbf4983577ea3e71dd1?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba9e91d364e24ca1d4c09d016cb875346970bef2ae51e05c6c906ba980345d2d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/224779ca0c33d5ac5041993b4d0c488b7e2d32813bc9925b674ca55612af692c?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.87", width: "204px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f0b91f1b0cb7e567574153789c9782b527eedfc2551b5f56122c33660a37f9b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b48846c2f9193c11fe93b7587e7d1f22fa5d5ca4bc9f2927e240da7f25cc7c4c?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc66ca6e7ae4cad8cec6d0ea5b6b91bd269502e004af737468ede46e2a43d934?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3ddaddd1cc3027ae2a8b10d0731565ff286c205a11e2cee2ef8ef4dccffd76c?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497", aspectRatio: "0.88", width: "205px" }
  ];

  return (
    <main className="flex overflow-hidden flex-col items-center pb-12 bg-stone-50">
      {/* Product Header */}
      <header className="flex relative flex-col self-stretch pb-2 w-full text-4xl font-bold text-center text-white whitespace-nowrap min-h-[299px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c7c3e931da1037e7b8c41f0fbbf17cc26f64267da9cc2f8c49f74a8fd9e7c71?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497" className="h-full w-full object-cover" />
        <div className="flex items-start flex-col self-stretch px-4 justify-center absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-900 to-transparent"></div>
        <span className="absolute w-full inset-0 flex flex-col justify-center items-center">
          Products
        </span>
      </header>
      
      {/* Product Images */}
      <div className="grid grid-cols-2 gap-4 mt-10 max-w-screen-lg">
        {productImages.map((image, index) => (
          <div key={index} className="flex flex-col">
            <img loading="lazy" src={image.src} style={{ aspectRatio: image.aspectRatio, width: image.width }} className="w-full object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
