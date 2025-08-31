import Card from "@/components/Card";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/dashboard/archieved">Archieve</Link>
    </Card>
  );
};

export default Notification;
