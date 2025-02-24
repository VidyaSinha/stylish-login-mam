
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, Plus, Upload } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

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

const eventsData = [
  {
    id: 1,
    club: "IEEE Chapter",
    event: "Technical Workshop",
    date: "2024-02-15",
    documentedProof: "workshop_report.pdf"
  },
  {
    id: 2,
    club: "Women in Engineering Chapter",
    event: "Women in Tech Seminar",
    date: "2024-01-20",
    documentedProof: "seminar_photos.pdf"
  }
];

const ProfessionalActivities = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSociety, setSelectedSociety] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditMarks, setShowEditMarks] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState({
    cay: "",
    caym1: "",
    caym2: ""
  });
  const [eventFormData, setEventFormData] = useState({
    society: "",
    eventName: "",
    date: "",
    documents: [] as File[]
  });

  const handleEditMarks = (society: any) => {
    setEditingId(society.id);
    setEditFormData({
      cay: society.cay.toString(),
      caym1: society.caym1.toString(),
      caym2: society.caym2.toString()
    });
    setShowEditMarks(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Marks updated successfully"
    });
    setShowEditMarks(false);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Event details added successfully"
    });
    setShowAddForm(false);
  };

  const filteredEvents = eventsData.filter(event => 
    !selectedSociety || event.club === selectedSociety
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
          Professional Activities
        </h1>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <Card className="p-6 mb-8">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sr No</TableHead>
                  <TableHead>Name of the Professional societies</TableHead>
                  <TableHead>2024-25 (CAY)</TableHead>
                  <TableHead>2023-24 (CAYm1)</TableHead>
                  <TableHead>2022-23 (CAYm2)</TableHead>
                  <TableHead>Actions</TableHead>
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
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditMarks(society)}
                        className="text-[#02959F] hover:text-white hover:bg-[#02959F]"
                      >
                        Edit Marks
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#02959F]">Society Activities</h2>
            <div className="flex items-center gap-4">
              <Select value={selectedSociety} onValueChange={setSelectedSociety}>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Filter by society" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Societies</SelectItem>
                  {societiesData.map(society => (
                    <SelectItem key={society.id} value={society.name}>
                      {society.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
                <DialogTrigger asChild>
                  <Button className="bg-[#02959F] text-white hover:bg-[#037885]">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Event Details</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleEventSubmit} className="space-y-4">
                    <div>
                      <Label>Society/Club Name</Label>
                      <Select onValueChange={(value) => setEventFormData({ ...eventFormData, society: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select society" />
                        </SelectTrigger>
                        <SelectContent>
                          {societiesData.map(society => (
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
                        placeholder="Enter event name"
                        value={eventFormData.eventName}
                        onChange={(e) => setEventFormData({ ...eventFormData, eventName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Event Date</Label>
                      <Input 
                        type="date"
                        value={eventFormData.date}
                        onChange={(e) => setEventFormData({ ...eventFormData, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Documents</Label>
                      <Input
                        type="file"
                        multiple
                        onChange={(e) => {
                          const files = Array.from(e.target.files || []);
                          setEventFormData({ ...eventFormData, documents: files });
                        }}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#02959F] text-white hover:bg-[#037885]">
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Society/Club</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Documented Proof</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.club}</TableCell>
                    <TableCell>{event.event}</TableCell>
                    <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
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
          </div>
        </Card>
      </div>

      <Dialog open={showEditMarks} onOpenChange={setShowEditMarks}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Marks</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <Label>2024-25 (CAY)</Label>
              <Input
                type="number"
                value={editFormData.cay}
                onChange={(e) => setEditFormData({ ...editFormData, cay: e.target.value })}
              />
            </div>
            <div>
              <Label>2023-24 (CAYm1)</Label>
              <Input
                type="number"
                value={editFormData.caym1}
                onChange={(e) => setEditFormData({ ...editFormData, caym1: e.target.value })}
              />
            </div>
            <div>
              <Label>2022-23 (CAYm2)</Label>
              <Input
                type="number"
                value={editFormData.caym2}
                onChange={(e) => setEditFormData({ ...editFormData, caym2: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full bg-[#02959F] text-white hover:bg-[#037885]">
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfessionalActivities;
