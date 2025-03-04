import LeftSection from "./partials/LeftSection";
import AuthModal from "./partials/AuthModal";
import RightSection from "./partials/RightSection";

const LoginPage = () => {

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex h-full">
        <div className="w-1/3 relative">
          <LeftSection />
          <AuthModal />
        </div>
        <div className="w-full relative bg-amber-200">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
