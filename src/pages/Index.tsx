
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-[#02959F] mb-8 text-center">
        Welcome to NBA Criteria Management
      </h1>
      <div className="space-y-4">
        <Button
          onClick={() => navigate("/nba-criteria")}
          className="w-full bg-[#02959F] text-white hover:bg-[#037885] min-w-[200px]"
        >
          View NBA Criteria
        </Button>
        <Button
          onClick={() => navigate("/criteria-four")}
          className="w-full bg-[#02959F] text-white hover:bg-[#037885] min-w-[200px]"
        >
          Go to Criteria 4
        </Button>
      </div>
    </div>
  );
};

export default Index;
