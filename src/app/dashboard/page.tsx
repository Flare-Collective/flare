import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const user = {
  id: "f6d0be02-6dcd-4903-9365-c380e0606007",
  name: "GuNShOtzZ",
  role: "admin",
  avatar: "https://avatars.githubusercontent.com/u/68171149?v=4",
  email: "gunshotzz@flare.dev",
};

const actions = [
  {
    title: "Create a board",
    description: "Start organizing your projects.",
    content:
      "Quickly set up a board to manage your tasks and projects efficiently.",
  },
  {
    title: "Invite team members",
    description: "Collaborate seamlessly.",
    content:
      "Easily invite team members to join your workspace and collaborate in real-time.",
  },
  {
    title: "Edit your profile",
    description: "Personalize your account.",
    content:
      "Customize your profile settings and keep your information up to date.",
  },
  {
    title: "Manage Integrations",
    description: "Integrate with your favorite tools.",
    content:
      "Connect with other apps and services to streamline your workflow.",
  },
  {
    title: "Setup MFA for your account",
    description: "Enhance security.",
    content:
      "Enable Multi-Factor Authentication to add an extra layer of protection to your account.",
  },
  {
    title: "View upcoming deadlines",
    description: "Stay on track.",
    content:
      "Quickly see all your upcoming deadlines and never miss an important date.",
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Good Evening, Username!</h1>
        <Image
          className=" rounded-full shadow-md"
          src={user.avatar}
          alt="User Avatar"
          width={128}
          height={128}
        />
      </div>
      <p className=" mb-4">Here are some suggestions, of what you can do:</p>
      <div className="grid w-fit grid-cols-3 gap-4">
        {actions.map((action) => (
          <Card className=" max-w-sm bg-neutral-800 text-white">
            <CardHeader>
              <CardTitle>{action.title}</CardTitle>
              <CardDescription>{action.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{action.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
