
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Search, Eye, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

const societies = [
  { id: 1, name: "Institute of Electrical and Electronics Engineers Chapter", logo: "/path/to/ieee.png" },
  { id: 2, name: "Women in Engineering Chapter", logo: "/path/to/wie.png" },
  { id: 3, name: "Coding NINJAS 10X CLUB Marwadi University Chapter", logo: "/path/to/coding.png" },
  { id: 4, name: "Circuitology Club", logo: "/path/to/circuitology.png" },
  { id: 5, name: "Competitive Programming Club", logo: "/path/to/cp.png" },
  { id: 6, name: "Data Science Club", logo: "/path/to/datascience.png" },
  { id: 7, name: "Cloud Computing and Devops Club", logo: "/path/to/cloud.png" }
];

const eventsData = [
  { id: 1, club: "IEEE", event: "Technical Workshop", documentedProof: "workshop.pdf" },
  { id: 2, club: "WIE", event: "Women in Tech Seminar", documentedProof: "seminar.pdf" }
];

const ProfessionalSocieties = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSociety, setSelectedSociety] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [eventName, setEventName] = useState("");
  const [documents, setDocuments] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Event details added successfully",
    });
    setShowAddForm(false);
  };

  const filteredEvents = eventsData.filter(event => 
    (!selectedSociety || event.club === selectedSociety) &&
    (!searchQuery || 
      event.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.event.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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
          Professional Societies & Chapters
        </h1>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <Card className="mb-8 p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sr No</TableHead>
                <TableHead>Institutional Membership</TableHead>
                <TableHead>Logo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {societies.map((society) => (
                <TableRow key={society.id}>
                  <TableCell>{society.id}</TableCell>
                  <TableCell>{society.name}</TableCell>
                  <TableCell>
                    <img src={society.logo} alt={society.name} className="h-12 w-auto" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#02959F]">Event Details</h2>
            <div className="flex items-center gap-4">
              <Select onValueChange={setSelectedSociety}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select society/club" />
                </SelectTrigger>
                <SelectContent>
                  {societies.map((society) => (
                    <SelectItem key={society.id} value={society.name}>
                      {society.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-[300px]"
                />
              </div>

              <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
                <DialogTrigger asChild>
                  <Button className="bg-[#02959F] text-white hover:bg-[#037885] flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Add Event Details</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label>Society/Club Name</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select society/club" />
                        </SelectTrigger>
                        <SelectContent>
                          {societies.map((society) => (
                            <SelectItem key={society.id} value={society.name}>
                              {society.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Event Name</Label>
                      <Input
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Enter event name"
                      />
                    </div>
                    <div>
                      <Label>Upload Documents</Label>
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files || []);
                            setDocuments(files);
                          }}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
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
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Club/Society</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Documented Proof</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.club}</TableCell>
                  <TableCell>{event.event}</TableCell>
                  <TableCell>{event.documentedProof}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-[#02959F] hover:text-white hover:bg-[#02959F]"
                    >
                      <Eye className="h-4 w-4" />
                      See Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalSocieties;
