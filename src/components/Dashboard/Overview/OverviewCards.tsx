/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiUsers } from "react-icons/hi";

const OverviewCards = ({ data }: { data: any }) => {
  const countData = [
    {
      id: 1,
      background: "#ffffff",
      name: "Active Requirements",
      icon: <HiUsers className="size-5 text-secondary-color" />,
      count: data?.totalActiveRequirements || 0,
    },
    {
      id: 2,
      background: "#ffffff",
      name: "Total CVs Received",
      icon: <HiUsers className="size-5 text-secondary-color" />,
      count: data?.totalCvReceived || 0,
    },
    {
      id: 3,
      background: "#ffffff",
      name: "New CVs",
      icon: <HiUsers className="size-6 text-secondary-color" />,
      count: data?.totalNewCv || 0,
    },
    {
      id: 4,
      background: "#ffffff",
      name: "Total Placement",
      icon: <HiUsers className="size-6 text-secondary-color" />,
      count: data?.totalPlacement || 0,
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-1 lg:gap-3 mb-5 ">
      {/* Company  */}
      {countData.map((item) => (
        <div
          key={item.id}
          className={`flex rounded-2xl w-full my-2 lg:my-0 flex-1 border border-[#E1E1E1] p-6`}
          style={{
            backgroundColor: item.background,
          }}
        >
          <div className="!w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm sm:text-base lg:text-lg  font-semibold mb-1  tracking-tight w-full text-nowrap">
                {item.name}
              </p>
              <p>{item?.icon}</p>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl  font-bold capitalize tracking-wider">
              {item.count}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
