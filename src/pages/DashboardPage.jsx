import { useEffect, useState } from "react";
import { getUserEmail } from "../utils/auth";

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setUserEmail(getUserEmail());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-sm text-base-content/60 mb-6">
        Selamat datang, <span className="font-semibold">{userEmail}</span>
      </p>

      {/* Stats Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div className="stat-title">Total Transaksi</div>
            <div className="stat-value text-primary">45</div>
            <div className="stat-desc">21% lebih tinggi dari bulan lalu</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-warning">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="stat-title">Dalam Proses</div>
            <div className="stat-value text-warning">12</div>
            <div className="stat-desc">Sedang dikerjakan</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-success">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="stat-title">Selesai</div>
            <div className="stat-value text-success">33</div>
            <div className="stat-desc">Siap diambil</div>
          </div>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="stats shadow w-full mb-6">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="stat-title">Pendapatan Hari Ini</div>
          <div className="stat-value">Rp 2.450.000</div>
          <div className="stat-desc">↗︎ 15% (Rp 320.000)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Pendapatan Bulan Ini</div>
          <div className="stat-value">Rp 18.750.000</div>
          <div className="stat-desc">↗︎ 12% dari bulan lalu</div>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title">Transaksi Terbaru</h2>
            <button className="btn btn-primary btn-sm">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Transaksi Baru
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Pelanggan</th>
                  <th>Layanan</th>
                  <th>Tanggal</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono font-bold">#001</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                          <span className="text-xs">JD</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">John Doe</div>
                        <div className="text-sm opacity-50">0812-3456-7890</div>
                      </div>
                    </div>
                  </td>
                  <td>Cuci Kering Setrika</td>
                  <td>2 Okt 2025</td>
                  <td>
                    <span className="badge badge-warning gap-2">Proses</span>
                  </td>
                  <td className="font-semibold">Rp 50.000</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td className="font-mono font-bold">#002</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                          <span className="text-xs">JS</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Jane Smith</div>
                        <div className="text-sm opacity-50">0813-9876-5432</div>
                      </div>
                    </div>
                  </td>
                  <td>Cuci Kering</td>
                  <td>2 Okt 2025</td>
                  <td>
                    <span className="badge badge-success gap-2">Selesai</span>
                  </td>
                  <td className="font-semibold">Rp 75.000</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td className="font-mono font-bold">#003</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                          <span className="text-xs">RW</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Robert Wilson</div>
                        <div className="text-sm opacity-50">0856-1234-5678</div>
                      </div>
                    </div>
                  </td>
                  <td>Express 3 Jam</td>
                  <td>1 Okt 2025</td>
                  <td>
                    <span className="badge badge-info gap-2">Pickup</span>
                  </td>
                  <td className="font-semibold">Rp 120.000</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td className="font-mono font-bold">#004</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                          <span className="text-xs">MB</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Maria Brown</div>
                        <div className="text-sm opacity-50">0821-4567-8901</div>
                      </div>
                    </div>
                  </td>
                  <td>Setrika Saja</td>
                  <td>1 Okt 2025</td>
                  <td>
                    <span className="badge badge-warning gap-2">Proses</span>
                  </td>
                  <td className="font-semibold">Rp 30.000</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Detail</button>
                  </td>
                </tr>
                <tr>
                  <td className="font-mono font-bold">#005</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                          <span className="text-xs">DT</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">David Taylor</div>
                        <div className="text-sm opacity-50">0877-6543-2109</div>
                      </div>
                    </div>
                  </td>
                  <td>Cuci Kering Setrika</td>
                  <td>30 Sep 2025</td>
                  <td>
                    <span className="badge badge-success gap-2">Selesai</span>
                  </td>
                  <td className="font-semibold">Rp 65.000</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Detail</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card-actions justify-end mt-4">
            <button className="btn btn-ghost btn-sm">
              Lihat Semua Transaksi →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
