
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface BasicDetailsFormProps {
  onClose: () => void;
}

export const BasicDetailsForm = ({ onClose }: BasicDetailsFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    grNo: "",
    enrollNo: "",
    academicYear: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.grNo || !formData.enrollNo || !formData.academicYear) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success",
      description: "Basic details submitted successfully",
    });
    onClose();
  };

  return (
    <Card className="p-6 bg-white mb-6">
      <h2 className="text-2xl font-semibold text-[#02959F] mb-6">Basic Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full"
            placeholder="Enter full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="grNo" className="text-gray-700">GR Number</Label>
          <Input
            id="grNo"
            value={formData.grNo}
            onChange={(e) => setFormData({...formData, grNo: e.target.value})}
            className="w-full"
            placeholder="Enter GR number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="enrollNo" className="text-gray-700">Enrollment Number</Label>
          <Input
            id="enrollNo"
            value={formData.enrollNo}
            onChange={(e) => setFormData({...formData, enrollNo: e.target.value})}
            className="w-full"
            placeholder="Enter enrollment number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="academicYear" className="text-gray-700">Academic Year</Label>
          <Select
            value={formData.academicYear}
            onValueChange={(value) => setFormData({...formData, academicYear: value})}
          >
            <SelectTrigger id="academicYear" className="w-full">
              <SelectValue placeholder="Select academic year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25">2024-25</SelectItem>
              <SelectItem value="2023-24">2023-24</SelectItem>
              <SelectItem value="2022-23">2022-23</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            className="flex-1 bg-[#02959F] text-white hover:bg-[#037885]"
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};
