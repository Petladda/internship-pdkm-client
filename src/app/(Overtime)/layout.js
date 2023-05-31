import NavigationMenu from "@/components/layouts/Navigation";

const OverTimeLayout = ({ children }) => {
  return (
    <section className="w-full md:w-1/2 h-screen  mx-auto">
      {children}
      <NavigationMenu/>
    </section>
  );
};

export default OverTimeLayout;
