
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SubCriterion {
  number: string;
  title: string;
  marks: number;
  details?: string;
}

interface Criterion {
  number: string;
  title: string;
  marks: number;
  details?: string;
  subCriteria?: SubCriterion[];
}

interface CriteriaCardProps {
  criterion: Criterion;
}

export const CriteriaCard = ({ criterion }: CriteriaCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-[#02959F]">
                {criterion.number} - {criterion.title}
              </h2>
              <div className="flex gap-2 ml-4">
                {criterion.details && !criterion.subCriteria && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 text-[#02959F] hover:text-white hover:bg-[#02959F]"
                    onClick={() => navigate(`/${criterion.details}`)}
                  >
                    <Eye className="h-4 w-4" />
                    See Details
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 text-[#02959F] hover:text-white hover:bg-[#02959F]"
                >
                  <Edit className="h-4 w-4" />
                  Edit Marks
                </Button>
              </div>
            </div>
          </div>
          <div className="text-lg font-semibold text-[#02959F] whitespace-nowrap">
            {criterion.marks} marks
          </div>
        </div>

        {criterion.subCriteria && (
          <div className="ml-8 space-y-3">
            {criterion.subCriteria.map((sub) => (
              <div key={sub.number} className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-[#02959F]">
                    {sub.number} - {sub.title}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    {sub.details && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-2 text-[#02959F] hover:text-white hover:bg-[#02959F]"
                        onClick={() => navigate(`/${sub.details}`)}
                      >
                        <Eye className="h-4 w-4" />
                        See Details
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 text-[#02959F] hover:text-white hover:bg-[#02959F]"
                    >
                      <Edit className="h-4 w-4" />
                      Edit Marks
                    </Button>
                  </div>
                </div>
                <div className="text-lg font-semibold text-[#02959F] whitespace-nowrap">
                  {sub.marks} marks
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
