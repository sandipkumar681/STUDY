import Card from "@/components/Card";
import Link from "next/link";

const ArchievedNotification = () => {
  return (
    <Card>
      <div>Archieved Notification</div>
      <Link href="/dashboard">Default</Link>
    </Card>
  );
};

export default ArchievedNotification;
