import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#063b2b]">
                        Contact <span className="text-[#e8a817]">Haat Bazar</span>
                    </h2>

                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        আপনার যেকোনো প্রশ্ন, অর্ডার বা সহযোগিতার জন্য
                        আমাদের সাথে যোগাযোগ করুন।
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Phone */}
                    <div className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center
                            rounded-full bg-[#063b2b] text-white text-xl">
                            <FaPhoneAlt />
                        </div>

                        <h3 className="text-xl font-bold text-[#063b2b] mb-2">
                            Phone
                        </h3>

                        <p className="text-gray-600">
                            +880 1308210576
                        </p>

                        <a
                            href="tel:+8801308210576"
                            className="inline-block mt-3 text-[#e8a817] font-semibold hover:underline"
                        >
                            Call Us
                        </a>
                    </div>
                    {/* whatsapp */}
                    <div className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center
                            rounded-full bg-[#25D366] text-white text-2xl">
                            <FaWhatsapp />
                        </div>

                        <h3 className="text-xl font-bold text-[#063b2b] mb-2">
                            WhatsApp
                        </h3>

                        <p className="text-gray-600">
                            +880 1308210576
                        </p>

                        <a
                            href="https://wa.me/8801308210576"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-[#25D366] font-semibold hover:underline"
                        >
                            Chat Now
                        </a>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center
                            rounded-full bg-[#063b2b] text-white text-xl">
                            <FaEnvelope />
                        </div>

                        <h3 className="text-xl font-bold text-[#063b2b] mb-2">
                            Email
                        </h3>

                        <p className="text-gray-600">
                            support@haatbazar.com
                        </p>

                        <a
                            href="mailto:support@haatbazar.com"
                            className="inline-block mt-3 text-[#e8a817] font-semibold hover:underline"
                        >
                            Send Email
                        </a>
                    </div>

                    {/* Address */}
                    <div className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center
                            rounded-full bg-[#063b2b] text-white text-xl">
                            <FaMapMarkerAlt />
                        </div>

                        <h3 className="text-xl font-bold text-[#063b2b] mb-2">
                            Address
                        </h3>

                        <p className="text-gray-600">
                            Dhaka, Bangladesh
                        </p>

                        <span className="inline-block mt-3 text-[#e8a817] font-semibold">
                            Visit Us
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactInfo;