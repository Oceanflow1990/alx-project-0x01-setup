import React, { useState } from "react"
import { UserData, UserModalProps } from "@/interfaces"

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<UserData, "id">>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    nestedField?: string
  ) => {
    if (nestedField) {
      setFormData((prev) => ({
        ...prev,
        [field]: {
          ...prev[field as keyof typeof prev],
          [nestedField]: e.target.value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newUser: UserData = {
      id: Date.now(), // simple unique id
      ...formData,
    }
    onSubmit(newUser)   // ✅ changed from onSave
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* form inputs same as before */}
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => handleChange(e, "username")}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleChange(e, "phone")}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Website"
            value={formData.website}
            onChange={(e) => handleChange(e, "website")}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company.name}
            onChange={(e) => handleChange(e, "company", "name")}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserModal
