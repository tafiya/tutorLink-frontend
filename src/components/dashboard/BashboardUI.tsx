/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const Dashboard = () => {
  const data = {
    totalBookings: 8,
    totalSpent: 2900,
    upcomingSessions: 0,
    completedSessions: 0,
    bookingCompletion: 0,
    upcomingCount: 0,
    enrolledSubjects: 0,
    hiredTutors: 0,
    reviewsWritten: 4,
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto grid gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 text-gray-800">
      {/* Summary Cards */}
      <Card
        title="Total Bookings"
        value={data.totalBookings}
        color="blue"
        icon="📖"
      />
      <Card
        title="Total Spent"
        value={`$${data.totalSpent}`}
        color="blue"
        icon="💵"
      />
      <Card
        title="Upcoming Sessions"
        value={data.upcomingSessions}
        color="blue"
        icon="📅"
      />
      <Card
        title="Completed Sessions"
        value={data.completedSessions}
        color="blue"
        icon="✅"
      />

      {/* Learning Progress */}
      <div className="col-span-full bg-white p-6 rounded-2xl shadow-[0px_0px_5px_theme(colors.blue.200)]">
        <h2 className="text-xl font-semibold mb-4 text-orange-600">
          🔋 Learning Progress
        </h2>
        <ProgressBar
          label="Bookings Completion"
          count={data.bookingCompletion}
          total={data.totalBookings}
        />
        <ProgressBar
          label="Upcoming Sessions"
          count={data.upcomingCount}
          total={data.totalBookings}
        />
        <div className="mt-4 p-4 bg-orange-50 text-sm rounded-xl">
          <strong>Learning Tip: </strong>Regular study sessions of 25-30 minutes
          with short breaks in between can improve retention by up to 30%.
        </div>
      </div>

      {/* Learning Activity */}
      <div className="col-span-full bg-white p-6 rounded-2xl shadow-[0px_0px_5px_theme(colors.blue.200)]">
        <h2 className="text-xl font-semibold mb-4 text-orange-600">
          🔺 Learning Activity
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <ActivityCard
            title="Enrolled Subjects"
            value={data.enrolledSubjects}
            icon="📖"
          />
          <ActivityCard
            title="Hired Tutors"
            value={data.hiredTutors}
            icon="👥"
          />
          <ActivityCard
            title="Reviews Written"
            value={data.reviewsWritten}
            icon="⭐"
          />
        </div>
        <div className="mt-4 text-sm bg-gray-50 p-4 rounded-xl">
          <strong>Activity Summary: </strong>You`ve been making steady progress!
          Your engagement is active. Consider hiring a tutor to accelerate your
          learning.
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, color, icon }: any) => (
  <div
    className={`bg-white p-6 rounded-2xl shadow-md border-t-4 border-${color}-500`}
  >
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className={`text-2xl font-bold text-${color}-600`}>{value}</h3>
      </div>
      <span className={`text-${color}-500 text-3xl`}>{icon}</span>
    </div>
  </div>
);

const ProgressBar = ({ label, count, total }: any) => {
  const percent = total === 0 ? 0 : (count / total) * 100;
  return (
    <div className="mb-4">
      <p className="text-sm mb-1">
        {label} ({count}/{total})
      </p>
      <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-400"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

const ActivityCard = ({ title, value, icon }: any) => (
  <div className="bg-white border p-4 rounded-xl shadow-sm">
    <div className="text-3xl mb-2">{icon}</div>
    <h4 className="text-lg font-semibold">{value}</h4>
    <p className="text-sm text-gray-500">{title}</p>
  </div>
);

export default Dashboard;
