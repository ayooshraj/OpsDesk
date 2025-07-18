
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Receipt, 
  Calendar,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  Clock,
  MoreVertical,
  Edit,
  Download,
  Send
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

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data
  const invoices = [
    {
      id: "INV-001",
      client: "Acme Corporation",
      project: "Brand Redesign Project",
      amount: 5500,
      status: "Paid",
      dueDate: "2024-01-15",
      issueDate: "2023-12-15",
      overdue: false
    },
    {
      id: "INV-002", 
      client: "Tech Startup Inc",
      project: "E-commerce Website",
      amount: 8200,
      status: "Overdue",
      dueDate: "2024-01-10",
      issueDate: "2023-12-10",
      overdue: true
    },
    {
      id: "INV-003",
      client: "Fashion Brand Co",
      project: "Marketing Campaign",
      amount: 3200,
      status: "Pending",
      dueDate: "2024-01-25",
      issueDate: "2023-12-25",
      overdue: false
    },
    {
      id: "INV-004",
      client: "Local Restaurant", 
      project: "Website Maintenance",
      amount: 1200,
      status: "Paid",
      dueDate: "2024-01-20",
      issueDate: "2023-12-20",
      overdue: false
    },
    {
      id: "INV-005",
      client: "Tech Startup Inc",
      project: "Mobile App Development",
      amount: 12000,
      status: "Draft",
      dueDate: "2024-02-01",
      issueDate: "2024-01-01",
      overdue: false
    }
  ];

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || invoice.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid": return "bg-green-100 text-green-800";
      case "Pending": return "bg-orange-100 text-orange-800";
      case "Overdue": return "bg-red-100 text-red-800";
      case "Draft": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid": return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "Overdue": return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "Pending": return <Clock className="h-4 w-4 text-orange-600" />;
      default: return <Receipt className="h-4 w-4 text-gray-600" />;
    }
  };

  const invoiceStats = {
    total: invoices.reduce((sum, inv) => sum + inv.amount, 0),
    paid: invoices.filter(inv => inv.status === "Paid").reduce((sum, inv) => sum + inv.amount, 0),
    pending: invoices.filter(inv => inv.status === "Pending").reduce((sum, inv) => sum + inv.amount, 0),
    overdue: invoices.filter(inv => inv.status === "Overdue").reduce((sum, inv) => sum + inv.amount, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Receipt className="h-6 w-6 text-orange-600" />
            Invoices
          </h1>
          <p className="text-gray-600 mt-1">Manage your billing and payments</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create Invoice
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 bg-blue-50">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-blue-600">Total Revenue</div>
            <div className="text-2xl font-bold text-blue-900">
              ${invoiceStats.total.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-green-50">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-green-600">Paid</div>
            <div className="text-2xl font-bold text-green-900">
              ${invoiceStats.paid.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-orange-50">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-orange-600">Pending</div>
            <div className="text-2xl font-bold text-orange-900">
              ${invoiceStats.pending.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-red-50">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-red-600">Overdue</div>
            <div className="text-2xl font-bold text-red-900">
              ${invoiceStats.overdue.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search invoices..."
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
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Invoices Table */}
      <Card className="border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5 text-orange-600" />
            Invoice List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredInvoices.map((invoice) => (
              <div key={invoice.id} className="p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Invoice Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          {getStatusIcon(invoice.status)}
                          {invoice.id}
                        </h3>
                        <p className="text-sm text-gray-600">{invoice.client}</p>
                        <p className="text-xs text-gray-500">{invoice.project}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">
                          ${invoice.amount.toLocaleString()}
                        </div>
                        <Badge className={getStatusColor(invoice.status)}>
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Issued: {invoice.issueDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Due: {invoice.dueDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {invoice.status === "Draft" && (
                      <Button size="sm" variant="outline">
                        <Send className="h-4 w-4 mr-1" />
                        Send
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
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
                        <DropdownMenuItem>
                          <Send className="h-4 w-4 mr-2" />
                          Send Reminder
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Empty State */}
      {filteredInvoices.length === 0 && (
        <Card className="border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <Receipt className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No invoices found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== "all" 
                ? "Try adjusting your search or filter" 
                : "Get started by creating your first invoice"}
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create Invoice
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Invoices;
