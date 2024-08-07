import React, { useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';

const AttendanceGrading = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', attendance: true, grade: 85 },
    { id: 2, name: 'Bob Smith', attendance: false, grade: 78 },
    { id: 3, name: 'Charlie Brown', attendance: true, grade: 92 },
  ]);

  const handleAttendanceChange = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, attendance: !student.attendance } : student
    ));
  };

  const handleGradeChange = (id, grade) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, grade: parseInt(grade) } : student
    ));
  };

  const saveChanges = () => {
    // Here you would typically send the updated data to your backend
    console.log('Saving changes:', students);
    alert('Changes saved successfully!');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaClipboardList className="mr-2" />
        Attendance & Grading
      </h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={student.attendance}
                    onChange={() => handleAttendanceChange(student.id)}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    value={student.grade}
                    onChange={(e) => handleGradeChange(student.id, e.target.value)}
                    className="form-input w-20 rounded-md shadow-sm"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={saveChanges}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AttendanceGrading;