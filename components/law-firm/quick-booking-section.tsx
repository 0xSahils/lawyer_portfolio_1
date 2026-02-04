"use client";

import React from "react"

import { useState } from "react";
import { Calendar, Clock, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const consultationTypes = [
  "Criminal Defense",
  "Corporate Law",
  "Family Law",
  "Property Dispute",
  "Civil Litigation",
  "Other",
];

export function QuickBookingSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-[#c9a962]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif text-[#1a2332] mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-[#1a2332]/80 mb-6">
              Thank you for scheduling a consultation. You will receive a
              confirmation call shortly.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#1a2332] text-white hover:bg-[#243044]"
            >
              Book Another Consultation
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-[#c9a962]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1a2332]/70 text-sm tracking-widest uppercase mb-2">
              — Schedule Now —
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a2332] mb-6">
              Quick Consultation Booking
            </h2>
            <p className="text-[#1a2332]/80 mb-8">
              Book a free 30-minute consultation to discuss your legal matters.
              I believe in understanding your case thoroughly before proceeding.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a2332] rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2332]">
                    Flexible Scheduling
                  </h4>
                  <p className="text-sm text-[#1a2332]/70">
                    Choose a time that works for you
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a2332] rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2332]">
                    30-Min Free Session
                  </h4>
                  <p className="text-sm text-[#1a2332]/70">
                    No charges for initial consultation
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a2332] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2332]">
                    Confirmation Call
                  </h4>
                  <p className="text-sm text-[#1a2332]/70">
                    We will call to confirm your appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-[#1a2332] mb-6">
              Book Your Slot
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#1a2332]">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                    className="border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#1a2332]">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                    className="border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#1a2332]">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  className="border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="consultationType" className="text-[#1a2332]">Consultation Type</Label>
                <Select required>
                  <SelectTrigger className="border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {consultationTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-[#1a2332]">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    className="border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-[#1a2332]">Preferred Time</Label>
                  <Select required>
                    <SelectTrigger className="border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot.toLowerCase()}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1a2332] text-white hover:bg-[#243044] py-6 text-lg"
              >
                {isLoading ? "Booking..." : "Book Free Consultation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
