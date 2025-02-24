
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

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

const ProfessionalActivities = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#02959F] py-6 mb-8 relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-white text-4xl font-bold text-center tracking-wider">
          Professional Activities
        </h1>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <Card className="p-6">
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
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalActivities;
