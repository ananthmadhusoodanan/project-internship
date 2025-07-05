import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, User, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const Worksite = () => {
  const [formData, setFormData] = useState({
    applicationType: "",
    applicationDate: "",
    applicationFerry: "",
    receptionNumber: "",
    applicationBranch: "",
    branchCode: "",
    applicationEmployeeNumber: "",
    applicationNumber: "",
    constructionNumber: "",
    siteName: "",
    desiredInstallationDate: "",
    desiredRemovalDate: "",
    installationPeriod: "",
    onsiteStaffName: "",
    telephoneNumber: "",
    expenseProcessing: "",
    faxNumber: "",
    email: "",
    postcode: "",
    installationAddress: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Worksite application submitted:", formData);
  };

  const handleClear = () => {
    setFormData({
      applicationType: "",
      applicationDate: "",
      applicationFerry: "",
      receptionNumber: "",
      applicationBranch: "",
      branchCode: "",
      applicationEmployeeNumber: "",
      applicationNumber: "",
      constructionNumber: "",
      siteName: "",
      desiredInstallationDate: "",
      desiredRemovalDate: "",
      installationPeriod: "",
      onsiteStaffName: "",
      telephoneNumber: "",
      expenseProcessing: "",
      faxNumber: "",
      email: "",
      postcode: "",
      installationAddress: "",
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
              Worksite Module
            </h1>
            <p className="text-gray-400">
              Coordinate worksite operations and field management efficiently
            </p>
          </motion.div>

          {/* Application Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5" />
                  Application Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select
                  value={formData.applicationType}
                  onValueChange={(value) =>
                    handleInputChange("applicationType", value)
                  }
                >
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select application type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="application">Application</SelectItem>
                    <SelectItem value="constructions">Constructions</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calendar className="w-5 h-5" />
                  Application Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="applicationDate" className="text-gray-300">
                      Application Date
                    </Label>
                    <Input
                      id="applicationDate"
                      type="date"
                      value={formData.applicationDate}
                      onChange={(e) =>
                        handleInputChange("applicationDate", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="applicationFerry" className="text-gray-300">
                      Application Ferry
                    </Label>
                    <Input
                      id="applicationFerry"
                      value={formData.applicationFerry}
                      onChange={(e) =>
                        handleInputChange("applicationFerry", e.target.value)
                      }
                      placeholder="Enter application ferry"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="receptionNumber" className="text-gray-300">
                      Reception Number
                    </Label>
                    <Input
                      id="receptionNumber"
                      value={formData.receptionNumber}
                      onChange={(e) =>
                        handleInputChange("receptionNumber", e.target.value)
                      }
                      placeholder="Enter reception number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="applicationBranch"
                      className="text-gray-300"
                    >
                      Application Branch
                    </Label>
                    <Input
                      id="applicationBranch"
                      value={formData.applicationBranch}
                      onChange={(e) =>
                        handleInputChange("applicationBranch", e.target.value)
                      }
                      placeholder="Enter application branch"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="branchCode" className="text-gray-300">
                      Branch Code
                    </Label>
                    <Input
                      id="branchCode"
                      value={formData.branchCode}
                      onChange={(e) =>
                        handleInputChange("branchCode", e.target.value)
                      }
                      placeholder="Enter branch code"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="applicationEmployeeNumber"
                      className="text-gray-300"
                    >
                      Application Employee Number
                    </Label>
                    <Input
                      id="applicationEmployeeNumber"
                      value={formData.applicationEmployeeNumber}
                      onChange={(e) =>
                        handleInputChange(
                          "applicationEmployeeNumber",
                          e.target.value
                        )
                      }
                      placeholder="Enter employee number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="applicationNumber"
                      className="text-gray-300"
                    >
                      Application Number
                    </Label>
                    <Input
                      id="applicationNumber"
                      value={formData.applicationNumber}
                      onChange={(e) =>
                        handleInputChange("applicationNumber", e.target.value)
                      }
                      placeholder="Enter application number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="constructionNumber"
                      className="text-gray-300"
                    >
                      Construction Number (Item Number)
                    </Label>
                    <Input
                      id="constructionNumber"
                      value={formData.constructionNumber}
                      onChange={(e) =>
                        handleInputChange("constructionNumber", e.target.value)
                      }
                      placeholder="Enter construction number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteName" className="text-gray-300">
                      Site Name
                    </Label>
                    <Input
                      id="siteName"
                      value={formData.siteName}
                      onChange={(e) =>
                        handleInputChange("siteName", e.target.value)
                      }
                      placeholder="Enter site name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="desiredInstallationDate"
                      className="text-gray-300"
                    >
                      Desired Installation Date
                    </Label>
                    <Input
                      id="desiredInstallationDate"
                      type="date"
                      value={formData.desiredInstallationDate}
                      onChange={(e) =>
                        handleInputChange(
                          "desiredInstallationDate",
                          e.target.value
                        )
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="desiredRemovalDate"
                      className="text-gray-300"
                    >
                      Desired Removal Date
                    </Label>
                    <Input
                      id="desiredRemovalDate"
                      type="date"
                      value={formData.desiredRemovalDate}
                      onChange={(e) =>
                        handleInputChange("desiredRemovalDate", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="installationPeriod"
                      className="text-gray-300"
                    >
                      Installation Period
                    </Label>
                    <Input
                      id="installationPeriod"
                      value={formData.installationPeriod}
                      onChange={(e) =>
                        handleInputChange("installationPeriod", e.target.value)
                      }
                      placeholder="Enter installation period"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="onsiteStaffName" className="text-gray-300">
                      On-site Staff Name
                    </Label>
                    <Input
                      id="onsiteStaffName"
                      value={formData.onsiteStaffName}
                      onChange={(e) =>
                        handleInputChange("onsiteStaffName", e.target.value)
                      }
                      placeholder="Enter staff name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telephoneNumber" className="text-gray-300">
                      Telephone Number
                    </Label>
                    <Input
                      id="telephoneNumber"
                      value={formData.telephoneNumber}
                      onChange={(e) =>
                        handleInputChange("telephoneNumber", e.target.value)
                      }
                      placeholder="Enter telephone number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="expenseProcessing"
                      className="text-gray-300"
                    >
                      Expense Processing
                    </Label>
                    <Input
                      id="expenseProcessing"
                      value={formData.expenseProcessing}
                      onChange={(e) =>
                        handleInputChange("expenseProcessing", e.target.value)
                      }
                      placeholder="Enter expense processing"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="faxNumber" className="text-gray-300">
                      Fax Number
                    </Label>
                    <Input
                      id="faxNumber"
                      value={formData.faxNumber}
                      onChange={(e) =>
                        handleInputChange("faxNumber", e.target.value)
                      }
                      placeholder="Enter fax number"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter email address"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Installation Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">
                  Installation Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postcode" className="text-gray-300">
                      Postcode
                    </Label>
                    <Input
                      id="postcode"
                      value={formData.postcode}
                      onChange={(e) =>
                        handleInputChange("postcode", e.target.value)
                      }
                      placeholder="Enter postcode"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label
                      htmlFor="installationAddress"
                      className="text-gray-300"
                    >
                      Installation Address
                    </Label>
                    <Textarea
                      id="installationAddress"
                      value={formData.installationAddress}
                      onChange={(e) =>
                        handleInputChange("installationAddress", e.target.value)
                      }
                      placeholder="Enter complete installation address"
                      rows={3}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Submit Application
                  </Button>
                  <Button
                    onClick={handleClear}
                    variant="outline"
                    className="border-gray-600 text-black hover:bg-gray-700"
                  >
                    Clear Form
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

export default Worksite;
