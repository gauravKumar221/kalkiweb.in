"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Inbox,
  Search,
  Trash2,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  Filter,
  Download,
  FileSpreadsheet,
} from "lucide-react";

export default function DashboardInquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", { cache: "no-store" });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setInquiries(data.data);
      }
    } catch (err) {
      console.error("Error loading inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleCopyEmail = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleStatusToggle = async (id, currentStatus) => {
    const nextStatus = currentStatus === "new" ? "contacted" : "new";
    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, status: nextStatus } : item
          )
        );
        if (selectedInquiry && selectedInquiry._id === id) {
          setSelectedInquiry((prev) => ({ ...prev, status: nextStatus }));
        }
      }
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete inquiry from "${name}"?`)) return;

    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) => prev.filter((item) => item._id !== id));
        if (selectedInquiry && selectedInquiry._id === id) {
          setSelectedInquiry(null);
        }
      } else {
        alert(data.error || "Failed to delete inquiry");
      }
    } catch (err) {
      alert("Error deleting inquiry");
    }
  };

  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.firstName?.toLowerCase().includes(q) ||
        item.lastName?.toLowerCase().includes(q) ||
        item.email?.toLowerCase().includes(q) ||
        item.message?.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [inquiries, searchQuery, statusFilter]);

  const newCount = useMemo(
    () => inquiries.filter((i) => i.status === "new").length,
    [inquiries]
  );
  const contactedCount = useMemo(
    () => inquiries.filter((i) => i.status === "contacted").length,
    [inquiries]
  );

  const exportToExcel = () => {
    if (!inquiries.length) {
      alert("No inquiries available to export.");
      return;
    }

    const headers = ["Date & Time", "Full Name", "Email", "Phone Number", "Message", "Status"];
    const rows = inquiries.map((item) => [
      item.createdAt ? new Date(item.createdAt).toLocaleString("en-IN") : "-",
      `"${((item.firstName || "") + " " + (item.lastName || "")).trim().replace(/"/g, '""')}"`,
      `"${(item.email || "").replace(/"/g, '""')}"`,
      `"${(item.phone || "").replace(/"/g, '""')}"`,
      `"${(item.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
      item.status || "new",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `kalki_leads_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 text-left font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Contact Inquiries & Leads
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Real-time submissions from Contact Us forms, synced with MongoDB, Excel, and Google Sheets.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://docs.google.com/spreadsheets/d/1iW7pt5VYZKivevZQB7aDrOnuI9YNSR3wnKDc572AR7M/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors shadow-sm"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>Open Google Sheet</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>

          <button
            onClick={exportToExcel}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
            title="Download CSV for Excel"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export to Excel</span>
          </button>

          <button
            onClick={fetchInquiries}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Total Inquiries
          </div>
          <div className="text-3xl font-bold text-slate-900 mt-2">
            {inquiries.length}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            All-time submissions in database
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            New / Uncontacted
          </div>
          <div className="text-3xl font-bold text-slate-900 mt-2">
            {newCount}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Pending response from team
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Contacted & Resolved
          </div>
          <div className="text-3xl font-bold text-slate-900 mt-2">
            {contactedCount}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Marked as contacted
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, or message..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg self-start sm:self-auto">
          {[
            { key: "all", label: `All (${inquiries.length})` },
            { key: "new", label: `New (${newCount})` },
            { key: "contacted", label: `Contacted (${contactedCount})` },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                statusFilter === tab.key
                  ? "bg-white text-slate-900 shadow-sm font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-slate-500 text-sm">
            <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            Loading inquiries from MongoDB Atlas...
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-sm">
            <Inbox className="w-8 h-8 mx-auto text-slate-300 mb-2" />
            No inquiries match your filter.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider font-semibold">
                <tr>
                  <th className="px-5 py-3.5">Name</th>
                  <th className="px-5 py-3.5">Email</th>
                  <th className="px-5 py-3.5">Date</th>
                  <th className="px-5 py-3.5">Status</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInquiries.map((item) => {
                  const fullName = `${item.firstName} ${item.lastName || ""}`.trim();
                  const isNew = item.status === "new";

                  return (
                    <tr
                      key={item._id}
                      className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                      onClick={() => setSelectedInquiry(item)}
                    >
                      <td className="px-5 py-4">
                        <div className="font-semibold text-slate-900">
                          {fullName}
                        </div>
                        {item.phone && (
                          <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span>{item.phone}</span>
                          </div>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-700 font-mono text-xs">
                            {item.email}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyEmail(item.email, item._id);
                            }}
                            className="p-1 text-slate-400 hover:text-slate-800 rounded"
                            title="Copy email"
                          >
                            {copiedId === item._id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-xs text-slate-500 whitespace-nowrap">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "Recently"}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isNew
                              ? "bg-black text-white"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {isNew ? "New Lead" : "Contacted"}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-right">
                        <div
                          className="flex items-center justify-end gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            onClick={() => handleStatusToggle(item._id, item.status)}
                            className="text-xs px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 font-medium transition-colors"
                          >
                            {isNew ? "Mark Done" : "Mark New"}
                          </button>

                          <button
                            onClick={() => handleDelete(item._id, fullName)}
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="text-xl font-bold text-slate-900">
                  {selectedInquiry.firstName} {selectedInquiry.lastName}
                </div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  Submitted:{" "}
                  {selectedInquiry.createdAt
                    ? new Date(selectedInquiry.createdAt).toLocaleString()
                    : "Recently"}
                </div>
              </div>

              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  selectedInquiry.status === "new"
                    ? "bg-black text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {selectedInquiry.status === "new" ? "New Lead" : "Contacted"}
              </span>
            </div>

            {/* Details Fields */}
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                <div className="text-xs text-slate-500 font-medium">Email Address</div>
                <div className="flex items-center justify-between text-slate-900 font-medium">
                  <span>{selectedInquiry.email}</span>
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <span>Send Mail</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {selectedInquiry.phone && (
                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Phone Number</div>
                  <div className="text-slate-900 font-medium">
                    <a
                      href={`tel:${selectedInquiry.phone}`}
                      className="hover:underline"
                    >
                      {selectedInquiry.phone}
                    </a>
                  </div>
                </div>
              )}

              {selectedInquiry.message && (
                <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Message</div>
                  <div className="text-slate-800 whitespace-pre-wrap leading-relaxed">
                    {selectedInquiry.message}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={() =>
                  handleStatusToggle(selectedInquiry._id, selectedInquiry.status)
                }
                className="px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {selectedInquiry.status === "new"
                  ? "Mark as Contacted"
                  : "Mark as New"}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handleDelete(
                      selectedInquiry._id,
                      `${selectedInquiry.firstName} ${selectedInquiry.lastName}`
                    )
                  }
                  className="px-3 py-2 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-4 py-2 rounded-lg bg-black text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
