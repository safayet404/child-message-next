"use client"
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import childJournalist from "@/assets/sishu sangbadik.png";
import childPresenter from "@/assets/sishu presenter.png";
import axios from "axios";  // Import axios

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

interface ChildJournalistProps {
  home_ad1: string;
}

const Modal = ({ isOpen, onClose, title }: ModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    mother_name: "",
    class: "",
    district: "",
    mobile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/proxy", formData);

      if (response.status === 200) {
        alert("Submission successful!");
        onClose();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label>নাম</label>
          <input type="text" name="name" placeholder="আপনার নাম লিখুন" className="border p-2 rounded" value={formData.name} onChange={handleChange} required />

          <label>বাবার নাম</label>
          <input type="text" name="father_name" placeholder="আপনার বাবার নাম লিখুন" className="border p-2 rounded" value={formData.father_name} onChange={handleChange} required />

          <label>মায়ের নাম</label>
          <input type="text" name="mother_name" placeholder="আপনার মায়ের নাম লিখুন" className="border p-2 rounded" value={formData.mother_name} onChange={handleChange} required />

          <label>শ্রেনী</label>
          <input type="text" name="class" placeholder="আপনার শ্রেনী লিখুন" className="border p-2 rounded" value={formData.class} onChange={handleChange} required />

          <label>জেলা</label>
          <input type="text" name="district" placeholder="আপনার জেলা লিখুন" className="border p-2 rounded" value={formData.district} onChange={handleChange} required />

          <label>মোবাইল</label>
          <input type="text" name="mobile" placeholder="আপনার মোবাইল নাম্বার লিখুন" className="border p-2 rounded" value={formData.mobile} onChange={handleChange} required />

          <button type="submit" className="bg-primary text-white py-2 rounded-lg font-semibold">
            সাবমিট
          </button>
        </form>
      </div>
    </div>
  );
};
export default function ChildJournalist({ home_ad1 }: ChildJournalistProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="grid grid-cols-3 gap-x-4 justify-between mt-8 mb-16">
      <div>
        <div className="h-[100px] md:h-[250px]">
          <Image
            src={childJournalist}
            height={250}
            width={340}
            className="h-full w-full"
            alt="childJournalist"
            onClick={() => openModal("শিশু সাংবাদিক হতে চাই")}
          />
        </div>
        <p
          className="bg-primary rounded-lg md:rounded-2xl mt-5 h-[50px] text-white flex items-center justify-center text-center p-2 text-sm md:text-base font-medium md:font-semibold inter-font cursor-pointer"
          onClick={() => openModal("শিশু সাংবাদিক হতে চাই")}
        >
          শিশু সাংবাদিক হতে চাই
        </p>
      </div>
      <div>
        <div className="h-[100px] md:h-[250px]">
          <Image
            src={childPresenter}
            height={230}
            width={340}
            className="h-full w-full"
            alt="childPresenter"
            onClick={() => openModal("শিশু প্রেজেন্টার হতে চাই")}
          />
        </div>
        <p
          className="bg-primary rounded-lg mt-5 md:rounded-2xl h-[50px] text-white flex items-center text-center p-2 justify-center text-sm md:text-base font-medium md:font-semibold inter-font cursor-pointer"
          onClick={() => openModal("শিশু প্রেজেন্টার হতে চাই")}
        >
          শিশু প্রেজেন্টার হতে চাই
        </p>
      </div>
      <div className="md:h-[300px]">
        <Image
          src={home_ad1 || "/path/to/default-image.jpg"}
          height={250}
          width={340}
          className="h-full w-full"
          alt="nescafeeAd"
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle} />
    </div>
  );
}
