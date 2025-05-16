"use client"
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Legend 
} from "recharts";
import { CalendarIcon, UserIcon, ActivityIcon, TrendingUpIcon, ShoppingCartIcon, StarIcon, CurrencyIcon, TagIcon  } from "lucide-react";


export default function Dashboard() {
  const [data, setData] = useState({
    trafficSources: [],
    monthlyTraffic: [],
    topProducts: [],
    userGrowth: [],
    revenueGrowth: [],
    activeUsers: 0,
    totalRevenue: 0,
    pendingTasks: 0,
    mostAccessedProduct: "",
    mostBoughtProduct: "",
    recentActivities: [],
  });

  useEffect(() => {
    setData({
      trafficSources: [
        { name: "Rețele Sociale", value: 40 },
        { name: "Direct", value: 30 },
        { name: "Motoare de Căutare", value: 30 },
      ],
      monthlyTraffic: [
        { month: "Ian", traffic: 4000 },
        { month: "Feb", traffic: 4500 },
        { month: "Mar", traffic: 5000 },
        { month: "Apr", traffic: 6000 },
        { month: "Mai", traffic: 7500 },
      ],
      userGrowth: [
        { month: "Ian", users: 200 },
        { month: "Feb", users: 250 },
        { month: "Mar", users: 300 },
        { month: "Apr", users: 400 },
        { month: "Mai", users: 550 },
      ],
      revenueGrowth: [
        { month: "Ian", revenue: 1200 },
        { month: "Feb", revenue: 1500 },
        { month: "Mar", revenue: 1800 },
        { month: "Apr", revenue: 2400 },
        { month: "Mai", revenue: 3000 },
      ],
      topProducts: [
        { name: "Produs A", revenue: 1500 },
        { name: "Produs B", revenue: 1200 },
        { name: "Produs C", revenue: 800 },
      ],
      activeUsers: 1200,
      totalRevenue: 15000,
      pendingTasks: 14,
      mostAccessedProduct: "Produs A",
      mostBoughtProduct: "Produs B",
      recentActivities: ["Utilizator înregistrat", "Produs A cumpărat", "Campanie creată", "Sarcină finalizată"],
    });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {/* Metrics Overview */}
      <Card className="col-span-1 md:col-span-2 xl:col-span-3 bg-[#222] text-white">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <UserIcon className="text-[#a6dc11] w-10 h-10 mb-2" />
            <p className="text-3xl font-bold">{data.activeUsers}</p>
            <p className="text-gray-400">Utilizatori Activi</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUpIcon className="text-[#a6dc11] w-10 h-10 mb-2" />
            <p className="text-3xl font-bold">{data.totalRevenue} lei</p>
            <p className="text-gray-400">Venit Total</p>
          </div>
          <div className="flex flex-col items-center">
            <ActivityIcon className="text-[#a6dc11] w-10 h-10 mb-2" />
            <p className="text-3xl font-bold">{data.pendingTasks}</p>
            <p className="text-gray-400">Sarcini În Așteptare</p>
          </div>
          <div className="flex flex-col items-center">
            <CalendarIcon className="text-[#a6dc11] w-10 h-10 mb-2" />
            <p className="text-3xl font-bold">5</p>
            <p className="text-gray-400">Campanii Active</p>
          </div>
        </CardContent>
      </Card>


      {/* User Growth Chart */}
      <Card className="bg-[#222] text-white">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Creșterea Utilizatorilor</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#a6dc11" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue Growth Chart */}
      <Card className="bg-[#222] text-white">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Creșterea Veniturilor</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.revenueGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#a6dc11" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Traffic Sources Pie Chart */}
      <Card className="bg-[#222] text-white">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Surse Trafic</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={data.trafficSources} 
                dataKey="value" 
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                outerRadius={100} 
                fill="#a6dc11" 
                label 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Product Insights - styled like Metrics Overview */}
      <Card className="col-span-1 md:col-span-2 xl:col-span-3 bg-[#222] text-white">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <ShoppingCartIcon className="text-[#a6dc11] w-10 h-10 mb-2" />
            <p className="text-3xl font-bold">{data.mostAccessedProduct}</p>
            <p className="text-gray-400">Cel Mai Accesat Produs</p>
          </div>
          <div className="flex flex-col items-center">
            <StarIcon className="text-[#a6dc11] w-10 h-10 mb-2" />
            <p className="text-3xl font-bold">{data.mostBoughtProduct}</p>
            <p className="text-gray-400">Cel Mai Cumpărat Produs</p>
          </div>
          <div className="flex flex-col items-center">
            <CurrencyIcon className="text-[#a6dc11] w-10 h-10 mb-2" />
            <p className="text-3xl font-bold">Produs A</p>
            <p className="text-gray-400">Produs cu Cel Mai Mare Venit</p>
          </div>
          <div className="flex flex-col items-center">
            <TagIcon className="text-[#a6dc11] w-10 h-10 mb-2" />
            <p className="text-3xl font-bold">Electronice</p>
            <p className="text-gray-400">Categorie Principală</p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
