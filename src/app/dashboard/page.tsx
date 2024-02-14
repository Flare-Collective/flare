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

function timeBetween(time: any, past: any, before: any) {
  const currentTime = new Date();
  const pastTime = new Date(currentTime.toDateString() + " " + past);
  const beforeTime = new Date(currentTime.toDateString() + " " + before);

  if (currentTime >= pastTime && currentTime < beforeTime) {
    return true;
  } else {
    return false;
  }
}

function greeting() {
  const currentTime = new Date();
  const time = currentTime.getHours() + ":" + currentTime.getMinutes();

  if (timeBetween(time, "00:00", "06:00")) {
    return "Good Night";
  } else if (timeBetween(time, "06:00", "12:00")) {
    return "Good Morning";
  } else if (timeBetween(time, "12:00", "14:00")) {
    return "Good Afternoon";
  } else if (timeBetween(time, "14:00", "18:00")) {
    return "Hello";
  } else if (timeBetween(time, "18:00", "22:00")) {
    return "Good Evening";
  } else if (timeBetween(time, "22:00", "23:59")) {
    return "Good Night";
  }
}

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          {greeting()}, {user.name}!
        </h1>
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
        {actions.map((action, index) => (
          <Card key={index} className=" max-w-sm bg-neutral-800 text-white">
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
