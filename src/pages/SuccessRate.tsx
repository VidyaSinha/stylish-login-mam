import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SuccessRate = () => {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const successRateData = [
    {
      yearOfEntry: "CAY (2024-2025)",
      n1n2n3: "60+00+00",
      firstYear: "",
      secondYear: "",
      thirdYear: "",
      fourthYear: ""
    },
    {
      yearOfEntry: "CAYm1 (2023- 2024)",
      n1n2n3: "60+06+00",
      firstYear: "60+NA+00",
      secondYear: "",
      thirdYear: "",
      fourthYear: ""
    },
    {
      yearOfEntry: "CAYm2 (2022-2023)",
      n1n2n3: "42+16+00",
      firstYear: "36+NA+00",
      secondYear: "33+14+00",
      thirdYear: "",
      fourthYear: ""
    },
    {
      yearOfEntry: "CAYm3 (2021-2022)",
      n1n2n3: "60+06+00",
      firstYear: "59+NA+00",
      secondYear: "57+06+00",
      thirdYear: "57+06+00",
      fourthYear: ""
    },
    {
      yearOfEntry: "CAYm4 (2020-2021)",
      n1n2n3: "33+16+00",
      firstYear: "18+NA+00",
      secondYear: "18+15+00",
      thirdYear: "18+15+00",
      fourthYear: "18+15+00"
    },
    {
      yearOfEntry: "CAYm5 (2019-20)",
      n1n2n3: "48+00+00",
      firstYear: "33+NA+00",
      secondYear: "30+NA+00",
      thirdYear: "29+NA+00",
      fourthYear: "29+NA+00"
    },
    {
      yearOfEntry: "CAYm6 (2018-19)",
      n1n2n3: "42+00+00",
      firstYear: "32+NA+00",
      secondYear: "29+NA+00",
      thirdYear: "28+NA+00",
      fourthYear: "28+NA+00"
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
          Success Rate
        </h1>
      </div>

      <div className="container mx-auto px-[20%] pb-8">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#02959F] mb-6">
            Success Rate Details
          </h2>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2}>Year of Entry</TableHead>
                <TableHead rowSpan={2}>
                  N1 + N2 + N3<br />
                  (As Defined above)
                </TableHead>
                <TableHead colSpan={4} className="text-center">
                  Number of students who have successfully graduated without backlogs in any semester/year of study
                  <br />
                  (Without Backlog means no compartment or failures in any semester/year of study)
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>I Year</TableHead>
                <TableHead>II Year</TableHead>
                <TableHead>III Year</TableHead>
                <TableHead>IV Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {successRateData.map((row) => (
                <TableRow key={row.yearOfEntry}>
                  <TableCell>{row.yearOfEntry}</TableCell>
                  <TableCell>{row.n1n2n3}</TableCell>
                  <TableCell>{row.firstYear}</TableCell>
                  <TableCell>{row.secondYear}</TableCell>
                  <TableCell>{row.thirdYear}</TableCell>
                  <TableCell>{row.fourthYear}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#02959F]">
              Student Details
            </h2>
            <div className="flex items-center gap-4">
              <Select onValueChange={setFilterType}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select filter type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic Year Wise</SelectItem>
                  <SelectItem value="enrollment">Enrollment No. Wise</SelectItem>
                  <SelectItem value="name">Name Wise</SelectItem>
                  <SelectItem value="gr">GR No. Wise</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={() => navigate("/success-rate-upload")}
                className="bg-[#02959F] text-white hover:bg-[#037885] flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Details
              </Button>

              {filterType === "academic" && (
                <Select onValueChange={setAcademicYear}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-25">2024-25</SelectItem>
                    <SelectItem value="2023-24">2023-24</SelectItem>
                    <SelectItem value="2022-23">2022-23</SelectItem>
                  </SelectContent>
                </Select>
              )}

              {(filterType === "enrollment" || filterType === "name" || filterType === "gr") && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder={
                      filterType === "enrollment" 
                        ? "Search by enrollment number" 
                        : filterType === "name"
                        ? "Search by name"
                        : "Search by GR number"
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-[300px]"
                  />
                </div>
              )}
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>GR No.</TableHead>
                <TableHead>Enrollment Number</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Academic Year</TableHead>
                <TableHead>Grade History</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Table will be populated with actual data when integrated with backend */}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SuccessRate;
