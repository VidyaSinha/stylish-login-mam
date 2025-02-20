
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

const SuccessRateNoBacklog = () => {
  const navigate = useNavigate();

  const tableData = [
    {
      period: "LYG (2020-2024)",
      n1n2n3: "49",
      graduated: "33",
      successIndex: "0.67"
    },
    {
      period: "LYGm1 (2019-2023)",
      n1n2n3: "48",
      graduated: "29",
      successIndex: "0.60"
    },
    {
      period: "LYGm2 (2018-2022)",
      n1n2n3: "42",
      graduated: "28",
      successIndex: "0.66"
    }
  ];

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
          Success Rate without Backlogs
        </h1>
      </div>

      <div className="container mx-auto px-[20%] pb-8">
        <Card className="p-6 mb-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Period</TableHead>
                <TableHead>N1+N2+N3 (As Mentioned Above)</TableHead>
                <TableHead>Number of students who have graduated without backlogs</TableHead>
                <TableHead>Success Index (SI)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.period}>
                  <TableCell>{row.period}</TableCell>
                  <TableCell>{row.n1n2n3}</TableCell>
                  <TableCell>{row.graduated}</TableCell>
                  <TableCell>{row.successIndex}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3}>Average Success Index</TableCell>
                <TableCell>0.65</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}></TableCell>
                <TableCell>15*0.65=9.75</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default SuccessRateNoBacklog;
