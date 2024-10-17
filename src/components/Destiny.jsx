import * as React from "react";

function Destiny() {
  return (
    <>
      <div className="flex overflow-hidden flex-col items-center pb-4 bg-stone-50 bg-opacity-30 max-md:pb-24 ">
        <div className="flex relative flex-col items-center self-stretch px-20 pt-40 pb-12 w-full text-white min-h-[400px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col max-w-full w-[416px]">
            <div className="self-center text-4xl font-bold px-16 py-6 -mb-9  max-w-full border-white border-solid bg-zinc-300 bg-opacity-0 border-[10px] w-[496px] max-md:px-5 max-md:mb-2.5">DESTINATIONS</div>
            <div className="mt-20 flex flex-row justify-center  max-md:mt-10">
              Explore tour by destinations
            </div>
          </div>
        </div>

        <div className="mt-40 ml-5 w-full max-w-[1104px] 0  max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-28 max-md:flex-col">
    <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full"> {/* Changed from w-6/12 to w-5/12 */}
      <div className="flex relative flex-col grow px-px min-h-[288px] max-md:mt-10 max-md:max-w-full"> {/* Reduced min-height */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33fae0df8bf179790c2123d2aba2911ebe9447d3273945edf5a1e32b89677d6a?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33fae0df8bf179790c2123d2aba2911ebe9447d3273945edf5a1e32b89677d6a?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33fae0df8bf179790c2123d2aba2911ebe9447d3273945edf5a1e32b89677d6a?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33fae0df8bf179790c2123d2aba2911ebe9447d3273945edf5a1e32b89677d6a?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=600 600w"
          className="object-cover absolute inset-0 size-full h-full" /* Adjusted to h-full */
        />
        <div className="flex relative shrink-0 h-[288px] max-md:max-w-full" />
      </div>
    </div>
    <div className="relative group w-5/12 max-md:ml-0 max-md:w-full h-96 overflow-hidden bg-cover bg-center transition-all duration-300"
     style={{
       backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/a6f3480c81274d3fc5b27e53fa8ba11235679978c2d207afcb03ef43152f0183?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497')"
     }}>
  {/* Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-black bg-opacity-0 group-hover:bg-opacity-70">
    {/* Text description */}
    <h3 className="text-white text-2xl transform scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 mb-4">
      Tel Aviv’s unique charm
    </h3>

    {/* Button */}
    <a href="/details"
       className="text-white bg-blue-500 py-2 px-4 rounded-full opacity-0 transform transition-transform duration-300 scale-100 group-hover:opacity-100 group-hover:scale-125">
      View Details
    </a>
  </div>
</div>


</div>
</div>
 <div className="mt-28 ml-5 w-full max-w-[1097px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-28 max-md:flex-col">
            <div className="flex flex-col  w-5/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow px-px mt-1.5 min-h-[288px] max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
                  className="object-cover absolute inset-0 size-full h-full"
                />
                <div className="flex relative shrink-0  h-[388px] max-md:max-w-full" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
                  className="object-contain grow w-full max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </>
  );
}
export default Destiny;