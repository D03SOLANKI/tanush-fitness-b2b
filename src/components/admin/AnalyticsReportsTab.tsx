import React from 'react';
import { BarChart3, Dumbbell, Users, Briefcase, FileSpreadsheet } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AnalyticsReportsTab: React.FC = () => {
  const { equipmentEnquiries, showToast } = useApp();

  // Top Equipment Demand Chart Data
  const demandTrends = [
    { name: 'Commercial & Residential Power Rack Heavy Duty', brand: 'Tanush Strength', count: 48, percentage: 85 },
    { name: 'Curved Commercial & Residential Treadmill', brand: 'Tanush Cardio', count: 36, percentage: 65 },
    { name: 'Selectorized Lat Pulldown Machine', brand: 'Tanush Select', count: 29, percentage: 50 },
    { name: 'Urethane Dumbbell Set 2.5kg-50kg', brand: 'Tanush Free Weights', count: 24, percentage: 40 },
    { name: 'Adjustable Commercial & Residential Bench', brand: 'Tanush Accessories', count: 18, percentage: 30 },
  ];

  // Helper to convert array of objects to CSV download
  const exportToCSV = (filename: string, rows: object[]) => {
    if (!rows || rows.length === 0) {
      showToast('No records available to export', 'info');
      return;
    }

    const headers = Object.keys(rows[0]);
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [
        headers.join(','),
        ...rows.map(row =>
          headers.map(field => JSON.stringify((row as any)[field] ?? '')).join(',')
        ),
      ].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Exported ${filename}.csv successfully`);
  };

  const handleExportRFQs = () => {
    const data = equipmentEnquiries.map(e => ({
      Reference: e.rfqReference,
      GymName: e.companyGymName,
      ContactName: e.name,
      Mobile: e.mobile,
      Email: e.email,
      City: e.city,
      Status: e.status,
      CreatedAt: e.createdAt,
    }));
    exportToCSV('RFQ_Enquiries_Report', data.length > 0 ? data : [
      { Reference: 'RFQ-2026-101', GymName: 'Apex Fitness', ContactName: 'Vikram', Mobile: '9876543210', Status: 'QUOTATION_SENT' }
    ]);
  };

  const handleExportUsers = () => {
    exportToCSV('Registered_Users_Report', [
      { Name: 'Vikram Singhania', Role: 'GYM_OWNER', Company: 'Apex Fitness', GST: '27AAAAA0000A1Z5', Status: 'ACTIVE' },
      { Name: 'Rahul Sharma', Role: 'JOB_SEEKER', Company: '-', GST: '-', Status: 'ACTIVE' },
    ]);
  };

  return (
    <div className="space-y-6 font-mono text-xs">
      <div className="bg-[#1A2018] p-4 rounded-none border border-white/10 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-sm font-black text-[#090C10] font-satoshi uppercase">
            Analytics & CSV Demand Trend Reports
          </h3>
          <p className="text-[10px] text-[#6B6358] font-normal">
            Export raw B2B data & inspect wholesale equipment demand trends across India.
          </p>
        </div>
      </div>

      {/* CSV Export Quick Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={handleExportRFQs}
          className="p-4 rounded-none bg-[#1A2018] border border-white/10 hover:border-[#D26539] shadow-sm hover:shadow-md text-left transition-all flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-[#D26539]/10 text-[#D26539] flex items-center justify-center shrink-0">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-[#090C10] uppercase text-xs">RFQ Enquiries (CSV)</div>
            <div className="text-[10px] text-[#6B6358]">Download Wholesale RFQs</div>
          </div>
        </button>

        <button
          onClick={handleExportUsers}
          className="p-4 rounded-none bg-[#1A2018] border border-white/10 hover:border-[#D26539] shadow-sm hover:shadow-md text-left transition-all flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-[#090C10] uppercase text-xs">Gym Owners (CSV)</div>
            <div className="text-[10px] text-[#6B6358]">Download User Directory</div>
          </div>
        </button>

        <button
          onClick={() => handleExportUsers()}
          className="p-4 rounded-none bg-[#1A2018] border border-white/10 hover:border-[#D26539] shadow-sm hover:shadow-md text-left transition-all flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-[#090C10] uppercase text-xs">Applications (CSV)</div>
            <div className="text-[10px] text-[#6B6358]">Download Candidate List</div>
          </div>
        </button>

        <button
          onClick={() => handleExportRFQs()}
          className="p-4 rounded-none bg-[#1A2018] border border-white/10 hover:border-[#D26539] shadow-sm hover:shadow-md text-left transition-all flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-[#090C10] uppercase text-xs">Service Requests (CSV)</div>
            <div className="text-[10px] text-[#6B6358]">Download Consultation Data</div>
          </div>
        </button>
      </div>

      {/* Equipment Demand Chart */}
      <div className="bg-[#1A2018] rounded-none p-6 border border-white/10 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-[#D26539]" />
            <h4 className="text-sm font-black text-[#090C10] font-satoshi uppercase">
              Top Requested Equipment Models (Demand Volume)
            </h4>
          </div>
          <span className="text-[10px] font-bold text-[#6B6358] uppercase font-mono">Aggregated Units</span>
        </div>

        <div className="space-y-4 pt-2">
          {demandTrends.map(item => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-[#090C10] uppercase">{item.name} <span className="text-[#D26539]">({item.brand})</span></span>
                <span className="text-[#D26539]">{item.count} Units Requested</span>
              </div>
              <div className="w-full bg-[#ECE6DB] h-3 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#D26539] to-[#D26539] h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
