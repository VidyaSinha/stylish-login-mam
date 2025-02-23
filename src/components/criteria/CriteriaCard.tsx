
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Professional societies data
const societiesData = [
  {
    id: 1,
    name: "Institute of Electrical and Electronics Engineers Chapter",
    cay: 4,
    caym1: 2,
    caym2: 2
  },
  {
    id: 2,
    name: "Women in Engineering Chapter",
    cay: 5,
    caym1: 3,
    caym2: 2
  },
  {
    id: 3,
    name: "Coding NINJAS 10X CLUB, Marwadi University Chapter",
    cay: 2,
    caym1: 0,
    caym2: 0
  },
  {
    id: 4,
    name: "Circuitology Club",
    cay: 4,
    caym1: 11,
    caym2: 7
  },
  {
    id: 5,
    name: "Competitive Programming Club",
    cay: 3,
    caym1: 7,
    caym2: 6
  },
  {
    id: 6,
    name: "Data Science Club",
    cay: 4,
    caym1: 8,
    caym2: 4
  },
  {
    id: 7,
    name: "Cloud Computing and Devops Club",
    cay: 5,
    caym1: 0,
    caym2: 0
  }
];

interface CriteriaCardProps {
  criterion: {
    number: string;
    title: string;
    marks: number;
    details: string;
    subCriteria?: {
      number: string;
      title: string;
      marks: number;
      details: string;
    }[];
  };
}

export const CriteriaCard = ({ criterion }: CriteriaCardProps) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (details: string) => {
    if (details === "professional-societies") {
      setIsExpanded(!isExpanded);
    } else {
      navigate(`/${details}`);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {criterion.number} {criterion.title}
            </h3>
            <p className="text-sm text-gray-500">Marks: {criterion.marks}</p>
          </div>
          <Button
            onClick={() => handleClick(criterion.details)}
            variant="outline"
            className="flex items-center gap-2 text-[#02959F] hover:text-white hover:bg-[#02959F]"
          >
            <Eye className="h-4 w-4" />
            See Details
          </Button>
        </div>

        {criterion.number === "4.5.1" && isExpanded && (
          <div className="mt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sr No</TableHead>
                    <TableHead>Name of the Professional societies</TableHead>
                    <TableHead>2024-25 (CAY)</TableHead>
                    <TableHead>2023-24 (CAYm1)</TableHead>
                    <TableHead>2022-23 (CAYm2)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {societiesData.map((society) => (
                    <TableRow key={society.id}>
                      <TableCell>{society.id}</TableCell>
                      <TableCell>{society.name}</TableCell>
                      <TableCell>{society.cay}</TableCell>
                      <TableCell>{society.caym1}</TableCell>
                      <TableCell>{society.caym2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {criterion.subCriteria && (
          <div className="mt-4 space-y-4">
            {criterion.subCriteria.map((sub) => (
              <div key={sub.number} className="pl-6 border-l-2 border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-md font-medium">
                      {sub.number} {sub.title}
                    </h4>
                    <p className="text-sm text-gray-500">Marks: {sub.marks}</p>
                  </div>
                  <Button
                    onClick={() => navigate(`/${sub.details}`)}
                    variant="outline"
                    className="flex items-center gap-2 text-[#02959F] hover:text-white hover:bg-[#02959F]"
                  >
                    <Eye className="h-4 w-4" />
                    See Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
