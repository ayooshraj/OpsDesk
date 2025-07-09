
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Users, 
  Phone, 
  Mail, 
  Building,
  MoreVertical,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - in real app this would come from API
  const clients = [
    {
      id: 1,
      name: "Acme Corporation",
      contact: "John Smith",
      email: "john@acme.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      projects: 3,
      totalValue: 15600
    },
    {
      id: 2,
      name: "Tech Startup Inc",
      contact: "Sarah Johnson",
      email: "sarah@techstartup.com",
      phone: "+1 (555) 987-6543",
      status: "Active",
      projects: 2,
      totalValue: 24800
    },
    {
      id: 3,
      name: "Fashion Brand Co",
      contact: "Mike Wilson",
      email: "mike@fashionbrand.com",
      phone: "+1 (555) 456-7890",
      status: "Inactive",
      projects: 1,
      totalValue: 8900
    },
    {
      id: 4,
      name: "Local Restaurant",
      contact: "Emma Davis",
      email: "emma@restaurant.com",
      phone: "+1 (555) 321-0987",
      status: "Active",
      projects: 1,
      totalValue: 5200
    }
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === "Active" 
      ? "bg-green-100 text-green-800" 
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-600" />
            Clients
          </h1>
          <p className="text-gray-600 mt-1">Manage your client relationships</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Search and Stats */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-4">
          <Card className="border-0 bg-blue-50">
            <CardContent className="p-4">
              <div className="text-sm font-medium text-blue-600">Total Clients</div>
              <div className="text-2xl font-bold text-blue-900">{clients.length}</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-green-50">
            <CardContent className="p-4">
              <div className="text-sm font-medium text-green-600">Active</div>
              <div className="text-2xl font-bold text-green-900">
                {clients.filter(c => c.status === "Active").length}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <Card key={client.id} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-900">{client.name}</CardTitle>
                    <p className="text-sm text-gray-600">{client.contact}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge className={getStatusColor(client.status)}>
                  {client.status}
                </Badge>
                <span className="text-sm font-medium text-gray-900">
                  ${client.totalValue.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Active Projects</span>
                  <span className="font-medium text-gray-900">{client.projects}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredClients.length === 0 && (
        <Card className="border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No clients found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Get started by adding your first client"}
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Clients;
