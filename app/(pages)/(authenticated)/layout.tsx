import { RouteProtector } from "@/app/components/route-protector";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RouteProtector role="DEPT_OF_JUSTICE">
      <div>
        {children}
      </div>
    </RouteProtector>
  );
}
