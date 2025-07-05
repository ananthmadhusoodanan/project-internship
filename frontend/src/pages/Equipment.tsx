// Equipment.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Search,
  Edit,
  Trash2,
  Plus,
  MoreHorizontal,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Navigation from "@/components/Navigation";

const Equipment = () => {
  const initialNewEquipment = {
    equipmentNumber: "",
    deviceType: "",
    modelNumber: "",
    lotNo: "",
    purchaseDate: "",
    amortizationDate: "",
    status: "",
    purchasePrice: "",
    date: "",
    type: "",
    productName: "",
    packagePartNumber1: "",
    lotNo1: "",
    packagePartNumber2: "",
    lotNo2: "",
    remarks: "",
  };

  const [equipmentList, setEquipmentList] = useState([]);
  const [newEquipment, setNewEquipment] = useState(initialNewEquipment);
  const [showAddEquipment, setShowAddEquipment] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEquipmentId, setEditingEquipmentId] = useState(null);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(equipmentList.length / itemsPerPage);
  const currentItems = equipmentList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = () => {
    axios
      .get("http://localhost:5253/api/equipment")
      .then((res) => setEquipmentList(res.data))
      .catch((err) => console.error("Error fetching equipment:", err));
  };

  const handleAddOrEditEquipment = () => {
    const request = isEditing
      ? axios.put(
          `http://localhost:5253/api/equipment/${editingEquipmentId}`,
          newEquipment
        )
      : axios.post("http://localhost:5253/api/equipment", newEquipment);

    request
      .then(() => {
        fetchEquipment();
        setNewEquipment(initialNewEquipment);
        setIsEditing(false);
        setEditingEquipmentId(null);
        setShowAddEquipment(false);
      })
      .catch((err) => console.error("Error saving equipment:", err));
  };

  const handleEdit = (equipment) => {
    setNewEquipment(equipment);
    setEditingEquipmentId(equipment.equipmentId);
    setIsEditing(true);
    setShowAddEquipment(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this equipment?")) {
      axios
        .delete(`http://localhost:5253/api/equipment/${id}`)
        .then(() => fetchEquipment())
        .catch((err) => console.error("Error deleting equipment:", err));
    }
  };

  const handleClear = () => {
    setNewEquipment(initialNewEquipment);
    setIsEditing(false);
    setEditingEquipmentId(null);
  };

  const handleExportCSV = () => {
    window.open("http://localhost:5253/api/equipment/export", "_blank");
  };

  const deviceTypeOptions = [
    "Exchange",
    "Machine",
    "Telephone",
    "Router",
    "Defective",
  ];

  const statusOptions = [
    "In storage",
    "Processing",
    "On loan",
    "Defective",
    "Maintenance",
    "Amortized",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Equipment Management
          </h1>
          <p className="text-gray-400">
            Track and monitor telecom equipment with real-time status updates
          </p>
        </motion.div>

        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Equipment List</CardTitle>
            <div className="flex gap-2">
              <Button className="bg-green-600" onClick={handleExportCSV}>
                <Download className="w-4 h-4 mr-2" /> CSV Output
              </Button>
              <Button
                className="bg-blue-600"
                onClick={() => {
                  handleClear();
                  setShowAddEquipment(true);
                }}
              >
                <Plus className="w-4 h-4 mr-2" /> Add Equipment
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Select</TableHead>
                    <TableHead className="text-gray-300">
                      Equipment No
                    </TableHead>
                    <TableHead className="text-gray-300">Device Type</TableHead>
                    <TableHead className="text-gray-300">Model</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentItems.map((eq, index) => (
                    <TableRow
                      key={eq.equipmentId || index}
                      className="border-gray-700 hover:bg-gray-700/50"
                    >
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell className="text-white">
                        {eq.equipmentNumber}
                      </TableCell>
                      <TableCell className="text-white">
                        {eq.deviceType}
                      </TableCell>
                      <TableCell className="text-white">
                        {eq.modelNumber}
                      </TableCell>
                      <TableCell className="text-white">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            eq.status === "Active"
                              ? "bg-green-600"
                              : "bg-yellow-600"
                          } text-white`}
                        >
                          {eq.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-gray-700 border-gray-600">
                            <DropdownMenuItem
                              className="text-white hover:bg-gray-600"
                              onClick={() => handleEdit(eq)}
                            >
                              <Edit className="w-4 h-4 mr-2" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-400 hover:bg-gray-600"
                              onClick={() => handleDelete(eq.equipmentId)}
                            >
                              <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>

        {/* Modal */}
        {showAddEquipment && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-gray-800 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {isEditing ? "Edit Equipment" : "Add New Equipment"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(initialNewEquipment).map((key) => (
                  <div key={key}>
                    <Label className="text-gray-300">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Label>
                    {key === "deviceType" ? (
                      <Select
                        value={newEquipment[key]}
                        onValueChange={(val) =>
                          setNewEquipment({ ...newEquipment, [key]: val })
                        }
                      >
                        <SelectTrigger className="bg-gray-700 text-white border-gray-600">
                          <SelectValue placeholder="Select Device Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          {deviceTypeOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : key === "status" ? (
                      <Select
                        value={newEquipment[key]}
                        onValueChange={(val) =>
                          setNewEquipment({ ...newEquipment, [key]: val })
                        }
                      >
                        <SelectTrigger className="bg-gray-700 text-white border-gray-600">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          {statusOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : key === "remarks" ? (
                      <Textarea
                        value={newEquipment[key]}
                        onChange={(e) =>
                          setNewEquipment({
                            ...newEquipment,
                            [key]: e.target.value,
                          })
                        }
                        className="bg-gray-700 text-white border-gray-600"
                        placeholder="Enter remarks"
                      />
                    ) : (
                      <Input
                        type={
                          key.toLowerCase().includes("date") ? "date" : "text"
                        }
                        value={newEquipment[key]}
                        onChange={(e) =>
                          setNewEquipment({
                            ...newEquipment,
                            [key]: e.target.value,
                          })
                        }
                        className="bg-gray-700 text-white border-gray-600"
                        placeholder={`Enter ${key}`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 pt-6">
                <Button
                  onClick={handleAddOrEditEquipment}
                  className="bg-blue-600"
                >
                  {isEditing ? "Update" : "Register"}
                </Button>
                <Button
                  onClick={handleClear}
                  variant="outline"
                  className="text-white border-gray-500"
                >
                  Clear
                </Button>
                <Button
                  onClick={() => {
                    setShowAddEquipment(false);
                    handleClear();
                  }}
                  variant="outline"
                  className="ml-auto text-white border-gray-500"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Equipment;
