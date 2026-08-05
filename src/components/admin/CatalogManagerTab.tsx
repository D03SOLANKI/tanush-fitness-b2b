import React, { useState } from 'react';
import { Plus, Edit2, Trash2, CheckCircle, X, Save } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { EQUIPMENT_CATEGORIES } from '../../data/categories';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';

export const CatalogManagerTab: React.FC = () => {
  const { showToast } = useApp();
  const [productList, setProductList] = useState<Product[]>(PRODUCTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [categoryId, setCategoryId] = useState('c1');
  const [equipmentType, setEquipmentType] = useState('Strength');
  const [minOrderQty, setMinOrderQty] = useState(1);
  const [leadTime, setLeadTime] = useState('7-14 Days');
  const [badge, setBadge] = useState('ISO-Certified');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const openAddModal = () => {
    setEditingProduct(null);
    setName('');
    setBrand('');
    setCategoryId('c1');
    setEquipmentType('Strength');
    setMinOrderQty(1);
    setLeadTime('7-14 Days');
    setBadge('ISO-Certified');
    setDescription('');
    setImage('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80');
    setIsModalOpen(true);
  };

  const openEditModal = (p: Product) => {
    setEditingProduct(p);
    setName(p.name);
    setBrand(p.brand);
    setCategoryId(p.categoryId);
    setEquipmentType(p.equipmentType || 'Strength');
    setMinOrderQty(p.minOrderQty || 1);
    setLeadTime(p.leadTime || '7-14 Days');
    setBadge(p.badge || '');
    setDescription(p.description);
    setImage(p.image);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const catObj = EQUIPMENT_CATEGORIES.find(c => c.id === categoryId);

    if (editingProduct) {
      // Update
      setProductList(prev =>
        prev.map(p =>
          p.id === editingProduct.id
            ? {
                ...p,
                name,
                brand,
                categoryId,
                category: catObj ? catObj.name : p.category,
                equipmentType,
                minOrderQty,
                leadTime,
                badge: badge || undefined,
                description,
                image,
              }
            : p
        )
      );
      showToast(`Updated product "${name}" in catalog`);
    } else {
      // Add
      const newProd: Product = {
        id: `p-${Date.now()}`,
        name,
        slug: `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`,
        brand,
        categoryId,
        category: catObj ? catObj.name : 'Strength Training',
        equipmentType,
        minOrderQty,
        leadTime,
        badge: badge || undefined,
        description,
        image,
        gallery: [image],
        rating: 5.0,
        reviewCount: 1,
        inStock: true,
        specs: { Structure: 'Commercial 3mm Gauge Steel', Warranty: '5 Years' },
        features: ['ISO Certified', 'Heavy Duty Steel'],
        applicationTypes: ['Commercial Gym'],
      };
      setProductList(prev => [newProd, ...prev]);
      showToast(`Added new product "${name}" to catalog`);
    }

    setIsModalOpen(false);
  };

  const handleDeleteProduct = (id: string, name: string) => {
    if (confirm(`Are you sure you want to soft-delete product "${name}"?`)) {
      setProductList(prev => prev.filter(p => p.id !== id));
      showToast(`Deleted product "${name}"`, 'info');
    }
  };

  return (
    <div className="space-y-6 font-mono text-xs">
      {/* Action Header */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h3 className="text-sm font-black text-slate-900 font-heading uppercase">
            Commercial Equipment Catalog ({productList.length} Items)
          </h3>
          <p className="text-[10px] text-slate-500 font-normal">
            Manage ISO-certified strength racks, treadmills, weights, lead times & MOQs.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase flex items-center gap-2 shadow-md transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Catalog Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left divide-y divide-slate-100">
            <thead className="bg-slate-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Equipment & Brand</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Lead Time & MOQ</th>
                <th className="py-3.5 px-4">Badge</th>
                <th className="py-3.5 px-4">Stock Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {productList.map(p => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-xl border border-slate-200 shrink-0" />
                    <div>
                      <div className="font-black text-slate-900 font-heading uppercase line-clamp-1">{p.name}</div>
                      <div className="text-[10px] text-blue-600 font-bold">{p.brand}</div>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-slate-700 font-bold">
                    {p.category}
                  </td>

                  <td className="py-3 px-4 text-[10px] text-slate-600">
                    <div>MOQ: <span className="font-bold text-slate-900">{p.minOrderQty || 1} Unit</span></div>
                    <div>Lead: <span className="font-bold text-slate-900">{p.leadTime || '7-14 Days'}</span></div>
                  </td>

                  <td className="py-3 px-4">
                    {p.badge ? (
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold border border-amber-200 text-[9px] uppercase">
                        {p.badge}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[10px]">-</span>
                    )}
                  </td>

                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" /> In Stock
                    </span>
                  </td>

                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      onClick={() => openEditModal(p)}
                      className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
                      title="Edit Product"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(p.id, p.name)}
                      className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                      title="Delete Product"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 space-y-4 border border-slate-200 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900 font-heading uppercase">
                {editingProduct ? 'Edit Product' : 'Add New Commercial Product'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Product Title *</label>
                <input
                  type="text"
                  required
                  placeholder="Heavy Strength Power Rack"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Brand Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Tanush Elite"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Category *</label>
                  <select
                    value={categoryId}
                    onChange={e => setCategoryId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 font-bold"
                  >
                    {EQUIPMENT_CATEGORIES.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">MOQ Units</label>
                  <input
                    type="number"
                    min={1}
                    value={minOrderQty}
                    onChange={e => setMinOrderQty(parseInt(e.target.value, 10))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Lead Time</label>
                  <input
                    type="text"
                    placeholder="7-14 Days"
                    value={leadTime}
                    onChange={e => setLeadTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Badge</label>
                  <input
                    type="text"
                    placeholder="ISO-Certified"
                    value={badge}
                    onChange={e => setBadge(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Image URL *</label>
                <input
                  type="text"
                  required
                  value={image}
                  onChange={e => setImage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 text-white font-black uppercase flex items-center justify-center gap-2 shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>Save Product to Catalog</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
