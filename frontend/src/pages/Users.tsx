import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Search, Edit, Trash2, Plus, MoreHorizontal } from "lucide-react";
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

const PAGE_SIZE = 5;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");
  const [searchAuthority, setSearchAuthority] = useState("");
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    authority: "",
  });
  const [editUserId, setEditUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5253/api/user")
      .then((res) => {
        setUsers(res.data);
        setCurrentPage(1);
      })
      .catch((err) => console.error("Error fetching users:", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setVisibleUsers(users.slice(start, end));
  }, [users, currentPage]);

  const handleAddUser = () => {
    axios
      .post("http://localhost:5253/api/user", newUser)
      .then(() => {
        fetchUsers();
        setShowAddUser(false);
        setNewUser({ username: "", password: "", authority: "" });
      })
      .catch((err) => console.error("Error adding user:", err));
  };

  const handleUpdateUser = () => {
    axios
      .put(`http://localhost:5253/api/user/${editUserId}`, newUser)
      .then(() => {
        fetchUsers();
        setShowAddUser(false);
        setEditUserId(null);
        setNewUser({ username: "", password: "", authority: "" });
      })
      .catch((err) => console.error("Error updating user:", err));
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:5253/api/user/${id}`)
      .then(() => fetchUsers())
      .catch((err) => console.error("Error deleting user:", err));
  };

  const handleEditClick = (user) => {
    setEditUserId(user.userId);
    setNewUser({
      username: user.username,
      password: user.password || "",
      authority: user.authority,
    });
    setShowAddUser(true);
  };

  const handleSearch = () => {
    axios
      .get("http://localhost:5253/api/user")
      .then((res) => {
        const filtered = res.data.filter(
          (user) =>
            user.username
              .toLowerCase()
              .includes(searchUsername.toLowerCase()) &&
            (searchAuthority ? user.authority === searchAuthority : true)
        );
        setUsers(filtered);
      })
      .catch((err) => console.error("Error filtering users:", err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            User Management
          </h1>
          <p className="text-gray-400">
            Manage user accounts, roles, and permissions
          </p>
        </motion.div>

        {/* Search */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Search Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label className="text-gray-300">Username</Label>
                <Input
                  value={searchUsername}
                  onChange={(e) => setSearchUsername(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Enter Username"
                />
              </div>
              <div>
                <Label className="text-gray-300">Authority</Label>
                <Select
                  value={searchAuthority}
                  onValueChange={setSearchAuthority}
                >
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select Authority" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Search className="w-4 h-4 mr-2" /> Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-white">User List</CardTitle>
            <Button
              onClick={() => {
                setShowAddUser(true);
                setEditUserId(null);
                setNewUser({ username: "", password: "", authority: "" });
              }}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="w-4 h-4 mr-2" /> Add User
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">No</TableHead>
                    <TableHead className="text-gray-300">Username</TableHead>
                    <TableHead className="text-gray-300">Authority</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visibleUsers.map((user, index) => (
                    <TableRow
                      key={user.userId}
                      className="border-gray-700 hover:bg-gray-700/50"
                    >
                      <TableCell className="text-white">
                        {(currentPage - 1) * PAGE_SIZE + index + 1}
                      </TableCell>
                      <TableCell className="text-white">
                        {user.username}
                      </TableCell>
                      <TableCell className="text-white">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            user.authority === "Admin"
                              ? "bg-purple-600"
                              : "bg-blue-600"
                          } text-white`}
                        >
                          {user.authority}
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
                              onClick={() => handleEditClick(user)}
                            >
                              <Edit className="w-4 h-4 mr-2" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-400 hover:bg-gray-600"
                              onClick={() => handleDeleteUser(user.userId)}
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
            <div className="mt-4 flex justify-end">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      className="text-white hover:bg-gray-700"
                    />
                  </PaginationItem>
                  {[...Array(Math.ceil(users.length / PAGE_SIZE))].map(
                    (_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          onClick={() => setCurrentPage(i + 1)}
                          isActive={currentPage === i + 1}
                          className="text-white"
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((prev) =>
                          prev < Math.ceil(users.length / PAGE_SIZE)
                            ? prev + 1
                            : prev
                        )
                      }
                      className="text-white hover:bg-gray-700"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>

        {/* Add / Edit Modal */}
        {showAddUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-lg p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {editUserId ? "Edit User" : "Add New User"}
              </h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Username</Label>
                  <Input
                    value={newUser.username}
                    onChange={(e) =>
                      setNewUser({ ...newUser, username: e.target.value })
                    }
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Password</Label>
                  <Input
                    type="password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Authority</Label>
                  <Select
                    value={newUser.authority}
                    onValueChange={(value) =>
                      setNewUser({ ...newUser, authority: value })
                    }
                  >
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select Authority" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="User">User</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={editUserId ? handleUpdateUser : handleAddUser}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {editUserId ? "Update" : "Submit"}
                </Button>
                <Button
                  onClick={() => {
                    setShowAddUser(false);
                    setEditUserId(null);
                    setNewUser({ username: "", password: "", authority: "" });
                  }}
                  className="w-full mt-2 border border-gray-500 text-white"
                  variant="outline"
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

export default Users;
