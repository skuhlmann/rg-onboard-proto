import { redirect } from "next/navigation";

export default function Home() {
  redirect("/onboarding?email=traveler@example.com&session=demo-123");
}
