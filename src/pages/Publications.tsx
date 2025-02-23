
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

const magazines = [
  {
    id: 1,
    name: "Tech Chronicle",
    year: "2023",
    cover: "/path/to/magazine1.jpg"
  },
  {
    id: 2,
    name: "Engineering Today",
    year: "2022",
    cover: "/path/to/magazine2.jpg"
  }
];

const Publications = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAddForm, setShowAddForm] = useState(false);
  const [magazineName, setMagazineName] = useState("");
  const [year, setYear] = useState("");
  const [cover, setCover] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Magazine details added successfully",
    });
    setShowAddForm(false);
  };

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
          Technical Magazines & Newsletter
        </h1>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="flex justify-end mb-6">
          <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
            <DialogTrigger asChild>
              <Button className="bg-[#02959F] text-white hover:bg-[#037885] flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add Magazine Details</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Magazine Name</Label>
                  <Input
                    value={magazineName}
                    onChange={(e) => setMagazineName(e.target.value)}
                    placeholder="Enter magazine name"
                  />
                </div>
                <div>
                  <Label>Publication Year</Label>
                  <Input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Enter publication year"
                  />
                </div>
                <div>
                  <Label>Upload Cover</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="file"
                      onChange={(e) => setCover(e.target.files?.[0] || null)}
                      accept="image/*"
                    />
                    <Upload className="text-[#02959F] h-5 w-5" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-[#02959F] text-white hover:bg-[#037885]">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {magazines.map((magazine) => (
            <Card key={magazine.id} className="p-6">
              <div className="aspect-w-3 aspect-h-4 mb-4">
                <img
                  src={magazine.cover}
                  alt={magazine.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#02959F] mb-2">{magazine.name}</h3>
              <p className="text-gray-600">Published in {magazine.year}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
