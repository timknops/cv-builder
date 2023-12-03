import { v4 as uuidv4 } from "uuid";

const sampleData = {
  personalDetails: {
    fullName: "John Doe",
    email: "johndoe38@gmail.com",
    phoneNumber: "08123456789",
    address: "John Doe Street, Abuja, Jd 12345",
  },
  education: [
    {
      school: "University of Abuja",
      degree: "BSc. Computer Science",
      startYear: "2015",
      endYear: "2019",
      location: "Abuja",
      id: uuidv4(),
    },
    {
      school: "University of Ekiti",
      degree: "MSc. Computer Networking",
      startYear: "2020",
      endYear: "2022",
      location: "Ekiti",
      id: uuidv4(),
    },
  ],
  experience: [
    {
      company: "Google",
      title: "Software Engineer",
      startDate: "2019/01",
      endDate: "2020/10",
      location: "Abuja",
      description:
        "Responsible for developing and maintaining software applications using JavaScript and React. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented new features and enhancements based on customer requirements.",
      id: uuidv4(),
    },
    {
      company: "Facebook",
      title: "DevOps Engineer",
      startDate: "2020/11",
      endDate: "2021/10",
      location: "Lagos",
      description: "lorem ipsum",
      id: uuidv4(),
    },
  ],
};

export default sampleData;
