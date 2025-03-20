// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const DashboardContainer = styled.div`
//   display: flex;
//   height: 100vh;
// `;

// const Sidebar = styled.div`
//   width: 250px;
//   background: #2c3e50;
//   color: white;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
// `;

// const SidebarLink = styled.a`
//   color: white;
//   text-decoration: none;
//   padding: 10px;
//   margin: 5px 0;
//   display: block;
//   border-radius: 4px;
//   transition: 0.3s;
//   &:hover {
//     background: #34495e;
//   }
// `;

// const ContentArea = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   background: #f4f4f4;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #3498db;
//   color: white;
//   padding: 15px;
// `;

// const Footer = styled.footer`
//   background: #2c3e50;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
// `;

// const DashboardContent = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
//   margin-top: 20px;
// `;

// const Card = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const ChartContainer = styled.div`
//   width: 100%;
//   margin-top: 40px;
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Dashboard = () => {
//   const [projects, setProjects] = useState(0);
//   const [indicators, setIndicators] = useState(0);
//   const [reports, setReports] = useState(0);

//   useEffect(() => {
//     // Fetch Projects
//     axios.get("http://localhost:8000/api/projects/")
//       .then(response => setProjects(response.data.length))
//       .catch(error => console.error("Error fetching projects:", error));

//     // Fetch Indicators
//     axios.get("http://localhost:8000/api/indicators/")
//       .then(response => setIndicators(response.data.length))
//       .catch(error => console.error("Error fetching indicators:", error));

//     // Fetch Reports
//     axios.get("http://localhost:8000/api/reports/")
//       .then(response => setReports(response.data.length))
//       .catch(error => console.error("Error fetching reports:", error));
//   }, []);

//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Users",
//         data: [10, 20, 30, 40, 50, 60],
//         backgroundColor: "rgba(52, 152, 219, 0.5)",
//       },
//     ],
//   };

//   return (
//     <DashboardContainer>
//       <Sidebar>
//         <h2>Menu</h2>
//         <SidebarLink href="#">Home</SidebarLink>
//         <SidebarLink href="#">Projects</SidebarLink>
//         <SidebarLink href="#">Indicators</SidebarLink>
//         <SidebarLink href="#">Reports</SidebarLink>
//         <SidebarLink href="#">Settings</SidebarLink>
//         <SidebarLink href="#">Logout</SidebarLink>
//       </Sidebar>

//       <ContentArea>
//         <Header>
//           <h2>Mene System</h2>
//           <span>Welcome, User</span>
//         </Header>

//         {/* Main Dashboard Content */}
//         <DashboardContent>
//           <Card>
//             <h3>Total Projects</h3>
//             <p>{projects}</p>
//           </Card>
//           <Card>
//             <h3>Total Indicators</h3>
//             <p>{indicators}</p>
//           </Card>
//           <Card>
//             <h3>Total Reports</h3>
//             <p>{reports}</p>
//           </Card>
//         </DashboardContent>

//         {/* Chart Section */}
//         <ChartContainer>
//           <h3>Users Over Time</h3>
//           <Bar data={data} />
//         </ChartContainer>

//         <Footer>© 2025 Mene System. All Rights Reserved.</Footer>
//       </ContentArea>
//     </DashboardContainer>
//   );
// };
import React, { useEffect, useState } from "react"; // Ensure useEffect and useState are imported
import styled from "styled-components";
import axios from "axios";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import ClipLoader from "react-spinners/ClipLoader"; // Ensure you install react-spinners

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }

 @media (min-width: 650px) {
    flex-direction: row;
  }

 @media (min-width: 480px) {
    flex-direction: row;
  }

 @media (min-width: 212px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  background: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

const SidebarLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 5px 0;
  display: block;
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    background: yellow;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f4f4f4;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3498db;
  color: white;
  padding: 15px;
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px;
  position: relative; // Changed to relative to allow footer to stay at bottom
`;

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  flex: 1; // Allows the dashboard content to grow and fill available space
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ChartContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  grid-column: span 3; // Make the chart span all columns
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Dashboard = () => {
  const [projects, setProjects] = useState(0);
  const [indicators, setIndicators] = useState(0);
  const [reports, setReports] = useState(0);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        // Fetch Projects
        const projectsResponse = await axios.get("http://localhost:8000/api/projects/");
        setProjects(projectsResponse.data.length);

        // Fetch Indicators
        const indicatorsResponse = await axios.get("http://localhost:8000/api/indicators/");
        setIndicators(indicatorsResponse.data.length);

        // Fetch Reports
        const reportsResponse = await axios.get("http://localhost:8000/api/reports/");
        setReports(reportsResponse.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later."); // Set error state
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: "rgba(52, 152, 219, 0.5)",
      },
    ],
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <h2>Menu</h2>
        <SidebarLink href="#">Home</SidebarLink>
        <SidebarLink href="#">Projects</SidebarLink>
        <SidebarLink href="#">Indicators</SidebarLink>
        <SidebarLink href="#">Reports</SidebarLink>
        <SidebarLink href="#">Settings</SidebarLink>
        <SidebarLink href="#">Logout</SidebarLink>
      </Sidebar>

      <ContentArea>
        <Header>
          <h2>Mene System</h2>
          <span>Welcome, User</span>
        </Header>

        {/* Main Dashboard Content */}
        <DashboardContent>
          {loading ? (
            <LoaderContainer>
              <ClipLoader color="#3498db" loading={loading} size={50} />
            </LoaderContainer>
          ) : (
            <>
              {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
              <Card>
                <h3>Total Projects</h3>
                <p>{projects}</p>
              </Card>
              <Card>
                <h3>Total Indicators</h3>
                <p>{indicators}</p>
              </Card>
              <Card>
                <h3>Total Reports</h3>
                <p>{reports}</p>
              </Card>

              {/* Chart Section inside DashboardContent */}
              <ChartContainer>
                <h3>Users Over Time</h3>
                <Bar data={data} />
              </ChartContainer>
            </>
          )}
        </DashboardContent>

        <Footer>© 2025 Mene System. All Rights Reserved.</Footer>
      </ContentArea>
    </DashboardContainer>
  );
};

export default Dashboard;
