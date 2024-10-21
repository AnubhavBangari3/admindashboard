
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Newspaper,Folder,User,MessageCircle} from "lucide-react";
import PostTable from "@/components/posts/PostTable";


export default function Home() {
  return (
    <div>
        <div className="flex flex-row justify-between gap-5 mb-5">
          <DashboardCard title="Post" count={60} icon={<Newspaper className="text-slate-500" size={72} />} />

          <DashboardCard title="Categories" count={70} icon={<Folder className="text-slate-500" size={72} />} />

          <DashboardCard title="Users" count={40} icon={<User className="text-slate-500" size={72} />} />

          <DashboardCard title="Comments" count={50} icon={<MessageCircle className="text-slate-500" size={72} />} />
        </div>
        <PostTable  title="Latest Posts" />
    </div>
  );
}
