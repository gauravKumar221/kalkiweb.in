import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

// POST /api/contact - Submit new contact inquiry
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !firstName.trim()) {
      return NextResponse.json(
        { success: false, error: "First Name is required" },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email check
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const inquiry = await Inquiry.create({
      firstName: firstName.trim(),
      lastName: (lastName || "").trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || "").trim(),
      message: (message || "").trim(),
      status: "new",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your information has been submitted. Our team will contact you soon.",
        data: inquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact inquiry:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

// GET /api/contact - Retrieve all contact inquiries (admin access)
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const query = searchParams.get("q");

    let filter = {};
    if (status && status !== "all") {
      filter.status = status;
    }

    if (query) {
      const regex = new RegExp(query, "i");
      filter.$or = [
        { firstName: regex },
        { lastName: regex },
        { email: regex },
        { message: regex },
      ];
    }

    const inquiries = await Inquiry.find(filter).sort({ createdAt: -1 }).lean();
    const total = await Inquiry.countDocuments();
    const newCount = await Inquiry.countDocuments({ status: "new" });

    return NextResponse.json({
      success: true,
      data: inquiries,
      stats: {
        total,
        newCount,
      },
    });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

// DELETE /api/contact?id=... - Delete an inquiry
export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Inquiry ID is required" },
        { status: 400 }
      );
    }

    const deleted = await Inquiry.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Inquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete inquiry" },
      { status: 500 }
    );
  }
}

// PATCH /api/contact - Update inquiry status
export async function PATCH(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "ID and status are required" },
        { status: 400 }
      );
    }

    const updated = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error("Error updating inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}
