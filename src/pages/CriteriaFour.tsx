
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BasicDetailsForm } from "@/components/student/BasicDetailsForm";
import { CriteriaCard } from "@/components/criteria/CriteriaCard";

const CriteriaFour = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const subCriteria = [
    {
      number: "4.1",
      title: "Enrollment Ratio",
      marks: 20,
      details: "enrollment-details"
    },
    {
      number: "4.2",
      title: "Success Rate in Stipulated Period of the Program",
      marks: 20,
      subCriteria: [
        {
          number: "4.2.1",
          title: "Success Rate without Backlogs",
          marks: 15,
          details: "success-rate-no-backlog"
        },
        {
          number: "4.2.2",
          title: "Success Rate with Backlogs",
          marks: 5,
          details: "success-rate-with-backlog"
        }
      ]
    },
    {
      number: "4.3",
      title: "Academic Performance in Second Year",
      marks: 10,
      details: "academic-performance"
    },
    {
      number: "4.4",
      title: "Placement, Higher Studies and Entrepreneurship",
      marks: 30,
      details: "placement-details"
    },
    {
      number: "4.5",
      title: "Professional Activities",
      marks: 20,
      details: "professional-activities",
      subCriteria: [
        {
          number: "4.5.1",
          title: "Professional Societies/Chapters and Organizing Engineering Events",
          marks: 5,
          details: "professional-societies"
        },
        {
          number: "4.5.2",
          title: "Publication of Technical Magazines and Newsletter",
          marks: 5,
          details: "publications"
        },
        {
          number: "4.5.3",
          title: "Participation at Inter-Institution Events by Students of Program of Study",
          marks: 10,
          details: "inter-institution-events"
        }
      ]
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
          Criteria 4: Students' Performance
        </h1>
      </div>

      <div className="container mx-auto px-4 pb-8 w-[80%]">
        <div className="mb-6 flex justify-end">
          <Button
            onClick={() => setShowForm(true)}
            className="bg-[#02959F] text-white hover:bg-[#037885] flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            Student Basic Details
          </Button>
        </div>

        {showForm ? (
          <BasicDetailsForm onClose={() => setShowForm(false)} />
        ) : (
          <div className="space-y-6">
            {subCriteria.map((criterion) => (
              <CriteriaCard key={criterion.number} criterion={criterion} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CriteriaFour;
