
import { CriteriaCard } from "@/components/criteria/CriteriaCard";

const criteriaData = [
  {
    number: "4.1",
    title: "Student Admission",
    marks: 60,
    details: "enrollment-details",
    subCriteria: [
      {
        number: "4.1.1",
        title: "Enrolment Percentage",
        marks: 20,
        details: "enrollment-details"
      },
      {
        number: "4.1.2",
        title: "Success Rate in Stipulated Period",
        marks: 40,
        details: "success-rate"
      }
    ]
  },
  {
    number: "4.2",
    title: "Academic Performance",
    marks: 200,
    details: "academic-performance"
  },
  {
    number: "4.3",
    title: "Placement and Higher Studies",
    marks: 40,
    details: "placement-details"
  },
  {
    number: "4.4",
    title: "Upload Documents",
    marks: 0,
    details: "upload-documents"
  },
  {
    number: "4.5",
    title: "Professional Activities",
    marks: 50,
    details: "professional-activities",
    subCriteria: [
      {
        number: "4.5.1",
        title: "Professional societies/chapters and organizing engineering events",
        marks: 30,
        details: "professional-activities"
      },
      {
        number: "4.5.2",
        title: "Publication of technical magazines, newsletters, etc",
        marks: 20,
        details: "publications"
      }
    ]
  }
];

const CriteriaFour = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#02959F]">
          Criterion 4: Students Performance and Learning Assessment
        </h1>
        <div className="space-y-6">
          {criteriaData.map((criterion) => (
            <CriteriaCard key={criterion.number} criterion={criterion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CriteriaFour;
