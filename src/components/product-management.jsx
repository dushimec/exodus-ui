import React, { useState } from 'react';
import { Upload, X, Trash2 } from 'lucide-react';

export function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    description: '',
    country: '',
    images: []
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    setCurrentProduct(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (imageId) => {
    setCurrentProduct(prev => ({
      ...prev,
      images: prev.images.filter(img => img.id !== imageId)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProduct.name && currentProduct.description && currentProduct.country) {
      setProducts(prev => [...prev, { ...currentProduct, id: Date.now() }]);
      setCurrentProduct({ name: '', description: '', country: '', images: [] });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Product Images</label>
            <div className="grid grid-cols-2 gap-4">
              {/* Upload Button */}
              <div className="relative">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-sky-500 rounded-lg cursor-pointer bg-sky-100 hover:bg-sky-300 transition-colors"
                >
                  <Upload className="w-12 h-12 text-sky-500mb-2" />
                  <span className="text-sm text-sky-500 font-medium">Upload File</span>
                </label>
              </div>

              {/* Uploaded Images */}
              {currentProduct.images.map(image => (
                <div key={image.id} className="relative bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 truncate">{image.name}</span>
                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="p-1 rounded-full bg-sky-500 text-white hover:bg-sky-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                value={currentProduct.name}
                onChange={(e) => setCurrentProduct(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={currentProduct.description}
                onChange={(e) => setCurrentProduct(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country of Origin</label>
              <input
                type="text"
                value={currentProduct.country}
                onChange={(e) => setCurrentProduct(prev => ({ ...prev, country: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg--sky-500 text-white py-2 px-4 rounded-md hover:bg--sky-500 transition-colors"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Products List */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Products List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg p-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                {product.images[0] && (
                  <img
                    src={product.images[0].url}
                    alt={product.name}
                    className="object-cover rounded-lg"
                  />
                )}
              </div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <p className="text-sm text-gray-500 mt-2">Origin: {product.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

