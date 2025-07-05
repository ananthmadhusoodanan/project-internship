
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Building } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const Company = () => {
  const mockCompanies = [
    {
      id: 1,
      companyCode: "COMP001",
      companyName: "Telecom Infrastructure Ltd",
      displayCompanyName: "TI Ltd",
      postcode: "100-0001",
      addressLine1: "1-1-1 Chiyoda",
      addressLine2: "Chiyoda-ku",
      tel: "03-1234-5678"
    },
    {
      id: 2,
      companyCode: "COMP002",
      companyName: "Network Solutions Corp",
      displayCompanyName: "NS Corp",
      postcode: "150-0002",
      addressLine1: "2-2-2 Shibuya",
      addressLine2: "Shibuya-ku",
      tel: "03-8765-4321"
    }
  ];

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
              Company Module
            </h1>
            <p className="text-gray-400">Centralized company data management and organizational structure</p>
          </motion.div>

          {/* Company Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Building className="w-5 h-5" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-300">Company Code</TableHead>
                      <TableHead className="text-gray-300">Company Name</TableHead>
                      <TableHead className="text-gray-300">Display Company Name</TableHead>
                      <TableHead className="text-gray-300">Postcode</TableHead>
                      <TableHead className="text-gray-300">Address Line 1</TableHead>
                      <TableHead className="text-gray-300">Address Line 2</TableHead>
                      <TableHead className="text-gray-300">Tel</TableHead>
                      <TableHead className="text-right text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockCompanies.map((company) => (
                      <TableRow key={company.id} className="border-gray-700 hover:bg-gray-700/50">
                        <TableCell className="font-medium text-white">{company.companyCode}</TableCell>
                        <TableCell className="text-white">{company.companyName}</TableCell>
                        <TableCell className="text-white">{company.displayCompanyName}</TableCell>
                        <TableCell className="text-white">{company.postcode}</TableCell>
                        <TableCell className="text-white">{company.addressLine1}</TableCell>
                        <TableCell className="text-white">{company.addressLine2}</TableCell>
                        <TableCell className="text-white">{company.tel}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" className="text-blue-400 border-blue-600 hover:bg-blue-600/20">
                            <Edit className="w-4 h-4 mr-1" />
                            Fixes
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Company;
