
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Search, 
  FolderOpen, 
  Calendar,
  User,
  MoreVertical,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data
  const projects = [
    {
      id: 1,
      name: "Brand Redesign Project",
      client: "Acme Corporation",
      status: "In Progress",
      progress: 75,
      dueDate: "2024-02-15",
      budget: 15000,
      spent: 11250
    },
    {
      id: 2,
      name: "E-commerce Website",
      client: "Tech Startup Inc",
      status: "Review",
      progress: 90,
      dueDate: "2024-01-30",
      budget: 25000,
      spent: 22500
    },
    {
      id: 3,
      name: "Marketing Campaign",
      client: "Fashion Brand Co",
      status: "Planning",
      progress: 25,
      dueDate: "2024-03-01",
      budget: 8000,
      spent: 2000
    },
    {
      id: 4,
      name: "Website Maintenance",
      client: "Local Restaurant",
      status: "Completed",
      progress: 100,
      dueDate: "2024-01-15",
      budget: 3000,
      spent: 2800
    },
    {
      id: 5,
      name: "Mobile App Development",
      client: "Tech Startup Inc",
      status: "In Progress",
      progress: 45,
      dueDate: "2024-04-15",
      budget: 35000,
      spent: 15750
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status.toLowerCase().replace(" ", "-") === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Review": return "bg-orange-100 text-orange-800";
      case "Planning": return "bg-gray-100 text-gray-800";
      case "Completed": return "bg-green-100 text-green-800";
      case "On Hold": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress >= 25) return "bg-orange-500";
    return "bg-gray-500";
  };

  const projectStats = {
    total: projects.length,
    inProgress: projects.filter(p => p.status === "In Progress").length,
    completed: projects.filter(p => p.status === "Completed").length,
    overdue: projects.filter(p => new Date(p.dueDate) < new Date() && p.status !== "Completed").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FolderOpen className="h-6 w-6 text-purple-600" />
            Projects
          </h1>
          <p className="text-gray-600 mt-1">Track and manage your client projects</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 bg-blue-50">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-blue-600">Total Projects</div>
            <div className="text-2xl font-bold text-blue-900">{projectStats.total}</div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-orange-50">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-orange-600">In Progress</div>
            <div className="text-2xl font-bold text-orange-900">{projectStats.inProgress}</div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-green-50">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-green-600">Completed</div>
            <div className="text-2xl font-bold text-green-900">{projectStats.completed}</div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-red-50">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-red-600">Overdue</div>
            <div className="text-2xl font-bold text-red-900">{projectStats.overdue}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="planning">Planning</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="review">Review</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <User className="h-4 w-4" />
                        <span>{project.client}</span>
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>Due: {project.dueDate}</span>
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
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
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

                  {/* Progress */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-gray-900">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  {/* Budget */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Budget: ${project.budget.toLocaleString()}</span>
                    <span className="text-gray-600">Spent: ${project.spent.toLocaleString()}</span>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex flex-row lg:flex-col items-center gap-3 lg:w-48">
                  <Badge className={`${getStatusColor(project.status)} flex-shrink-0`}>
                    {project.status}
                  </Badge>
                  <Button variant="outline" size="sm" className="flex-shrink-0">
                    View Project
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Card className="border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <FolderOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== "all" 
                ? "Try adjusting your search or filter" 
                : "Get started by creating your first project"}
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Projects;
