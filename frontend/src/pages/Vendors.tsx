import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Settings, Trash2, Plus, FileText, Edit } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const Vendors = () => {
  const [searchData, setSearchData] = useState({
    no: "",
    vendorCode: "",
    companyName: "",
    representativeName: "",
    telephoneNumber: "",
    faxNumber: "",
    prefecture: "",
  });

  const [newVendor, setNewVendor] = useState({
    vendorCode: "",
    companyName: "",
    representativeName: "",
    telephoneNumber: "",
    faxNumber: "",
    prefecture: "",
  });

  const mockVendors = [
    {
      id: 1,
      no: "001",
      vendorCode: "VND001",
      companyName: "Tech Solutions Inc",
      representativeName: "John Smith",
      telephoneNumber: "123-456-7890",
      faxNumber: "123-456-7891",
      prefecture: "Tokyo",
    },
    {
      id: 2,
      no: "002",
      vendorCode: "VND002",
      companyName: "Network Systems Ltd",
      representativeName: "Sarah Johnson",
      telephoneNumber: "098-765-4321",
      faxNumber: "098-765-4322",
      prefecture: "Osaka",
    },
  ];

  const handleSearch = () => {
    console.log("Searching with:", searchData);
  };

  const handleAddVendor = () => {
    console.log("Adding vendor:", newVendor);
  };

  const handleClear = () => {
    setNewVendor({
      vendorCode: "",
      companyName: "",
      representativeName: "",
      telephoneNumber: "",
      faxNumber: "",
      prefecture: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Vendor Module
            </h1>
            <p className="text-gray-400">
              Manage vendor relationships and procurement processes
            </p>
          </motion.div>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Search className="w-5 h-5" />
                  Search Vendors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="no" className="text-gray-300">
                      No
                    </Label>
                    <Input
                      id="no"
                      value={searchData.no}
                      onChange={(e) =>
                        setSearchData({ ...searchData, no: e.target.value })
                      }
                      placeholder="Enter number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="vendorCode" className="text-gray-300">
                      Vendor Code
                    </Label>
                    <Input
                      id="vendorCode"
                      value={searchData.vendorCode}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          vendorCode: e.target.value,
                        })
                      }
                      placeholder="Enter vendor code"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyName" className="text-gray-300">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      value={searchData.companyName}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          companyName: e.target.value,
                        })
                      }
                      placeholder="Enter company name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="representativeName"
                      className="text-gray-300"
                    >
                      Representative Name
                    </Label>
                    <Input
                      id="representativeName"
                      value={searchData.representativeName}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          representativeName: e.target.value,
                        })
                      }
                      placeholder="Enter representative name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telephoneNumber" className="text-gray-300">
                      Telephone Number
                    </Label>
                    <Input
                      id="telephoneNumber"
                      value={searchData.telephoneNumber}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          telephoneNumber: e.target.value,
                        })
                      }
                      placeholder="Enter telephone number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="faxNumber" className="text-gray-300">
                      Fax Number
                    </Label>
                    <Input
                      id="faxNumber"
                      value={searchData.faxNumber}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          faxNumber: e.target.value,
                        })
                      }
                      placeholder="Enter fax number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="prefecture" className="text-gray-300">
                      Prefecture
                    </Label>
                    <Input
                      id="prefecture"
                      value={searchData.prefecture}
                      onChange={(e) =>
                        setSearchData({
                          ...searchData,
                          prefecture: e.target.value,
                        })
                      }
                      placeholder="Enter prefecture"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Vendor List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="w-12 text-gray-300">
                        Select
                      </TableHead>
                      <TableHead className="text-gray-300">No</TableHead>
                      <TableHead className="text-gray-300">
                        Vendor Code
                      </TableHead>
                      <TableHead className="text-gray-300">
                        Company Name
                      </TableHead>
                      <TableHead className="text-gray-300">
                        Representative Name
                      </TableHead>
                      <TableHead className="text-gray-300">
                        Telephone Number
                      </TableHead>
                      <TableHead className="text-gray-300">
                        Fax Number
                      </TableHead>
                      <TableHead className="text-gray-300">
                        Prefecture
                      </TableHead>
                      <TableHead className="text-right text-gray-300">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockVendors.map((vendor) => (
                      <TableRow
                        key={vendor.id}
                        className="border-gray-700 hover:bg-gray-700/50"
                      >
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="text-white">
                          {vendor.no}
                        </TableCell>
                        <TableCell className="text-white">
                          {vendor.vendorCode}
                        </TableCell>
                        <TableCell className="text-white">
                          {vendor.companyName}
                        </TableCell>
                        <TableCell className="text-white">
                          {vendor.representativeName}
                        </TableCell>
                        <TableCell className="text-white">
                          {vendor.telephoneNumber}
                        </TableCell>
                        <TableCell className="text-white">
                          {vendor.faxNumber}
                        </TableCell>
                        <TableCell className="text-white">
                          {vendor.prefecture}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-600 text-black hover:bg-gray-700"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-400 border-red-600 hover:bg-red-600/20"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Pagination */}
                <div className="flex justify-end mt-4 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-black hover:bg-gray-700"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-600 text-black hover:bg-blue-700"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-black hover:bg-gray-700"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-black hover:bg-gray-700"
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Add New Vendor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Plus className="w-5 h-5" />
                  Add New Vendor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="newVendorCode" className="text-gray-300">
                      Vendor Code
                    </Label>
                    <Input
                      id="newVendorCode"
                      value={newVendor.vendorCode}
                      onChange={(e) =>
                        setNewVendor({
                          ...newVendor,
                          vendorCode: e.target.value,
                        })
                      }
                      placeholder="Enter vendor code"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="newCompanyName" className="text-gray-300">
                      Company Name
                    </Label>
                    <Input
                      id="newCompanyName"
                      value={newVendor.companyName}
                      onChange={(e) =>
                        setNewVendor({
                          ...newVendor,
                          companyName: e.target.value,
                        })
                      }
                      placeholder="Enter company name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="newRepresentativeName"
                      className="text-gray-300"
                    >
                      Representative Name
                    </Label>
                    <Input
                      id="newRepresentativeName"
                      value={newVendor.representativeName}
                      onChange={(e) =>
                        setNewVendor({
                          ...newVendor,
                          representativeName: e.target.value,
                        })
                      }
                      placeholder="Enter representative name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="newTelephoneNumber"
                      className="text-gray-300"
                    >
                      Telephone Number
                    </Label>
                    <Input
                      id="newTelephoneNumber"
                      value={newVendor.telephoneNumber}
                      onChange={(e) =>
                        setNewVendor({
                          ...newVendor,
                          telephoneNumber: e.target.value,
                        })
                      }
                      placeholder="Enter telephone number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="newFaxNumber" className="text-gray-300">
                      Fax Number
                    </Label>
                    <Input
                      id="newFaxNumber"
                      value={newVendor.faxNumber}
                      onChange={(e) =>
                        setNewVendor({
                          ...newVendor,
                          faxNumber: e.target.value,
                        })
                      }
                      placeholder="Enter fax number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="newPrefecture" className="text-gray-300">
                      Prefecture
                    </Label>
                    <Input
                      id="newPrefecture"
                      value={newVendor.prefecture}
                      onChange={(e) =>
                        setNewVendor({
                          ...newVendor,
                          prefecture: e.target.value,
                        })
                      }
                      placeholder="Enter prefecture"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button
                    onClick={handleAddVendor}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Newly
                  </Button>
                  <Button
                    onClick={handleAddVendor}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Registered
                  </Button>
                  <Button
                    onClick={handleClear}
                    variant="outline"
                    className="border-gray-600 text-black hover:bg-gray-700"
                  >
                    Cleared
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-black hover:bg-gray-700"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Vendors Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
