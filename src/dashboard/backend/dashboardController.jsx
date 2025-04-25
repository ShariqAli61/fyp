const Dashboard = require("../models/Dashboard");

exports.getStudentDashboard = async (req, res) => {
  const { studentId } = req.params;
  try {
    const dashboard = await Dashboard.findOne({ studentId });
    if (!dashboard) return res.status(404).json({ message: "Dashboard not found" });
    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
