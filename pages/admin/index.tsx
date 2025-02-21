import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import withAuth from "@/guard/withAuth";
import { FaUsers, FaComments, FaEye } from "react-icons/fa";
import WeatherCard from '@/components/ui/WeatherCard';
import TodoList from '@/components/ui/TodoList';
import AdminSidebar from '@/components/ui/AdminSidebar';

interface User {
  _id: string;
  name: string;
  email: string;
}

const AdminDashboard = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/auth/login");
    } else {
      setIsAdmin(true);
      fetchDashboardData();
    }
  }, [router]);

  const fetchDashboardData = async () => {
    try {
      const userResponse = await fetch("/api/users");
      const feedbackCountResponse = await fetch("/api/feedback/count");
      const viewsCountResponse = await fetch("/api/views/count");

      if (!userResponse.ok) {
        const contentType = userResponse.headers.get("content-type");
        let errorData;
        if (contentType && contentType.includes("application/json")) {
          errorData = await userResponse.json();
        } else {
          errorData = await userResponse.text();
        }
        console.error("Error fetching users:", errorData);
        setUserCount(0);
      } else {
        const usersData = await userResponse.json();
        setUsers(usersData);
        setUserCount(usersData.length);
      }

      if (!feedbackCountResponse.ok) {
        const contentType = feedbackCountResponse.headers.get("content-type");
        let errorData;
        if (contentType && contentType.includes("application/json")) {
          errorData = await feedbackCountResponse.json();
        } else {
          errorData = await feedbackCountResponse.text();
        }
        console.error("Error fetching feedback count:", errorData);
        setFeedbackCount(0);
      } else {
        const { count } = await feedbackCountResponse.json();
        setFeedbackCount(count);
      }

      if (!viewsCountResponse.ok) {
        const contentType = viewsCountResponse.headers.get("content-type");
        let errorData;
        if (contentType && contentType.includes("application/json")) {
          errorData = await viewsCountResponse.json();
        } else {
          errorData = await viewsCountResponse.text();
        }
        console.error("Error fetching views count:", errorData);
        setViewsCount(0);
      } else {
        const { count } = await viewsCountResponse.json();
        setViewsCount(count);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setUserCount(0);
      setFeedbackCount(0);
      setViewsCount(0);
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <main className="flex-1 p-10 ml-64">
        <h1 className="text-3xl font-bold text-gray-100 mb-10">Welcome, Admin 👋</h1>

        <div className="flex grid grid-cols-2 gap-6">
          <div>
            <WeatherCard />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800 shadow-lg rounded-lg flex items-center">
              <FaUsers className="text-green-400 text-4xl" />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-300">Users</p>
                <p className="text-2xl font-bold text-gray-100">{userCount}</p>
              </div>
            </div>

            <div className="p-6 bg-gray-800 shadow-lg rounded-lg flex items-center">
              <FaComments className="text-blue-400 text-4xl" />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-300">Feedbacks</p>
                <p className="text-2xl font-bold text-gray-100">{feedbackCount}</p>
              </div>
            </div>

            <div className="p-6 bg-gray-800 shadow-lg rounded-lg flex items-center">
              <FaEye className="text-yellow-400 text-4xl" />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-300">Total Views</p>
                <p className="text-2xl font-bold text-gray-100">{viewsCount}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">

        {/* User List Card */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">User List</h2>
          <ul className="list-disc pl-5">
            {users.map((user) => (
              <li key={user._id} className="text-gray-100">
                {user.name}
              </li>
            ))}
          </ul>
        </div>

        {/* TODO List Card */}
        <div className="mt-10">
          <TodoList />
        </div>
</div>

      </main>
    </div>
  );
};

export default withAuth(AdminDashboard);
